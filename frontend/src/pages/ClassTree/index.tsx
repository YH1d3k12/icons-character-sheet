import TalentTreeGraph from '../../components/TalentTreeGraph';
import { useCharacter } from '../../hooks/useCharacter';
import mockedData from '../../data//mockedBarbarian';

export default function ClassTree() {
    const [character, setCharacter] = useCharacter();

    return (
        <div>
            <h1>{mockedData.summary.name}</h1>
            <TalentTreeGraph
                talentTree={mockedData}
                character={character}
                setCharacter={setCharacter}
            />
        </div>
    );
}
