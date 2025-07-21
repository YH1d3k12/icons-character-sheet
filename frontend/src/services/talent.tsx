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

export type TalentType = 'active' | 'mod-active' | 'passive' | 'conditional';

export interface Talent {
    id: string;
    tier: number;
    type: TalentType;
    name: string;
    icon?: string;
    color?: string;
    connectsTo?: string[];
    prerequisites?: string[];
    relatedTo?: string[];
    levels: TalentLevel[];
    position: { x: number; y: number };
}

export type TalentTreeTag = 'class' | 'universal' | 'racial';

export interface ClassSummary {
    id: number;
    name: string;
    hpIncrease: number;
    mpIncrease: number;
    tag: TalentTreeTag;
}

export interface TalentTree {
    summary: ClassSummary;
    talents: Talent[];
}
