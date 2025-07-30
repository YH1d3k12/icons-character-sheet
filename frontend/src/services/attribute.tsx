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
