import type { Character } from '../services/character';

export function getCharacterLevel(xp: number) {
    let totalXp = xp - 50;
    let xpNeeded = 5;
    let level = 1;

    while (totalXp >= xpNeeded) {
        totalXp -= xpNeeded;
        level++;

        if (level % 10 === 1) {
            xpNeeded += 5;
        }
    }

    return level;
}

export function getTotalAttribute(
    char: Character,
    attributeKey: keyof Character['attributes']
) {
    let result =
        char.attributes[attributeKey].base +
        char.attributes[attributeKey].bought;

    result += char.attributes[attributeKey].flat;
    result *= 1 + char.attributes[attributeKey].multiplier;
    result *= 1 + char.attributes[attributeKey].percentile / 100;
    return result;
}
