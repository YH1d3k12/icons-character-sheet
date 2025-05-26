import { useEffect, useState } from 'react';

const icons = import.meta.glob('../../assets/icons/*.svg');
const loadedIcons: Record<string, string> = {};

export const getTalentIcon = async (iconName: string): Promise<string> => {
    const path = `../../assets/icons/${iconName}.svg`;

    // Se já foi carregado antes, retorna direto.
    if (loadedIcons[path]) return loadedIcons[path];

    // Se existe no glob, importa e guarda no cache.
    if (icons[path]) {
        try {
            const mod = (await icons[path]()) as { default: string };
            loadedIcons[path] = mod.default;
            return mod.default;
        } catch (err) {
            console.error(`Erro ao carregar o ícone ${iconName}:`, err);
        }
    }

    return '';
};

interface TalentIconProps {
    iconName: string;
}

export default function TalentIcon({ iconName }: TalentIconProps) {
    const [iconSrc, setIconSrc] = useState<string>('');

    useEffect(() => {
        getTalentIcon(iconName).then(setIconSrc);
    }, [iconName]);

    if (!iconSrc) return null;

    return <img className="talent-node-icon" src={iconSrc} alt={iconName} />;
}
