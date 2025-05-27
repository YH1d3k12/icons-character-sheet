// src/components/nodes/TalentNode.tsx
import { Handle, Position } from 'reactflow';
import type { Talent } from '../../services/talent';
import getMarkDown from '../../utils/getMarkDown';
import TalentIcon from '../TalentIcon';
import { FaLock } from 'react-icons/fa';
import './styles.css';

interface TalentNodeProps {
    data: {
        talentInfo: Talent;
    };
}

const getTalentBorderColor = (color: string) => {
    switch (color) {
        case 'green':
            return '#19ff21';
        case 'cyan':
            return '#19ffe0';
        case 'purple':
            return '#9f19ff';
        case 'yellow':
            return '#ffd319';
        default:
            return '#ccc';
    }
};

export default function TalentNode({ data }: TalentNodeProps) {
    return (
        <div
            onClick={() => console.log('Node clicked', data.talentInfo.name)}
            className="talent-node"
            style={{
                borderColor: getTalentBorderColor(data.talentInfo.color || ''),
            }}
            title={data.talentInfo.name}
        >
            <FaLock className="talent-node-locked" />
            <TalentIcon iconName={data.talentInfo.icon || ''} />
            <div className="talent-node-tooltip-container">
                <h3>{data.talentInfo.name}</h3>
                {data.talentInfo.levels.map(level => (
                    <div key={level.level} className="talent-node-tooltip-text">
                        <p>
                            {getMarkDown({ markdown: level.description || '' })}
                        </p>
                    </div>
                ))}
            </div>
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
