import { useState } from 'react';
import TalentTreeGraph from '../../components/TalentTreeGraph';
import mockedData from '../../data//mockedTalents';
import mockedCharacter from '../../data/mockedCharacter';

export default function ClassTree() {
    const talentTree = mockedData[1];

    const [character, setCharacter] = useState(mockedCharacter);

    return (
        <div>
            <h1>{mockedData[1].name}</h1>
            <TalentTreeGraph
                talentTree={talentTree}
                character={character}
                setCharacter={setCharacter}
            />
        </div>
    );
}
