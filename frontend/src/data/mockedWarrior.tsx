import type { TalentTree, ClassSummary } from '../services/talent';

export const warriorSummary: ClassSummary = {
    id: 2,
    name: 'Warrior',
    hpIncrease: 6,
    mpIncrease: 4,
    tag: 'class',
};

const talentTreeWarrior: TalentTree = {
    summary: warriorSummary,
    talents: [
        {
            id: 'warrior_combat_superiority',
            tier: 0,
            type: 'active',
            name: 'Combat Superiority',
            icon: 'swords-power',
            color: 'yellow',
            connectsTo: [
                'warrior_improved_on_guard',
                'warrior_improved_empowered_attack',
                'warrior_superiority_dice_reserve',
                'warrior_insight',
                'warrior_combat_prowess',
                'warrior_second_wind',
            ],
            prerequisites: [],
            levels: [
                {
                    level: 1,
                    description:
                        '**Combat Superiority**: You gain four superiority dice (d4s) to empower your actions in the following ways:\n\n* **Empowered Attack**: When you make an attack roll, you can expend a superiority die to add its result to the roll. You may choose to use this ability either before or after you roll the attack die, but must decide before the GM declares whether the attack hits or misses.\n\n* **On Guard**: When a creature targets you with an attack, you can expend a superiority die to add its result to your Defense against that attack.\n\nYou regain all expended superiority dice after completing a short or long rest.',
                },
            ],
            position: { x: 0, y: 0 },
        },
        {
            id: 'warrior_combat_prowess',
            tier: 1,
            type: 'active',
            name: 'Combat Prowess',
            icon: 'winged-sword',
            color: 'purple',
            connectsTo: ['warrior_combat_expertise'],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'Your unarmed and weapon attacks deal an additional (**1**/2/3/4/5) damage on hit. You may also turn a miss into a regular hit (**1**/2/3/4/5) times per long rest.',
                },
                {
                    level: 2,
                    description:
                        'Your unarmed and weapon attacks deal an additional (1/**2**/3/4/5) damage on hit. You may also turn a miss into a regular hit (1/**2**/3/4/5) times per long rest.',
                },
                {
                    level: 3,
                    description:
                        'Your unarmed and weapon attacks deal an additional (1/2/**3**/4/5) damage on hit. You may also turn a miss into a regular hit (1/2/**3**/4/5) times per long rest.',
                },
                {
                    level: 4,
                    description:
                        'Your unarmed and weapon attacks deal an additional (1/2/3/**4**/5) damage on hit. You may also turn a miss into a regular hit (1/2/3/**4**/5) times per long rest.',
                },
                {
                    level: 5,
                    description:
                        'Your unarmed and weapon attacks deal an additional (1/2/3/4/**5**) damage on hit. You may also turn a miss into a regular hit (1/2/3/4/**5**) times per long rest.',
                },
            ],
            position: { x: 55, y: -125 },
        },
        {
            id: 'warrior_combat_expertise',
            tier: 2,
            type: 'passive',
            name: 'Combat Expertise',
            icon: 'swords-emblem',
            color: 'green',
            connectsTo: ['warrior_combat_mastery', 'warrior_action_surge'],
            prerequisites: ['warrior_combat_prowess'],
            levels: [
                {
                    level: 1,
                    description:
                        'Your unarmed and weapon attacks deal an additional damage die on a successful hit.',
                },
            ],
            position: { x: 90, y: -265 },
        },
        {
            id: 'warrior_combat_mastery',
            tier: 4,
            type: 'passive',
            name: 'Combat Mastery',
            icon: 'swords-emblem',
            color: 'green',
            connectsTo: ['warrior_superior_technique'],
            prerequisites: ['warrior_combat_expertise'],
            levels: [
                {
                    level: 1,
                    description:
                        'Your unarmed and weapon attacks now deal two additional damage dice on a successful hit.',
                },
            ],
            position: { x: 70, y: -380 },
        },
        {
            id: 'warrior_superior_technique',
            tier: 5,
            type: 'active',
            name: 'Superior Technique',
            icon: 'pointy-sword',
            color: 'purple',
            connectsTo: [],
            prerequisites: ['warrior_combat_mastery'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you use a martial arts that requires a saving throw you may roll your superiority dice and add half the result (minimum of 1) to one creature DC.',
                },
            ],
            position: { x: 130, y: -525 },
        },
        {
            id: 'warrior_superiority_dice_reserve',
            tier: 1,
            type: 'mod-active',
            name: 'Dice Reserves',
            icon: 'cubes',
            color: 'cyan',
            connectsTo: [
                'warrior_superiority_dice_d6',
                'warrior_combat_adrenaline',
            ],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'Increase your superiority dice maximum by (**2**/4/6/8/10).',
                },
                {
                    level: 2,
                    description:
                        'Increase your superiority dice maximum by (2/**4**/6/8/10).',
                },
                {
                    level: 3,
                    description:
                        'Increase your superiority dice maximum by (2/4/**6**/8/10).',
                },
                {
                    level: 4,
                    description:
                        'Increase your superiority dice maximum by (2/4/6/**8**/10).',
                },
                {
                    level: 5,
                    description:
                        'Increase your superiority dice maximum by (2/4/6/8/**10**).',
                },
            ],
            position: { x: -15, y: -175 },
        },
        {
            id: 'warrior_superiority_dice_d6',
            tier: 2,
            type: 'mod-active',
            name: 'D6 Superiority',
            icon: 'd6',
            color: 'cyan',
            connectsTo: [
                'warrior_superiority_dice_d8',
                'warrior_double_superiority',
            ],
            prerequisites: ['warrior_superiority_dice_reserve'],
            levels: [
                {
                    level: 1,
                    description:
                        'Increase the size of your superiority dice to d6.',
                },
            ],
            position: { x: -40, y: -300 },
        },
        {
            id: 'warrior_superiority_dice_d8',
            tier: 3,
            type: 'mod-active',
            name: 'D8 Superiority',
            icon: 'd8',
            color: 'cyan',
            connectsTo: ['warrior_superiority_dice_d10'],
            prerequisites: ['warrior_superiority_dice_d6'],
            levels: [
                {
                    level: 1,
                    description:
                        'Increase the size of your superiority dice to d8.',
                },
            ],
            position: { x: -60, y: -380 },
        },
        {
            id: 'warrior_superiority_dice_d10',
            tier: 4,
            type: 'mod-active',
            name: 'D10 Superiority',
            icon: 'd10',
            color: 'cyan',
            connectsTo: ['warrior_superiority_dice_d12'],
            prerequisites: ['warrior_superiority_dice_d8'],
            levels: [
                {
                    level: 1,
                    description:
                        'Increase the size of your superiority dice to d10.',
                },
            ],
            position: { x: -80, y: -460 },
        },
        {
            id: 'warrior_superiority_dice_d12',
            tier: 5,
            type: 'mod-active',
            name: 'D12 Superiority',
            icon: 'd12',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_superiority_dice_d10'],
            levels: [
                {
                    level: 1,
                    description:
                        'Increase the size of your superiority dice to d12.',
                },
            ],
            position: { x: -100, y: -540 },
        },
        {
            id: 'warrior_double_superiority',
            tier: 5,
            type: 'mod-active',
            name: 'Double Superiority',
            icon: 'rolling-dices',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_superiority_dice_d6'],
            levels: [
                {
                    level: 1,
                    description:
                        'You can expend two superiority dice simultaneously, amplifying your abilities for a more powerful effect.',
                },
            ],
            position: { x: 15, y: -500 },
        },
        {
            id: 'warrior_combat_adrenaline',
            tier: 2,
            type: 'passive',
            name: 'Combat Adrenaline',
            icon: 'dice-fire',
            color: 'green',
            connectsTo: ['warrior_combat_preseverance'],
            prerequisites: ['warrior_superiority_dice_reserve'],
            levels: [
                {
                    level: 1,
                    description:
                        'Regain a superiority dice when you defeat, kill or score a critical hit on a creature.',
                },
            ],
            position: { x: -110, y: -260 },
        },
        {
            id: 'warrior_combat_preseverance',
            tier: 3,
            type: 'passive',
            name: 'Perseverance',
            icon: 'dice-shield',
            color: 'green',
            connectsTo: [],
            prerequisites: ['warrior_combat_adrenaline'],
            levels: [
                {
                    level: 1,
                    description:
                        'Once per round, when you are hit by an attack from a hostile creature, you regain 1 superiority die.',
                },
            ],
            position: { x: -160, y: -340 },
        },
        {
            id: 'warrior_improved_empowered_attack',
            tier: 1,
            type: 'mod-active',
            name: 'Improved Empowered Attack',
            icon: 'pointy-sword',
            color: 'cyan',
            connectsTo: ['warrior_perfect_empowered_attack'],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you use **Empowered Attack**, the attack also deals bonus damage equal to the result of the superiority die rolled.',
                },
            ],
            position: { x: -185, y: -210 },
        },
        {
            id: 'warrior_perfect_empowered_attack',
            tier: 4,
            type: 'mod-active',
            name: 'Perfect Empowered Attack',
            icon: 'pointy-sword',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_improved_empowered_attack'],
            levels: [
                {
                    level: 1,
                    description:
                        '**Empowered Attack** deals double the extra damage.',
                },
            ],
            position: { x: -265, y: -300 },
        },
        {
            id: 'warrior_improved_on_guard',
            tier: 1,
            type: 'mod-active',
            name: 'Improved On Guard',
            icon: 'vibrating-shield',
            color: 'cyan',
            connectsTo: ['warrior_fighting_spirit', 'warrior_perfect_guard'],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you use **On Guard** your defense increases against all attacks until the beginning of your next turn.\n\n**On Guard** effect cannot stack with itself, if you decide to use **On Guard** against another attack the previous effect is removed and the new one is applied.',
                },
            ],
            position: { x: -180, y: -110 },
        },
        {
            id: 'warrior_perfect_guard',
            tier: 4,
            type: 'mod-active',
            name: 'Perfect Guard',
            icon: 'vibrating-shield',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_improved_on_guard'],
            levels: [
                {
                    level: 1,
                    description:
                        "When you use **On Guard** you don't take extra damage from critical hits until the beginning of your next turn.",
                },
            ],
            position: { x: -285, y: -210 },
        },
        {
            id: 'warrior_second_wind',
            tier: 1,
            type: 'active',
            name: 'Second Wind',
            icon: 'heart-wings',
            color: 'purple',
            connectsTo: [
                'warrior_bolster',
                'warrior_improved_second_wind',
                'warrior_last_stand',
            ],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'By spending 1 action, you may roll a superiority die to regain hit points equal to the result of the roll plus your Vigor modifier.',
                },
            ],
            position: { x: 165, y: -100 },
        },
        {
            id: 'warrior_bolster',
            tier: 2,
            type: 'mod-active',
            name: 'Bolster',
            icon: 'heart-wings',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_second_wind'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you use **Second Wind**, allies within 9 meters of you who can hear you gain temporary hit points equal to the result of your Second Wind roll. These temporary hit points last until the allies take a rest.',
                },
            ],
            position: { x: 460, y: -220 },
        },
        {
            id: 'warrior_improved_second_wind',
            tier: 3,
            type: 'mod-active',
            name: 'Improved Second Wind',
            icon: 'heart-wings',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_second_wind'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you activate **Second Wind**, you now heal for twice the result.',
                },
            ],
            position: { x: 380, y: -240 },
        },
        {
            id: 'warrior_last_stand',
            tier: 2,
            type: 'passive',
            name: 'Last Stand',
            icon: 'tattered-banner',
            color: 'green',
            connectsTo: ['warrior_relentless'],
            prerequisites: ['warrior_second_wind'],
            levels: [
                {
                    level: 1,
                    description:
                        'Once per long rest, when you drop to 0 hit points or lower and not killed instantly, your hit points do not drop to 0. Instead, you regain hit points equal to 5 times your invested points in the Warrior Class. Additionally, your Defense increases by 5, and you gain a +5 bonus to all skill checks until the end of your next turn.',
                },
            ],
            position: { x: 235, y: -260 },
        },
        {
            id: 'warrior_relentless',
            tier: 3,
            type: 'passive',
            name: 'Relentless Warrior',
            icon: 'mighty-force',
            color: 'green',
            connectsTo: [],
            prerequisites: ['warrior_last_stand'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you start your turn bellow (**10**/25/50)% hit points, you regain 10 hit points.',
                },
                {
                    level: 2,
                    description:
                        'When you start your turn bellow (10/**25**/50)% hit points, you regain 10 hit points.',
                },
                {
                    level: 3,
                    description:
                        'When you start your turn bellow (10/25/**50**)% hit points, you regain 10 hit points.',
                },
            ],
            position: { x: 330, y: -365 },
        },
        {
            id: 'warrior_insight',
            tier: 1,
            type: 'active',
            name: "Warrior's Insight",
            icon: 'angry-eyes',
            color: 'purple',
            connectsTo: [],
            prerequisites: ['warrior_combat_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'As a **detect** action, you can make a DC 15 Perception check against a creature you can see. On a success, you gain insight into whether the creature is stronger, weaker, or equal to you in terms of **Strength**, **Dexterity**, **Vigor**, **Speed**, **Weapon Proficiency**, and **Martial Arts**. If your roll exceeds 25, you discern the precise value of one of these attributes.',
                },
            ],
            position: { x: -100, y: -160 },
        },
        {
            id: 'warrior_action_surge',
            tier: 3,
            type: 'active',
            name: 'Action Surge',
            icon: 'mighty-force',
            color: 'purple',
            connectsTo: [],
            prerequisites: ['warrior_combat_expertise'],
            levels: [
                {
                    level: 1,
                    description:
                        '(**Once**/Twice) per rest, you can regain all of your actions on your turn, allowing you to push beyond your limits and act with unparalleled speed and precision.',
                },
                {
                    level: 2,
                    description:
                        '(Once/**Twice**) per rest, you can regain all of your actions on your turn, allowing you to push beyond your limits and act with unparalleled speed and precision.',
                },
            ],
            position: { x: 200, y: -385 },
        },
        {
            id: 'warrior_fighting_spirit',
            tier: 2,
            type: 'mod-active',
            name: 'Fighting Spirit',
            icon: 'mighty-force',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['warrior_improved_on_guard'],
            levels: [
                {
                    level: 1,
                    description:
                        'When you use a superiority dice you gain (**5**/10/15) temporary hit points that last until you make a rest.',
                },
                {
                    level: 2,
                    description:
                        'When you use a superiority dice you gain (5/**10**/15) temporary hit points that last until you make a rest.',
                },
                {
                    level: 3,
                    description:
                        'When you use a superiority dice you gain (5/10/**15**) temporary hit points that last until you make a rest.',
                },
            ],
            position: { x: -320, y: -145 },
        },
    ],
};

export default talentTreeWarrior;
