import type { JSX } from 'react';
import { IoPersonCircle, IoBriefcase } from 'react-icons/io5';

interface RouterOption {
    title: string;
    icon: JSX.Element;
    path: string;
}

export const options: RouterOption[] = [
    {
        title: 'Profile',
        icon: <IoPersonCircle size={24} />,
        path: '/',
    },
    {
        title: 'Inventory',
        icon: <IoBriefcase size={24} />,
        path: '/inventory',
    },
];
