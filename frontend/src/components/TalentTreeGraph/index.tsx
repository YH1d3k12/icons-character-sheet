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
import {
    canAcquireTalent,
    canUndoTalent,
    acquireTalent,
    undoTalent,
} from '../../services/talent';
import type { TalentTree, Talent } from '../../services/talent';
import TalentNode from '../TalentNode';
import 'reactflow/dist/style.css';
import './styles.css';
import type { AcquiredTalent, Character } from '../../services/character';

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
            console.log(`Acquiring talent: ${talent.name}`);
            const updated = acquireTalent(character, talentTree.id, talent);
            setCharacter(updated);
        }
    };

    const handleRightClick = (talent: Talent, e: React.MouseEvent) => {
        e.preventDefault();
        if (canUndoTalent(character, talentTree.id, talent, talentTree)) {
            console.log(`Undoing talent: ${talent.name}`);
            const updated = undoTalent(character, talentTree.id, talent.id);
            setCharacter(updated);
        }
    };

    const nodesWithHandlers = nodes.map(node => {
        const talent = node.data.talentInfo;
        const acquired =
            character.acquiredTalents[talentTree.id]?.some(
                (t: AcquiredTalent) => t.id === talent.id
            ) ?? false;
        const eligible =
            !acquired && canAcquireTalent(character, talentTree.id, talent);

        return {
            ...node,
            data: {
                ...node.data,
                onLeftClick: handleLeftClick,
                onRightClick: handleRightClick,
                state: acquired ? 'acquired' : eligible ? 'eligible' : 'locked',
            },
        };
    });

    return (
        <div style={{ width: '100%', height: 600 }}>
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
