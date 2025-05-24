import TalentTreeGraph from '../../components/TalentTreeGraph';
import mockedData from '../../data//mockedTalents';

export default function ClassTree() {
    return (
        <div>
            <h1>{mockedData[1].name}</h1>
            <TalentTreeGraph talentTree={mockedData[1]} />
        </div>
    );
}
