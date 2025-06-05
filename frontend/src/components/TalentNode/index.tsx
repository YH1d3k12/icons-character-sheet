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
        onLeftClick?: (talent: Talent) => void;
        onRightClick?: (talent: Talent, e: React.MouseEvent) => void;
        state: 'acquired' | 'eligible' | 'locked';
        currentLevel: number;
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
            onClick={() => data.onLeftClick?.(data.talentInfo)}
            onContextMenu={e => data.onRightClick?.(data.talentInfo, e)}
            className={`talent-node ${data.state}`}
            style={{
                borderColor: getTalentBorderColor(data.talentInfo.color || ''),
            }}
            title={data.talentInfo.name}
        >
            <div
                className="talent-current-level"
                style={{
                    borderColor: getTalentBorderColor(
                        data.talentInfo.color || ''
                    ),
                }}
            >
                <span>{data.currentLevel}</span>
            </div>
            <FaLock className="talent-node-locked" />
            <TalentIcon iconName={data.talentInfo.icon || ''} />
            <div className="talent-node-tooltip-container">
                <h3>{data.talentInfo.name}</h3>
                {data.talentInfo.levels.map(level => (
                    <div key={level.level} className="talent-node-tooltip-text">
                        {getMarkDown({ markdown: level.description || '' })}
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
