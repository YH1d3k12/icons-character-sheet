import { useMemo } from 'react';
import type { Character } from '../services/character';
import {
    calcCharacterLevel,
    calcTotalAttribute,
    calcAttributeModifier,
    calcTotalActions,
    calcTotalDefense,
} from './calcDerivedStats';

interface DerivedStatValue {
    base: number;
    modifier: number;
}

export type DerivedStatsMap = Record<string, DerivedStatValue>;

export default function getDerivedStats(character: Character): DerivedStatsMap {
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

    const strengthRelated = useMemo(
        () => ({
            totalStrength: {
                base: calcTotalAttribute(character, 'strength'),
                modifier: calcAttributeModifier(character, 'strength'),
            },
        }),
        [character.attributes.strength]
    );

    const dexterityRelated = useMemo(
        () => ({
            totalDexterity: {
                base: calcTotalAttribute(character, 'dexterity'),
                modifier: calcAttributeModifier(character, 'dexterity'),
            },
        }),
        [character.attributes.dexterity]
    );

    const vigorRelated = useMemo(
        () => ({
            totalVigor: {
                base: calcTotalAttribute(character, 'vigor'),
                modifier: calcAttributeModifier(character, 'vigor'),
            },
        }),
        [character.attributes.vigor]
    );

    const sensesRelated = useMemo(
        () => ({
            totalSenses: {
                base: calcTotalAttribute(character, 'senses'),
                modifier: calcAttributeModifier(character, 'senses'),
            },
        }),
        [character.attributes.senses]
    );

    const charismaRelated = useMemo(
        () => ({
            totalCharisma: {
                base: calcTotalAttribute(character, 'charisma'),
                modifier: calcAttributeModifier(character, 'charisma'),
            },
        }),
        [character.attributes.charisma]
    );

    const mindRelated = useMemo(
        () => ({
            totalMind: {
                base: calcTotalAttribute(character, 'mind'),
                modifier: calcAttributeModifier(character, 'mind'),
            },
        }),
        [character.attributes.mind]
    );

    const spiritRelated = useMemo(
        () => ({
            totalSpirit: {
                base: calcTotalAttribute(character, 'spirit'),
                modifier: calcAttributeModifier(character, 'spirit'),
            },
        }),
        [character.attributes.spirit]
    );

    const luckRelated = useMemo(
        () => ({
            totalLuck: {
                base: calcTotalAttribute(character, 'luck'),
                modifier: calcAttributeModifier(character, 'luck'),
            },
        }),
        [character.attributes.luck]
    );

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
