export type AttributeKey =
    | 'prowess'
    | 'coordination'
    | 'strength'
    | 'intellect'
    | 'awareness'
    | 'willpower';

export interface StatValue {
    base: number;
    flat: number;
}

export type AttributeMap = Record<AttributeKey, StatValue>;

export interface Resource {
    base: number;
    current: number;
    flat: number;
}

export interface Power {
    name: string;
    level: number;
    description?: string;
}

export interface Specialty {
    name: string;
    tier: number;
}

export interface Stunts {
    name: string;
    description: string;
}

export interface Item {
    name: string;
    quantity: number;
    description?: string;
    weight?: number;
}

export interface Character {
    id: number;
    name: string;
    origin: string;
    sex: string;
    age: number;
    height: string;
    weight: string;
    background: string;
    stamina: Resource;
    determination: Resource;
    attributes: AttributeMap;
    powers: Power[];
    specialties: Specialty[];
    qualities: string[];
    flaws: string[];
    stunts: Stunts[];
    items: Item[];
}
