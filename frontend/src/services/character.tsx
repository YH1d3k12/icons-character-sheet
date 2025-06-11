export interface StatModifier {
    flat: number;
    percent: number;
    multiplier: number;
}

export interface ManualModifier {
    flat: number;
    percent: number;
    multiplier: number;
}

export interface AcquiredTalent {
    id: string;
    level: number;
}

export interface Attribute {
    base: number;
    modifiers: StatModifier;
    manual: ManualModifier;
}

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

export type AttributeMap = Record<AttributeKey, Attribute>;

export interface Character {
    id: number;
    name: string;
    maxClp: number;
    spentClp: number;
    acquiredTalents: Record<number, AcquiredTalent[]>;
    classInvestments: Record<number, number>;
    attributes: AttributeMap;
}
