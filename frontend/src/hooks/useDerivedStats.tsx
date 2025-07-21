import { useMemo } from 'react';
import type { Character } from '../services/character';
import {
    calcCharacterLevel,
    calcTotalAttribute,
    calcAttributeModifier,
    calcTotalActions,
    calcTotalDefense,
} from '../utils/calcDerivedStats';

interface DerivedStatValue {
    base: number;
    modifier: number;
}

export type DerivedStatsMap = Record<string, DerivedStatValue>;

export default function useDerivedStats(character: Character): DerivedStatsMap {
    const overallRelated = useMemo(
        () => ({
            totalDefense: {
                base: calcTotalDefense(character),
                modifier: 0,
            },
            totalSpeed: {
                base: calcTotalAttribute(character, 'speed'),
                modifier: 0,
            },
        }),
        [character]
    );

    const xpRelated = useMemo(() => {
        const level = calcCharacterLevel(character.xp);

        return {
            level: { base: level, modifier: 0 },
            totalActions: { base: calcTotalActions(level), modifier: 0 },
        };
    }, [character.xp]);

    const strengthRelated = useMemo(() => {
        const calcStrength = calcTotalAttribute(character, 'strength');
        return {
            totalStrength: {
                base: calcStrength,
                modifier: calcAttributeModifier(calcStrength),
            },
        };
    }, [character.attributes.strength]);

    const dexterityRelated = useMemo(() => {
        const calcDexterity = calcTotalAttribute(character, 'dexterity');
        return {
            totalDexterity: {
                base: calcDexterity,
                modifier: calcAttributeModifier(calcDexterity),
            },
        };
    }, [character.attributes.dexterity]);

    const vigorRelated = useMemo(() => {
        const calcVigor = calcTotalAttribute(character, 'vigor');
        return {
            totalVigor: {
                base: calcVigor,
                modifier: calcAttributeModifier(calcVigor),
            },
        };
    }, [character.attributes.vigor]);

    const sensesRelated = useMemo(() => {
        const calcSenses = calcTotalAttribute(character, 'senses');
        return {
            totalSenses: {
                base: calcSenses,
                modifier: calcAttributeModifier(calcSenses),
            },
        };
    }, [character.attributes.senses]);

    const charismaRelated = useMemo(() => {
        const calcCharisma = calcTotalAttribute(character, 'charisma');
        return {
            totalCharisma: {
                base: calcCharisma,
                modifier: calcAttributeModifier(calcCharisma),
            },
        };
    }, [character.attributes.charisma]);

    const mindRelated = useMemo(() => {
        const calcMind = calcTotalAttribute(character, 'mind');
        return {
            totalMind: {
                base: calcMind,
                modifier: calcAttributeModifier(calcMind),
            },
        };
    }, [character.attributes.mind]);

    const spiritRelated = useMemo(() => {
        const calcSpirit = calcTotalAttribute(character, 'spirit');
        return {
            totalSpirit: {
                base: calcSpirit,
                modifier: calcAttributeModifier(calcSpirit),
            },
        };
    }, [character.attributes.spirit]);

    const luckRelated = useMemo(() => {
        const calcLuck = calcTotalAttribute(character, 'luck');
        return {
            totalLuck: {
                base: calcLuck,
                modifier: calcAttributeModifier(calcLuck),
            },
        };
    }, [character.attributes.luck]);

    const derivedStats = {
        ...overallRelated,
        ...xpRelated,
        ...strengthRelated,
        ...dexterityRelated,
        ...vigorRelated,
        ...sensesRelated,
        ...charismaRelated,
        ...mindRelated,
        ...spiritRelated,
        ...luckRelated,
    };

    return derivedStats;
}
