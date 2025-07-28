import { useMemo } from 'react';
import type { Character } from '../services/character';

interface DerivedStatValue {
    base: number;
    modifier: number;
}

export type DerivedStatsMap = Record<string, DerivedStatValue>;

export default function useDerivedStats(character: Character): DerivedStatsMap {
    const derivedStats = {};

    return derivedStats;
}
