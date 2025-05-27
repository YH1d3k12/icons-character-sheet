export interface AcquiredTalent {
    id: string;
    level: number;
}

export interface Character {
    id: number;
    name: string;
    maxClp: number;
    spentClp: number;
    acquiredTalents: Record<number, AcquiredTalent[]>;
    classInvestments: Record<number, number>;
}
