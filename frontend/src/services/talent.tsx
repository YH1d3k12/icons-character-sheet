import type { Character } from './character';

export type StatIncreaseType = 'flat' | 'percent' | 'multiplier';

export interface StatIncrease {
    stat: string;
    type: StatIncreaseType;
    amount: number;
}

export interface TalentLevel {
    level: number;
    description?: string;
    statIncreases?: StatIncrease[];
}

export type TalentType = 'active' | 'mod-active' | 'passive' | 'conditional';

export interface Talent {
    id: string;
    tier: number;
    type: TalentType;
    name: string;
    icon?: string;
    color?: string;
    connectsTo?: string[];
    prerequisites?: string[];
    relatedTo?: string[];
    levels: TalentLevel[];
    position: { x: number; y: number };
}

export type TalentTreeTag = 'class' | 'universal' | 'racial';

export interface TalentTree {
    id: number;
    name: string;
    tag: TalentTreeTag;
    talents: Talent[];
}

export function canAcquireTalent(
    character: Character,
    classId: number,
    talent: Talent
): boolean {
    // Check if the character has enough CLP (Class Points).
    if (character.maxClp <= character.spentClp) return false;

    // Check if the character has enough points invested in the class.
    const invested = character.classInvestments[classId] ?? 0;
    if (invested < talentTierRequirement(talent.tier)) return false;

    // Get character's acquired class talents to check prerequisites.
    const acquired = character.acquiredTalents[classId] ?? [];

    const currentLevel = acquired.find(t => t.id === talent.id)?.level ?? 0;
    const nextLevel = currentLevel + 1;

    const talentHasNextLevel = talent.levels.length >= nextLevel;
    if (!talentHasNextLevel) return false;

    const prerequisitesMet =
        talent.prerequisites?.every(req => acquired.some(t => t.id === req)) ??
        true;

    return prerequisitesMet;
}

export function acquireTalent(
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

export function canUndoTalent(
    character: Character,
    classId: number,
    talent: Talent,
    talentTree: TalentTree
): boolean {
    const acquired = character.acquiredTalents[classId] ?? [];
    const currentLevel = acquired.find(t => t.id === talent.id)?.level ?? 0;

    // Cannot undo if the talent is not acquired or at level 0.
    if (currentLevel === 0) return false;

    // Check if any acquired talent depends on this one.
    const dependentTalents = talentTree.talents.filter(other =>
        other.prerequisites?.includes(talent.id)
    );
    const talentIds = acquired.map(t => t.id);
    const hasActiveDependents = dependentTalents.some(dep =>
        talentIds.includes(dep.id)
    );
    if (hasActiveDependents && currentLevel == 1) return false;

    // Check if the character has enough CLP to undo this talent.
    const highestTierAcquired = Math.max(
        ...acquired.map(
            t => talentTree.talents.find(tt => tt.id === t.id)?.tier ?? 0
        )
    );
    const minInvestedRequirement = talentTierRequirement(highestTierAcquired);
    if (
        character.spentClp - 1 <= minInvestedRequirement &&
        talent.tier != highestTierAcquired
    ) {
        return false;
    }

    return true;
}

export function undoTalent(
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

function talentTierRequirement(tier: number): number {
    return [0, 1, 5, 9, 13][tier] ?? Infinity;
}
