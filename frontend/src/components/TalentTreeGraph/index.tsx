import React from 'react';
import type { Node, Edge } from 'reactflow';
import ReactFlow, {
    Background,
    Controls,
    MiniMap,
    useNodesState,
    useEdgesState,
    addEdge,
} from 'reactflow';
import type { TalentTree, Talent } from '../../services/talent';
import type { AcquiredTalent, Character } from '../../services/character';
import canAcquireTalent from '../../utils/canAcquireTalent';
import acquireTalent from '../../utils/acquireTalent';
import canUndoTalent from '../../utils/canUndoTalent';
import undoTalent from '../../utils/undoTalent';
import TalentNode from '../TalentNode';
import 'reactflow/dist/style.css';
import './styles.css';

interface TalentTreeGraphProps {
    talentTree: TalentTree;
    character: Character;
    setCharacter: React.Dispatch<React.SetStateAction<Character>>;
}

const generateNodesAndEdges = (talents: Talent[]) => {
    const nodes: Node[] = talents.map((talent, index) => ({
        id: talent.id,
        type: 'talentNode',
        data: {
            talentInfo: talent,
        },
        position: talent.position ?? { x: 100 * index, y: 0 },
        draggable: false,
    }));

    const edges: Edge[] = talents.flatMap(talent =>
        (talent.connectsTo || []).map(targetId => ({
            id: `${talent.id}-${targetId}`,
            source: talent.id,
            target: targetId,
            animated: false,
            style: { stroke: '#999' },
        }))
    );

    return { nodes, edges };
};

const nodeTypes = {
    talentNode: TalentNode,
};

const TalentTreeGraph: React.FC<TalentTreeGraphProps> = ({
    talentTree,
    character,
    setCharacter,
}) => {
    const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges(
        talentTree.talents
    );
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const handleLeftClick = (talent: Talent) => {
        if (canAcquireTalent(character, talentTree.id, talent)) {
            const updated = acquireTalent(character, talentTree.id, talent);
            setCharacter(updated);
        }
    };

    const handleRightClick = (talent: Talent, e: React.MouseEvent) => {
        e.preventDefault();
        if (canUndoTalent(character, talentTree.id, talent, talentTree)) {
            const updated = undoTalent(character, talentTree.id, talent.id);
            setCharacter(updated);
        }
    };

    const nodesWithHandlers = nodes.map(node => {
        const talent = node.data.talentInfo;
        const acquiredTalent = character.acquiredTalents[talentTree.id]?.find(
            (t: AcquiredTalent) => t.id === talent.id
        );

        const acquired = !!acquiredTalent;
        const eligible =
            !acquired && canAcquireTalent(character, talentTree.id, talent);
        const currentLevel = acquiredTalent?.level ?? 0;

        return {
            ...node,
            data: {
                ...node.data,
                onLeftClick: handleLeftClick,
                onRightClick: handleRightClick,
                state: acquired ? 'acquired' : eligible ? 'eligible' : 'locked',
                currentLevel,
            },
        };
    });

    return (
        <div className="talent-tree-graph">
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={nodesWithHandlers}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                fitView
            >
                <Background />
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default TalentTreeGraph;
