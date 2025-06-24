import type { TalentTree } from '../services/talent';

const talentTreeWarrior: TalentTree = {
    id: 2,
    name: 'Warrior',
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
                        "Você possui **4 dados de superioridade marcial (d6's)** que podem ser usados para reforçar suas ações em batalha. Inicialmente você pode:\n\n**Ataque Empoderado**: Ao realizar um ataque, você pode usar 1 dado de Superioridade Marcial. Role o dado e adicione o resultado na jogada de acerto.\n\n**Em Guarda**: Quando for alvo de um ataque, você pode usar 1 dado de Superioridade Marcial para reforçar sua defesa. Role o dado e adicione o resultado à sua defesa contra o ataque.\n\nTodos os dados de Superioridade Marcial são recuperados após um descanso.",
                },
            ],
            position: { x: 0, y: 0 },
        },
        {
            id: 'superiority_dice_reserve',
            tier: 1,
            type: 'mod-active',
            name: 'Reserva de Dados',
            icon: 'cubes',
            color: 'cyan',
            connectsTo: [
                'superiority_dice_d8',
                'combat_adrenaline',
                'combat_preseverance',
            ],
            prerequisites: ['martial_superiority'],
            levels: [
                {
                    level: 1,
                    description:
                        'Aumenta a quantidade de dados de Superioridade Marcial em (**2**/4/6/8)',
                },
                {
                    level: 2,
                    description:
                        'Aumenta a quantidade de dados de Superioridade Marcial em (2/**4**/6/8)',
                },
                {
                    level: 3,
                    description:
                        'Aumenta a quantidade de dados de Superioridade Marcial em (2/4/**6**/8)',
                },
                {
                    level: 4,
                    description:
                        'Aumenta a quantidade de dados de Superioridade Marcial em (2/4/6/**8**)',
                },
            ],
            position: { x: -200, y: -100 },
        },
        {
            id: 'superiority_dice_d8',
            tier: 2,
            type: 'mod-active',
            name: 'Superioridade D8',
            icon: 'd8',
            color: 'cyan',
            connectsTo: ['superiority_dice_d10'],
            prerequisites: ['superiority_dice_reserve'],
            levels: [
                {
                    level: 1,
                    description:
                        "Aumenta o tamanho dos dados de Superioridade Marcial para **d8's**.",
                },
            ],
            position: { x: -300, y: -200 },
        },
        {
            id: 'superiority_dice_d10',
            tier: 2,
            type: 'mod-active',
            name: 'Superioridade D10',
            icon: 'd10',
            color: 'cyan',
            connectsTo: ['superiority_dice_d12'],
            prerequisites: ['superiority_dice_d8'],
            levels: [
                {
                    level: 1,
                    description:
                        "Aumenta o tamanho dos dados de Superioridade Marcial para **d10's**.",
                },
            ],
            position: { x: -300, y: -300 },
        },
        {
            id: 'superiority_dice_d12',
            tier: 2,
            type: 'mod-active',
            name: 'Superioridade D12',
            icon: 'd12',
            color: 'cyan',
            connectsTo: [],
            prerequisites: ['superiority_dice_d10'],
            levels: [
                {
                    level: 1,
                    description:
                        "Aumenta o tamanho dos dados de Superioridade Marcial para **d12's**.",
                },
            ],
            position: { x: -300, y: -400 },
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
                        'Você **recupera 1 dado** de Superioridade Marcial ao abater/derrotar uma criatura hostil ou ao realizar um acerto crítico.',
                },
            ],
            position: { x: -200, y: -200 },
        },
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
                        'Você **recupera 1 dado** de Superioridade Marcial ao sofrer um acerto crítico.',
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
                        'Ao usar **Ataque Empoderado** adicione o **dobro** do resultado a rolagem de dano em caso de acerto.',
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
                        'Escolha um tipo de arma (Lâminas, Machados, Arcos ou até mesmo Desarmado), seus ataques causam acerto crítico em rolagens de 19 ~ 20 com o tipo escolhido.\n\nAlternativamente você pode escolher defensivo como especialização.\n\n**Defensivo**: Uma vez por turno, você pode usar a reação de bloqueio sem consumir sua reação desde que já não tenha gastado a reação em outra ação.',
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
};

export default talentTreeWarrior;
