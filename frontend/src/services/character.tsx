import type { AttributeMap } from './attribute';
import type { Speciality } from './speciality';
import type { Power } from './power';
import type { Item } from './item';

interface Resource {
    base: number;
    current: number;
    flat: number;
}

export interface Character {
    id: number;
    name: string;
    portrait: string;
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
    specialities: Speciality[];
    qualities: string;
    flaws: string;
    stunts: string;
    items: Item[];
}
