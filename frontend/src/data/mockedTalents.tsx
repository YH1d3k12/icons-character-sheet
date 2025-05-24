import type { TalentTree } from '../services/talent';

const talentTrees: TalentTree[] = [
    {
        id: 1,
        name: 'General Talents',
        tag: 'universal',
        talents: [
            {
                id: 'tough_skin',
                name: 'Tough Skin',
                icon: 'caduceus',
                connectsTo: ['iron_skin'],
                prerequisites: [],
                levels: [
                    {
                        level: 1,
                        description: 'Gain +10 HP',
                        statIncreases: [
                            { stat: 'hp', amount: 10, type: 'flat' },
                        ],
                    },
                ],
                position: { x: 0, y: 0 },
            },
            {
                id: 'iron_skin',
                name: 'Iron Skin',
                icon: 'caduceus',
                connectsTo: [],
                prerequisites: ['tough_skin'],
                levels: [
                    {
                        level: 1,
                        description: 'Gain +5 Armor',
                        statIncreases: [
                            { stat: 'armor', amount: 5, type: 'flat' },
                        ],
                    },
                ],
                position: { x: 0, y: 100 },
            },
            {
                id: 'athlete',
                name: 'Athlete',
                icon: 'caduceus',
                connectsTo: ['agile'],
                prerequisites: [],
                levels: [
                    {
                        level: 1,
                        description: '+5% Movement Speed',
                        statIncreases: [
                            {
                                stat: 'movementSpeed',
                                amount: 5,
                                type: 'percent',
                            },
                        ],
                    },
                ],
                position: { x: 100, y: 100 },
            },
            {
                id: 'agile',
                name: 'Agile',
                icon: 'caduceus',
                connectsTo: [],
                prerequisites: ['athlete'],
                levels: [
                    {
                        level: 1,
                        description: '+10% Evasion',
                        statIncreases: [
                            { stat: 'evasion', amount: 10, type: 'percent' },
                        ],
                    },
                ],
                position: { x: 100, y: 200 },
            },
        ],
    },
    {
        id: 2,
        name: 'Wizard',
        tag: 'class',
        talents: [
            {
                id: 'mana_efficiency',
                name: 'Mana Efficiency',
                icon: 'dice-fire',
                connectsTo: ['arcane_focus', 'overload'],
                prerequisites: [],
                levels: [
                    {
                        level: 1,
                        description: 'Reduce mana cost by 5%',
                        statIncreases: [
                            {
                                stat: 'manaCostReduction',
                                amount: 5,
                                type: 'percent',
                            },
                        ],
                    },
                    {
                        level: 2,
                        description: 'Reduce mana cost by 10%',
                        statIncreases: [
                            {
                                stat: 'manaCostReduction',
                                amount: 10,
                                type: 'percent',
                            },
                        ],
                    },
                    {
                        level: 3,
                        description: 'Reduce mana cost by 15%',
                        statIncreases: [
                            {
                                stat: 'manaCostReduction',
                                amount: 15,
                                type: 'percent',
                            },
                        ],
                    },
                ],
                position: { x: 0, y: 0 },
            },
            {
                id: 'arcane_focus',
                name: 'Arcane Focus',
                icon: 'rolling-dices',
                connectsTo: [],
                prerequisites: ['mana_efficiency'],
                levels: [
                    {
                        level: 1,
                        description: '+10% Magic Damage',
                        statIncreases: [
                            {
                                stat: 'magicDamage',
                                amount: 10,
                                type: 'percent',
                            },
                        ],
                    },
                    {
                        level: 2,
                        description: '+20% Magic Damage',
                        statIncreases: [
                            {
                                stat: 'magicDamage',
                                amount: 20,
                                type: 'percent',
                            },
                        ],
                    },
                    {
                        level: 3,
                        description: '+30% Magic Damage',
                        statIncreases: [
                            {
                                stat: 'magicDamage',
                                amount: 30,
                                type: 'percent',
                            },
                        ],
                    },
                ],
                position: { x: 0, y: -100 },
            },
            {
                id: 'overload',
                name: 'Overload',
                icon: 'caduceus',
                connectsTo: [],
                prerequisites: ['mana_efficiency'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Your next spell deals double damage (once per combat)',
                    },
                ],
                position: { x: 150, y: -100 },
            },
        ],
    },
];

export default talentTrees;
