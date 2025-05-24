export type StatIncreaseType = 'flat' | 'percent' | 'multiplier';

export interface StatIncrease {
    stat: string;
    type: StatIncreaseType;
    amount: number;
}

export interface TalentLevel {
    level: number;
    description?: string;
    statIncreases?: StatIncrease[];
}

export interface Talent {
    id: string;
    name: string;
    icon?: string;
    color?: string;
    connectsTo?: string[]; // IDs of talents this connects to (for tree visualization).
    prerequisites?: string[]; // IDs of talents required to unlock.
    levels: TalentLevel[]; // Array of level details.
    position: { x: number; y: number };
}

export type TalentTreeTag = 'class' | 'universal' | 'racial';

export interface TalentTree {
    id: number;
    name: string;
    tag: TalentTreeTag;
    talents: Talent[];
}
