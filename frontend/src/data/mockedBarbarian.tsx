import type { TalentTree } from '../services/talent';

const talentTreeBarbarian: TalentTree = {
    id: 3,
    name: 'Barbarian',
    tag: 'class',
    talents: [
        {
            id: 'barbarian_rage',
            tier: 0,
            type: 'active',
            name: 'Rage',
            icon: 'mighty-force',
            color: 'yellow',
            connectsTo: [
                'barbarian_fueling_rage',
                'barbarian_relentless_rage',
                'barbarian_menace',
                'barbarian_tiny_giant',
                'barbarian_reckless_momentum',
            ],
            prerequisites: [],
            levels: [
                {
                    level: 1,
                    description:
                        'At the cost of 1 action, you can enter a state of rage. While raging, you gain the following effects:\n\n *-* You have advantage on all strength based skill checks.\n\n *-* You have resistance to physical damage (bludgeoning, piercing and slashing).\n\n *-* You cannot concentrate or cast spells while raging (though you can still concentrate and use martial techniques).\n\nYou can rage twice per long rest. Rage lasts for 1 minute or until you choose to end it as a free action.',
                },
            ],
            position: { x: 0, y: 0 },
        },
        {
            id: 'barbarian_tiny_giant',
            tier: 1,
            type: 'passive',
            name: 'Tiny Giant',
            icon: 'weight-lifting-up',
            color: 'green',
            connectsTo: ['barbarian_wild_power'],
            prerequisites: ['barbarian_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'Your count as (**1**/2/3) times larger when determining your carrying capacity and the weight you can push, drag, or lift.',
                },
                {
                    level: 2,
                    description:
                        'Your count as (1/**2**/3) times larger when determining your carrying capacity and the weight you can push, drag, or lift.',
                },
                {
                    level: 3,
                    description:
                        'Your count as (1/2/**3**) times larger when determining your carrying capacity and the weight you can push, drag, or lift.',
                },
            ],
            position: { x: 150, y: -150 },
        },
        {
            id: 'barbarian_wild_power',
            tier: 3,
            type: 'passive',
            name: 'Wild Power',
            icon: 'biceps',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_tiny_giant'],
            levels: [
                {
                    level: 1,
                    description:
                        'Grants a +(**5**/10) bonus to your Strength and Vigor attributes.',
                },
                {
                    level: 2,
                    description:
                        'Grants a +(5/**10**) bonus to your Strength and Vigor attributes.',
                },
                {
                    level: 3,
                    description:
                        'Grants a +(**5**/10) bonus to your Strength and Vigor attributes.',
                },
            ],
            position: { x: 225, y: -250 },
        },
        {
            id: 'barbarian_menace',
            tier: 1,
            type: 'active',
            name: 'Menace',
            icon: 'death-zone',
            color: 'purple',
            connectsTo: [],
            prerequisites: ['barbarian_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'You have advantage on intimidation checks while raging. When you score a critical hit or kill a creature you can attempt an intimidation check against one creature of your choice as part of the same action.',
                },
            ],
            position: { x: 250, y: -125 },
        },
        {
            id: 'barbarian_reckless_momentum',
            tier: 1,
            type: 'active',
            name: 'Reckless Momentum',
            icon: 'sprint',
            color: 'purple',
            connectsTo: [
                'barbarian_brutal_leap',
                'barbarian_unstoppable_train',
            ],
            prerequisites: ['barbarian_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you move at least 6 meters straight toward a creature and hit it with a melee attack, you can push it 3 meters away and knock it prone (DC = 10 + Strength modifier).',
                },
            ],
            position: { x: -150, y: -125 },
        },
        {
            id: 'barbarian_brutal_leap',
            tier: 2,
            type: 'passive',
            name: 'Brutal Leap',
            icon: 'jump-across',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_reckless_momentum'],
            levels: [
                {
                    level: 1,
                    description:
                        '(**Double**/Triple) your jump distance and height. If you land adjacent to a creature, you can deal 1d6 + strength modifier in bludgeoning damage and knock them prone unless they succeed a Strength save (DC: 10 + Strength Modifier).',
                },
                {
                    level: 2,
                    description:
                        '(Double/**Triple**) your jump distance and height. If you land adjacent to a creature, you can deal 1d6 + strength modifier in bludgeoning damage and knock them prone unless they succeed a Strength save (DC: 10 + Strength Modifier).',
                },
            ],
            position: { x: -275, y: -175 },
        },
        {
            id: 'barbarian_unstoppable_train',
            tier: 2,
            type: 'passive',
            name: 'Unstoppable Train',
            icon: 'sprint',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_reckless_momentum'],
            levels: [
                {
                    level: 1,
                    description:
                        "Your base speed increases by 3 meters. You can move through the space of hostile creatures up to one size larger than you, dealing 1 + your Strength modifier in bludgeoning damage to them. If your Strength score is higher than their Strength or Dexterity, they cannot make a reactive strike against you due to being unbalanced until the end of your current turn. This damage can only be dealt once per turn.\n\nIf you end your turn in a hostile creature's space you are moved to the nearest unoccupied space adjacent to them.",
                },
            ],
            position: { x: -225, y: -250 },
        },
        {
            id: 'barbarian_fueling_rage',
            tier: 1,
            type: 'mod-active',
            name: 'Fueling Rage',
            icon: 'enrage',
            color: 'cyan',
            connectsTo: ['barbarian_berserk', 'barbarian_elemental_surge'],
            prerequisites: ['barbarian_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'While raging, you deal an additional (**2**/3/5/7/10) damage on melee and thrown attacks. You also increase the number of times you can rage by (**0**/1/2/3/4).',
                },
                {
                    level: 2,
                    description:
                        'While raging, you deal an additional (2/**3**/5/7/10) damage on melee and thrown attacks. You also increase the number of times you can rage by (0/**1**/2/3/4).',
                },
                {
                    level: 3,
                    description:
                        'While raging, you deal an additional (2/3/**5**/7/10) damage on melee and thrown attacks. You also increase the number of times you can rage by (0/1/**2**/3/4).',
                },
                {
                    level: 4,
                    description:
                        'While raging, you deal an additional (2/3/5/**7**/10) damage on melee and thrown attacks. You also increase the number of times you can rage by (0/1/2/**3**/4).',
                },
                {
                    level: 5,
                    description:
                        'While raging, you deal an additional (2/3/5/7/**10**) damage on melee and thrown attacks. You also increase the number of times you can rage by (0/1/2/3/**4**).',
                },
            ],
            position: { x: 50, y: -225 },
        },
        {
            id: 'barbarian_elemental_surge',
            tier: 2,
            type: 'active',
            name: 'Elemental Surge',
            icon: 'fire-silhouette',
            color: 'purple',
            connectsTo: ['barbarian_elemental_attacks'],
            prerequisites: ['barbarian_fueling_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'While raging, you create an elemental aura with a 3-meter radius around you. Hostile creatures that start their turn within the aura or enter it for the first time in a turn take (**3**/5/7/10) points of damage, based on your soul type (use cold for water; lightning for wind; corrosive for earth). Additionally, you can cast spells of your soul type, though you cannot concentrate on them while raging.',
                },
                {
                    level: 2,
                    description:
                        'While raging, you create an elemental aura with a 3-meter radius around you. Hostile creatures that start their turn within the aura or enter it for the first time in a turn take (3/**5**/7/10) points of damage, based on your soul type (use cold for water; lightning for wind; corrosive for earth). Additionally, you can cast spells of your soul type, though you cannot concentrate on them while raging.',
                },
                {
                    level: 3,
                    description:
                        'While raging, you create an elemental aura with a 3-meter radius around you. Hostile creatures that start their turn within the aura or enter it for the first time in a turn take (3/5/**7**/10) points of damage, based on your soul type (use cold for water; lightning for wind; corrosive for earth). Additionally, you can cast spells of your soul type, though you cannot concentrate on them while raging.',
                },
                {
                    level: 4,
                    description:
                        'While raging, you create an elemental aura with a 3-meter radius around you. Hostile creatures that start their turn within the aura or enter it for the first time in a turn take (3/5/7/**10**) points of damage, based on your soul type (use cold for water; lightning for wind; corrosive for earth). Additionally, you can cast spells of your soul type, though you cannot concentrate on them while raging.',
                },
            ],
            position: { x: 10, y: -325 },
        },
        {
            id: 'barbarian_elemental_attacks',
            tier: 3,
            type: 'passive',
            name: 'Elemental Attacks',
            icon: 'fire-silhouette',
            color: 'green',
            connectsTo: ['barbarian_primordial_strength'],
            prerequisites: ['barbarian_elemental_surge'],
            levels: [
                {
                    level: 1,
                    description:
                        "Your melee and thrown attacks deal an additional 1d8 points of elemental damage corresponding to your soul type. Additionally, when you hit a creature you can expend a rage charge to enhance your attack damage, adding (**2**/3/5)d8's plus (**10**/20/40) extra damage equal to your soul type.",
                },
                {
                    level: 2,
                    description:
                        "Your melee and thrown attacks deal an additional 1d8 points of elemental damage corresponding to your soul type. Additionally, when you hit a creature you can expend a rage charge to enhance your attack damage, adding (2/**3**/5)d8's plus (10/**20**/40) extra damage equal to your soul type.",
                },
                {
                    level: 3,
                    description:
                        "Your melee and thrown attacks deal an additional 1d8 points of elemental damage corresponding to your soul type. Additionally, when you hit a creature you can expend a rage charge to enhance your attack damage, adding (2/3/**5**)d8's plus (10/20/**40**) extra damage equal to your soul type.",
                },
            ],
            position: { x: -25, y: -425 },
        },
        {
            id: 'barbarian_primordial_strength',
            tier: 5,
            type: 'passive',
            name: 'Primordial Strength',
            icon: 'fire-silhouette',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_elemental_attacks'],
            levels: [
                {
                    level: 1,
                    description:
                        'You become immune to damage of your soul type, and your **Elemental Attacks** deal an additional 1d8 damage on each attack.',
                },
            ],
            position: { x: -10, y: -585 },
        },
        {
            id: 'barbarian_berserk',
            tier: 2,
            type: 'active',
            name: 'Berserk',
            icon: 'enrage',
            color: 'purple',
            connectsTo: [
                'barbarian_killing_momentum',
                'barbarian_instinctive_retaliation',
            ],
            prerequisites: ['barbarian_fueling_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'By channeling your fury into a more primal, uncontrollable force, you can enter a berserking state. While raging, you may spend 1 action to enter this state, or trigger it immediately when you first activate your rage (as part of the same action). While berserking, you gain the following benefits:\n\n *-* You cannot be charmed or frightened. If you are currently under the effects of these conditions, they are suppressed until you end your berserk state.\n\n *-* You cannot use or concentrate on martial techniques while berserking.\n\n *-* Your Strength modifier and **Fueling Rage** damage bonuses are both doubled for melee and thrown weapon attacks.\n\n *-* You gain resistance to all damage types.',
                },
            ],
            position: { x: 125, y: -350 },
        },
        {
            id: 'barbarian_killing_momentum',
            tier: 3,
            type: 'passive',
            name: 'Killing Momentum',
            icon: 'skull-crack',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_berserk'],
            levels: [
                {
                    level: 1,
                    description:
                        '(**Once**/twice) per turn, when you kill a creature or score a critical hit, you can make an additional attack.',
                },
                {
                    level: 2,
                    description:
                        '(Once/**twice**) per turn, when you kill a creature or score a critical hit, you can make an additional attack.',
                },
            ],
            position: { x: 225, y: -450 },
        },
        {
            id: 'barbarian_instinctive_retaliation',
            tier: 4,
            type: 'passive',
            name: 'Instinctive Retaliation',
            icon: 'divert',
            color: 'green',
            connectsTo: ['barbarian_hulking_rage'],
            prerequisites: ['barbarian_berserk'],
            levels: [
                {
                    level: 1,
                    description:
                        "When a creature attack hits you and is within melee range you can make a free reactive strike against it. You can't reactive strike the same creature this way twice in the same round.",
                },
            ],
            position: { x: 100, y: -500 },
        },
        {
            id: 'barbarian_hulking_rage',
            tier: 5,
            type: 'mod-active',
            name: 'Hulking Rage',
            icon: 'mighty-force',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['barbarian_instinctive_retaliation'],
            levels: [
                {
                    level: 1,
                    description:
                        'Once per turn, when you hit a creature with a melee attack while raging you can shove, grapple or throw the creature as part of the same action.',
                },
            ],
            position: { x: 175, y: -600 },
        },
        {
            id: 'barbarian_relentless_rage',
            tier: 1,
            type: 'mod-active',
            name: 'Relentless Rage',
            icon: 'healing',
            color: 'cyan',
            connectsTo: ['barbarian_shake_it_off', 'barbarian_ignore_pain'],
            prerequisites: ['barbarian_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'While raging you gain (**1**/3/5/7/10) + your Vigor Modifier in temporary hit points at the start of each turn.',
                },
                {
                    level: 2,
                    description:
                        'While raging you gain (1/**3**/5/7/10) + your Vigor Modifier in temporary hit points at the start of each turn.',
                },
                {
                    level: 3,
                    description:
                        'While raging you gain (1/3/**5**/7/10) + your Vigor Modifier in temporary hit points at the start of each turn.',
                },
                {
                    level: 4,
                    description:
                        'While raging you gain (1/3/5/**7**/10) + your Vigor Modifier in temporary hit points at the start of each turn.',
                },
                {
                    level: 5,
                    description:
                        'While raging you gain (1/3/5/7/**10**) + your Vigor Modifier in temporary hit points at the start of each turn.',
                },
            ],
            position: { x: -50, y: -225 },
        },
        {
            id: 'barbarian_shake_it_off',
            tier: 2,
            type: 'passive',
            name: 'Shake It Off',
            icon: 'mighty-force',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_relentless_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        "When you are on 'dying' state you still have your regular actions per turn instead of 1.",
                },
            ],
            position: { x: -150, y: -325 },
        },
        {
            id: 'barbarian_ignore_pain',
            tier: 4,
            type: 'passive',
            name: 'Ignore Pain',
            icon: 'healing',
            color: 'green',
            connectsTo: ['barbarian_undying_rage'],
            prerequisites: ['barbarian_relentless_rage'],
            levels: [
                {
                    level: 1,
                    description:
                        'Reduce all incoming damage by an amount equal to (**1**/3/5) plus your Vigor modifier (minimum of 1).',
                },
                {
                    level: 2,
                    description:
                        'Reduce all incoming damage by an amount equal to (1/**3**/5) plus your Vigor modifier (minimum of 1).',
                },
                {
                    level: 3,
                    description:
                        'Reduce all incoming damage by an amount equal to (1/3/**5**) plus your Vigor modifier (minimum of 1).',
                },
            ],
            position: { x: -100, y: -425 },
        },
        {
            id: 'barbarian_undying_rage',
            tier: 5,
            type: 'passive',
            name: 'Undying Rage',
            icon: 'healing',
            color: 'green',
            connectsTo: [],
            prerequisites: ['barbarian_ignore_pain'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you drop to 0 hit points while raging and don’t die outright, you can make a DC 10 Endurance + Vigor check. On a success, you drop to 1 hit point instead of entering the dying state. Each time you use this feature, the DC increases by 5. The DC resets to 10 after you complete a short or long rest.',
                },
            ],
            position: { x: -125, y: -525 },
        },
    ],
};

export default talentTreeBarbarian;
