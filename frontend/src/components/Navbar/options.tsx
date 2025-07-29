import type { JSX } from 'react';
import { IoPersonCircle, IoBriefcase } from 'react-icons/io5';

interface MenuOption {
    title: string;
    icon: JSX.Element;
    path: string;
}

export const options: MenuOption[] = [
    {
        title: 'Character',
        icon: <IoPersonCircle size={24} />,
        path: '/',
    },
    {
        title: 'Inventory',
        icon: <IoBriefcase size={24} />,
        path: '/inventory',
    },
];
