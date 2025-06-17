export type ModifierType = 'flat' | 'percent' | 'multiplier';
export type ModifierSource = 'manual' | 'system';
export type AttributeKey =
    | 'hp'
    | 'mp'
    | 'ki'
    | 'barrier'
    | 'armor'
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
    | 'eletric'
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

export interface Attribute {
    base: number;
    modifiers: {
        value: number;
        type: ModifierType;
        source: ModifierSource;
    }[];
}

export interface Resistance {
    base: number;
    modifiers: {
        value: number;
        type: ModifierType;
        source: ModifierSource;
    }[];
}

export type AttributeMap = Record<AttributeKey, Attribute>;
export type ResistanceMap = Record<ResistanceKey, Resistance>;

export interface Character {
    id: number;
    level: number;
    name: string;
    maxClp: number;
    spentClp: number;
    acquiredTalents: Record<number, AcquiredTalent[]>;
    classInvestments: Record<number, number>;
    attributes: AttributeMap;
    resistances: ResistanceMap;
}
