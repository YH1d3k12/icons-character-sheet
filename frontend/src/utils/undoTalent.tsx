import type { Character } from '../services/character';

export default function undoTalent(
    character: Character,
    classId: number,
    talentId: string
): Character {
    const acquired = character.acquiredTalents[classId] ?? [];

    const index = acquired.findIndex(t => t.id === talentId);
    if (index === -1) return character;

    const talent = acquired[index];

    const updated = [...acquired];
    if (talent.level > 1) {
        updated[index] = { ...talent, level: talent.level - 1 };
    } else {
        updated.splice(index, 1);
    }

    return {
        ...character,
        spentClp: character.spentClp - 1,
        acquiredTalents: {
            ...character.acquiredTalents,
            [classId]: updated,
        },
        classInvestments: {
            ...character.classInvestments,
            [classId]: (character.classInvestments[classId] ?? 0) - 1,
        },
    };
}
