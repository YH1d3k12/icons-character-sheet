import type { Character } from '../services/character';

const mockedCharacter: Character = {
    name: "Silver Warden 'Elena Cruz'",
    portrait:
        'https://www.shutterstock.com/image-vector/blank-avatar-photo-icon-design-600nw-1682415103.jpg',
    origin: 'Halcyon City, 2145',
    sex: 'Female',
    age: 32,
    height: '5\'9"',
    weight: '150 lbs',
    background: `Once a decorated military engineer, Elena Cruz became the Silver Warden after losing her family in a targeted attack by a rogue AI she helped design. Wracked with guilt, she now protects the city of Halcyon under a powered exosuit of her own making.`,
    stamina: {
        base: 10,
        current: 10,
        flat: 0,
    },
    determination: {
        base: 6,
        current: 6,
        flat: 0,
    },
    attributes: {
        prowess: { base: 4, flat: 0 },
        coordination: { base: 5, flat: 0 },
        strength: { base: 4, flat: 0 },
        intellect: { base: 6, flat: 0 },
        awareness: { base: 5, flat: 0 },
        willpower: { base: 6, flat: 0 },
    },
    powers: [
        {
            name: 'Powered Armor',
            level: 6,
            description:
                'Grants enhanced strength, durability, sensors, and life support in hostile environments.',
        },
        {
            name: 'Force Field Generator',
            level: 5,
            description:
                'Creates a protective barrier that absorbs damage before it reaches her.',
        },
        {
            name: 'Targeting Suite',
            level: 4,
            description:
                'Improves ranged attacks and tracking through advanced sensors and calculations.',
        },
    ],
    specialities: 'Engineering, Combat Tactics, Hacking, Robotics',
    qualities:
        'Protective of innocents, Code of honor: never escalate violence, Reputation as a ghost of justice in Halcyon’s underworld',
    flaws: 'Haunted by past failures, Trust issues with AI and automated systems',
    stunts: 'Overclocked Shield Matrix: Once per session, boost Force Field by +2 for one round to absorb a major hit.',
    items: [
        {
            name: 'Multi-Tool',
            quantity: 1,
            description: 'A versatile tool for repairs and modifications.',
            weight: 1.5,
        },
        {
            name: 'Combat Knife',
            quantity: 1,
            description: 'A reliable blade for close encounters.',
            weight: 0.5,
        },
        {
            name: 'Emergency Rations',
            quantity: 3,
            description: 'Nutrient-dense food packs for survival situations.',
            weight: 0.2,
        },
    ],
    smallItems:
        'First Aid Kit, Flashlight, Multi-Tool, Combat Knife, Emergency Rations',
};

export default mockedCharacter;
