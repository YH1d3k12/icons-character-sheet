import type { Character } from '../services/character';
import type { Talent } from '../services/talent';
import talentTierRequirement from './talentTierRequirement';

export default function canAcquireTalent(
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
