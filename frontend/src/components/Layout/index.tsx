import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import type { Character } from '../../services/character';
import useDerivedStats from '../../hooks/useDerivedStats';
import Header from '../Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import mockedCharacter from '../../data/mockedCharacter';
import desk from '../../assets/desk.jpg';
import './styles.css';

type DerivedStatsMap = Record<string, number>;

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
    const derivedStats = useDerivedStats(character);

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
                    src={desk}
                />
                <div className="layout-veil"></div>
                <Header
                    onUploadCharacter={handleUpload}
                    onDownload={downloadCharacter}
                />
                <main className="main section-padding">
                    <Navbar />
                    <div className="folder">
                        <div className="folder-inner">
                            <Outlet />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </CharacterContext.Provider>
    );
}
