import { useState } from 'react';
import TalentTreeGraph from '../../components/TalentTreeGraph';
import mockedData from '../../data//mockedBarbarian';
import mockedCharacter from '../../data/mockedCharacter';

export default function ClassTree() {
    const [character, setCharacter] = useState(mockedCharacter);

    return (
        <div>
            <h1>{mockedData.name}</h1>
            <TalentTreeGraph
                talentTree={mockedData}
                character={character}
                setCharacter={setCharacter}
            />
        </div>
    );
}
