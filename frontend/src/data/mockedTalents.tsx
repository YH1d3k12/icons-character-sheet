import type { TalentTree } from '../services/talent';

const talentTrees: TalentTree[] = [
    {
        id: 1,
        name: 'General Talents',
        tag: 'universal',
        talents: [
            {
                id: 'tough_skin',
                tier: 1,
                type: 'passive',
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
                tier: 2,
                type: 'passive',
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
                tier: 1,
                type: 'passive',
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
                tier: 2,
                type: 'passive',
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
        name: 'Fighter',
        tag: 'class',
        talents: [
            {
                id: 'martial_superiority',
                tier: 0,
                type: 'active',
                name: 'Superioridade Marcial',
                icon: 'swords-power',
                color: 'yellow',
                connectsTo: [
                    'superiority_dice_reserve',
                    'empowered_attack',
                    'combat_specialization',
                ],
                prerequisites: [],
                levels: [
                    {
                        level: 1,
                        description:
                            'Você possui **2 dados de superioridade marcial (d6)**, que representam sua técnica e controle em combate. Você pode gastar esses dados para reforçar suas ações durante a batalha, escolhendo uma das opções abaixo:\n\n* **Ataque Empoderado**: Ao realizar um ataque, você pode gastar 1 dado de Superioridade Marcial. Role o dado e adicione o resultado na jogada de acerto.\n\n* **Em Guarda**: Quando for alvo de um ataque, você pode gastar 1 dado de Superioridade Marcial para reforçar sua defesa. Role o dado e adicione o resultado à sua Defesa contra o ataque.\n\n* Todos os dados de Superioridade Marcial são recuperados após um descanso.',
                    },
                ],
                position: { x: 0, y: 0 },
            },
            {
                id: 'superiority_dice_reserve',
                tier: 1,
                type: 'passive',
                name: 'Reserva de Dados',
                icon: 'cubes',
                color: 'green',
                connectsTo: ['combat_adrenaline', 'combat_preseverance'],
                prerequisites: ['martial_superiority'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Aumenta a quantidade de dados de Superioridade Marcial em 1',
                    },
                    {
                        level: 2,
                        description: 'A quantidade aumenta em 2',
                    },
                    {
                        level: 3,
                        description: 'A quantidade aumenta em 3',
                    },
                    {
                        level: 4,
                        description: 'A quantidade aumenta em 4',
                    },
                ],
                position: { x: -200, y: -100 },
            },
            {
                id: 'combat_adrenaline',
                tier: 2,
                type: 'passive',
                name: 'Adrenalina de Combate',
                icon: 'dice-fire',
                color: 'green',
                connectsTo: [],
                prerequisites: ['superiority_dice_reserve'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Você recupera 1 dado de Superioridade Marcial ao abater/derrotar uma criatura hostil ou causar acerto crítico.',
                    },
                ],
                position: { x: -200, y: -200 },
            },
            /*
            ### Perseverança
Você recupera 1 dado de Superioridade Marcial ao receber um acerto crítico.
             */
            {
                id: 'combat_preseverance',
                tier: 2,
                type: 'passive',
                name: 'Perseverança',
                icon: 'dice-shield',
                color: 'green',
                connectsTo: [],
                prerequisites: ['superiority_dice_reserve'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Você recupera 1 dado de Superioridade Marcial ao receber um acerto crítico.',
                    },
                ],
                position: { x: -100, y: -200 },
            },
            {
                id: 'empowered_attack',
                tier: 1,
                type: 'mod-active',
                name: 'Ataque Empoderado+',
                icon: 'pointy-sword',
                color: 'cyan',
                connectsTo: ['empowered_attack++'],
                prerequisites: ['martial_superiority'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Ao usar **Ataque Empoderado** adicione o resultado a rolagem de dano em caso de acerto.',
                    },
                ],
                position: { x: -400, y: -100 },
            },
            {
                id: 'empowered_attack++',
                tier: 3,
                type: 'mod-active',
                name: 'Ataque Empoderado++',
                icon: 'pointy-sword',
                color: 'cyan',
                connectsTo: [],
                prerequisites: ['empowered_attack'],
                levels: [
                    {
                        level: 1,
                        description:
                            'O dano causado ao usar **Ataque Empoderado** é dobrado.',
                    },
                ],
                position: { x: -400, y: -300 },
            },
            {
                id: 'combat_specialization',
                tier: 1,
                type: 'active',
                name: 'Especialização de Combate',
                icon: 'round-star',
                color: 'green',
                connectsTo: ['combat_mastery'],
                prerequisites: ['martial_superiority'],
                levels: [
                    {
                        level: 1,
                        description:
                            'Escolha um tipo de arma (Lâminas, Machados, Arcos ou até mesmo Desarmado), seus ataques causam acerto crítico em rolagens de 19 ~ 20 com o tipo escolhido.\n\nAlternativamente você pode escolher defensivo como especialização.\n* **Defensivo**: Uma vez por turno, você pode usar a reação de bloqueio sem consumir sua reação desde que já não tenha gastado a reação em outra ação.',
                    },
                ],
                position: { x: 200, y: -100 },
            },
            {
                id: 'combat_mastery',
                tier: 3,
                type: 'active',
                name: 'Maestria de Combate',
                icon: 'stars-stack',
                color: 'green',
                connectsTo: [],
                prerequisites: ['combat_specialization'],
                levels: [
                    {
                        level: 1,
                        description:
                            'O tipo escolhido em **Especialização de Combate** é aprimorado.\n\n**Tipo de Arma**: Ataques causam acerto crítico em rolagens de 18 ~ 20.\n\n**Defensivo**: Você não recebe o dano adicional de acertos críticos.',
                    },
                ],
                position: { x: 200, y: -300 },
            },
        ],
    },
];

export default talentTrees;
