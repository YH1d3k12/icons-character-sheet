import type { Character } from '../services/character';

export function calcCharacterLevel(xp: number) {
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

export function calcTotalAttribute(
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

export function calcAttributeModifier(
    char: Character,
    attributeKey: keyof Character['attributes']
) {
    const value = calcTotalAttribute(char, attributeKey);
    return Math.floor((value - 25) / 5);
}

export function calcTotalActions(level: number) {
    const thresholds = [30, 60, 90];
    let actions = 3;

    for (const threshold of thresholds) {
        if (level >= threshold) {
            actions++;
        }
    }

    return actions;
}

export function calcTotalDefense(char: Character) {
    let baseDefense = char.attributes['defense'].base;
    baseDefense += char.attributes['defense'].bought;
    baseDefense += char.attributes['defense'].flat;

    baseDefense += calcAttributeModifier(char, 'dexterity');
    baseDefense += calcAttributeModifier(char, 'senses');

    baseDefense *= 1 + char.attributes['defense'].multiplier;
    baseDefense *= 1 + char.attributes['defense'].percentile / 100;

    return baseDefense;
}
