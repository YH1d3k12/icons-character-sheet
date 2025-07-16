export default function talentTierRequirement(tier: number): number {
    return [0, 1, 5, 9, 15, 20][tier] ?? Infinity;
}
