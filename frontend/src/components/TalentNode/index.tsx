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

const toRoman = (num: number): string => {
    const romanNumerals: { [key: number]: string } = {
        0: '*',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
    };
    return romanNumerals[num] || num.toString();
};

export default function TalentNode({ data }: TalentNodeProps) {
    let maxLevel = data.talentInfo.levels.length - 1;
    let levelIndex = Math.min(data.currentLevel - 1, maxLevel);

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
            <div
                className="talent-tier"
                style={{
                    borderColor: getTalentBorderColor(
                        data.talentInfo.color || ''
                    ),
                }}
            >
                <span>{toRoman(data.talentInfo.tier)}</span>
            </div>
            <FaLock className="talent-node-locked" />
            <TalentIcon iconName={data.talentInfo.icon || ''} />
            <div className="talent-node-tooltip-container">
                <h3>{data.talentInfo.name}</h3>
                <div className="talent-node-tooltip-text">
                    {getMarkDown({
                        markdown:
                            data.talentInfo.levels[
                                levelIndex > 0 ? levelIndex : 0
                            ].description || '',
                    })}
                </div>
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
