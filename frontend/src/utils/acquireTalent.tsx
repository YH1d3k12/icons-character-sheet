import type { Character } from '../services/character';
import type { Talent } from '../services/talent';

export default function acquireTalent(
    character: Character,
    classId: number,
    talent: Talent
): Character {
    const acquired = character.acquiredTalents[classId] ?? [];

    // Check if already acquired or at max level.
    const existingIndex = acquired.findIndex(t => t.id === talent.id);
    const currentLevel =
        existingIndex !== -1 ? acquired[existingIndex].level : 0;
    const nextLevel = currentLevel + 1;

    if (nextLevel > talent.levels.length) {
        throw new Error('Cannot acquire talent: max level reached');
    }

    // Return updated character with the new talent acquired.
    const updatedCharacter: Character = {
        ...character,
        spentClp: character.spentClp + 1,
        acquiredTalents: {
            ...character.acquiredTalents,
            [classId]:
                existingIndex !== -1
                    ? [
                          ...acquired.slice(0, existingIndex),
                          { id: talent.id, level: nextLevel },
                          ...acquired.slice(existingIndex + 1),
                      ]
                    : [...acquired, { id: talent.id, level: 1 }],
        },
        classInvestments: {
            ...character.classInvestments,
            [classId]: (character.classInvestments[classId] ?? 0) + 1,
        },
    };

    return updatedCharacter;
}
