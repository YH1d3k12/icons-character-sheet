import { useMemo } from 'react';
import type { Character } from '../services/character';

export default function useDerivedStats(character: Character) {
    const totalStamina = useMemo(() => {
        let result = character.stamina.base + character.stamina.flat;
        result += character.attributes.strength.base;
        result += character.attributes.willpower.base;

        return result;
    }, [
        character.stamina.base,
        character.stamina.flat,
        character.attributes.strength,
        character.attributes.willpower,
    ]);

    const totalDetermination = useMemo(() => {
        let result =
            character.determination.base + character.determination.flat;

        return result;
    }, [character.determination.base, character.determination.flat]);

    const derivedStats = {
        totalStamina,
        totalDetermination,
    };

    return derivedStats;
}
