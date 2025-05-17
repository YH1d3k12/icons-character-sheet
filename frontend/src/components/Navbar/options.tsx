import type { JSX } from 'react';
import { FaRegHandPointer } from 'react-icons/fa';

interface MenuOption {
    title: string;
    icon: JSX.Element;
    path: string;
}

export const options: MenuOption[] = [
    {
        title: 'Character',
        icon: <FaRegHandPointer />,
        path: '/',
    },
    {
        title: 'Inventory',
        icon: <FaRegHandPointer />,
        path: '/inventory',
    },
    {
        title: 'Abilities',
        icon: <FaRegHandPointer />,
        path: '/abilities',
    },
    {
        title: 'Perks',
        icon: <FaRegHandPointer />,
        path: '/perks',
    },
];
