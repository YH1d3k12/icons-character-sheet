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
import TalentNode from '../TalentNode';
import 'reactflow/dist/style.css';
import './styles.css';

interface TalentTreeGraphProps {
    talentTree: TalentTree;
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

const TalentTreeGraph: React.FC<TalentTreeGraphProps> = ({ talentTree }) => {
    const { nodes: initialNodes, edges: initialEdges } = generateNodesAndEdges(
        talentTree.talents
    );
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return (
        <div style={{ width: '100%', height: 600 }}>
            <ReactFlow
                nodeTypes={nodeTypes}
                nodes={nodes}
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
