import { useContext } from 'react';
import { CharacterContext } from '../components/Layout';

export function useCharacter() {
    const context = useContext(CharacterContext);
    if (!context)
        throw new Error(
            'useCharacter must be used within CharacterContext.Provider'
        );
    return context;
}

export function useDerivedStats(key: string) {
    const [, , derivedStats] = useCharacter();

    let result = derivedStats.find(stat => stat.name === key)?.value || 0;

    return result;
}
