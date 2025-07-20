export type BarKey = 'hp' | 'mp' | 'tempHp';

export type AttributeKey =
    | 'armor'
    | 'mArmor'
    | 'strength'
    | 'dexterity'
    | 'vigor'
    | 'senses'
    | 'charisma'
    | 'mind'
    | 'spirit'
    | 'luck'
    | 'actions'
    | 'speed'
    | 'flyingSpeed';
export type ResistanceKey =
    | 'slashing'
    | 'piercing'
    | 'bludgeoning'
    | 'corrosive'
    | 'cold'
    | 'electric'
    | 'fire'
    | 'thauma'
    | 'thunder'
    | 'poison'
    | 'psychic'
    | 'aetheric'
    | 'light'
    | 'dark';

export interface AcquiredTalent {
    id: string;
    level: number;
}

export interface BarValue {
    current: number;
    base: number;
    bought: number;
    flat: number;
    multiplier: number;
    percentile: number;
}

export interface StatValue {
    base: number;
    bought: number;
    flat: number;
    multiplier: number;
    percentile: number;
}

export type BarMap = Record<BarKey, BarValue>;
export type AttributeMap = Record<AttributeKey, StatValue>;
export type ResistanceMap = Record<ResistanceKey, StatValue>;

export interface Character {
    id: number;
    name: string;
    level: number;
    xp: number;
    spentXp: number;
    maxClp: number;
    spentClp: number;
    bars: BarMap;
    acquiredTalents: Record<number, AcquiredTalent[]>;
    classInvestments: Record<number, number>;
    attributes: AttributeMap;
    resistances: ResistanceMap;
}
