import type { Character } from '../services/character';
import type { Talent, TalentTree } from '../services/talent';
import talentTierRequirement from './talentTierRequirement';

export default function canUndoTalent(
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
