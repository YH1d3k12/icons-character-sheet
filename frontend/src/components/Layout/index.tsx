import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import type { Character } from '../../services/character';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
    getCharacterLevel,
    getTotalAttribute,
    getAttributeModifier,
} from '../../utils/getDerivedStats';
import mockedCharacter from '../../data/mockedCharacter';
import './styles.css';

export interface DerivedStatValue {
    base: number;
    modifier: number;
}

type DerivedStatsMap = Record<string, DerivedStatValue>;

export const CharacterContext = React.createContext<
    | [
          Character,
          React.Dispatch<React.SetStateAction<Character>>,
          DerivedStatsMap
      ]
    | null
>(null);

export default function Layout() {
    const [character, setCharacter] = useState<Character>(mockedCharacter);
    const derivedStats = useMemo(
        () => ({
            level: { base: getCharacterLevel(character.xp), modifier: 0 },
            totalStrength: {
                base: getTotalAttribute(character, 'strength'),
                modifier: getAttributeModifier(character, 'strength'),
            },
            totalDexterity: {
                base: getTotalAttribute(character, 'dexterity'),
                modifier: getAttributeModifier(character, 'dexterity'),
            },
            totalVigor: {
                base: getTotalAttribute(character, 'vigor'),
                modifier: getAttributeModifier(character, 'vigor'),
            },
            totalSenses: {
                base: getTotalAttribute(character, 'senses'),
                modifier: getAttributeModifier(character, 'senses'),
            },
            totalCharisma: {
                base: getTotalAttribute(character, 'charisma'),
                modifier: getAttributeModifier(character, 'charisma'),
            },
            totalMind: {
                base: getTotalAttribute(character, 'mind'),
                modifier: getAttributeModifier(character, 'mind'),
            },
            totalSpirit: {
                base: getTotalAttribute(character, 'spirit'),
                modifier: getAttributeModifier(character, 'spirit'),
            },
            totalLuck: {
                base: getTotalAttribute(character, 'luck'),
                modifier: getAttributeModifier(character, 'luck'),
            },
        }),
        [character]
    );

    const downloadCharacter = () => {
        try {
            const json = JSON.stringify(character, null, 2);
            const blob = new Blob([json], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `${character.name || 'character'}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Failed to download character:', error);
            alert('Error: Could not download character.');
        }
    };

    const handleUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = e => {
            try {
                const data = JSON.parse(
                    e.target?.result as string
                ) as Character;
                setCharacter(data);
            } catch {
                alert('Invalid character file.');
            }
        };
        reader.readAsText(file);
    };

    return (
        <CharacterContext.Provider
            value={[character, setCharacter, derivedStats]}
        >
            <div className="layout">
                <img
                    className="layout-background-image"
                    alt="background image"
                />
                <Header />
                <div className="layout-content">
                    <Navbar
                        onDownloadCharacter={downloadCharacter}
                        onUploadCharacter={handleUpload}
                    />
                    <div className="layout-outlet">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </CharacterContext.Provider>
    );
}
