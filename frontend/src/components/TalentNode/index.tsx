// src/components/nodes/TalentNode.tsx
import { Handle, Position } from 'reactflow';
import TalentIcon from '../TalentIcon';
import './styles.css';

interface TalentNodeProps {
    data: {
        icon?: string;
        name: string;
        color?: string;
    };
}

const getTalentBorderColor = (color: string) => {
    switch (color) {
        case 'red':
            return '#ff0000';
        case 'blue':
            return '#0000ff';
        case 'green':
            return '#00ff00';
        default:
            return '#ccc';
    }
};

export default function TalentNode({ data }: TalentNodeProps) {
    return (
        <div
            onClick={() => console.log('Node clicked', data.name)}
            className="talent-node"
            style={{ borderColor: getTalentBorderColor(data.color || '') }}
            title={data.name}
        >
            <TalentIcon iconName={data.icon || ''} />
            <Handle
                className="talent-handle"
                type="source"
                position={Position.Top}
            />
            <Handle
                className="talent-handle"
                type="target"
                position={Position.Bottom}
            />
        </div>
    );
}
