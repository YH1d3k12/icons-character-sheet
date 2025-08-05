import { useCharacter, useKeyStat } from '../../hooks/useCharacter';
import PowersFieldSection from '../PowerFieldSection';
import './styles.css';

export default function ProfileForm() {
    const [character, setCharacter] = useCharacter();
    const totalStamina = useKeyStat('totalStamina');
    const totalDetermination = useKeyStat('totalDetermination');

    return (
        <form className="form profile-form">
            <fieldset>
                <legend>Bio</legend>
                <label>
                    Name:
                    <input
                        className="form-input"
                        type="text"
                        value={character.name}
                        onChange={e =>
                            setCharacter({ ...character, name: e.target.value })
                        }
                    />
                </label>
                <label>
                    Origin:
                    <input
                        className="form-input"
                        type="text"
                        value={character.origin}
                        onChange={e =>
                            setCharacter({
                                ...character,
                                origin: e.target.value,
                            })
                        }
                    />
                </label>
                <div className="form-row">
                    <label>
                        Sex:
                        <input
                            className="form-input"
                            type="text"
                            value={character.sex}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    sex: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Age:
                        <input
                            className="form-input"
                            type="number"
                            value={character.age}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    age: parseInt(e.target.value, 10),
                                })
                            }
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Height:
                        <input
                            className="form-input"
                            type="text"
                            value={character.height}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    height: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label>
                        Weight:
                        <input
                            className="form-input"
                            type="text"
                            value={character.weight}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    weight: e.target.value,
                                })
                            }
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Resources</legend>
                <div className="form-row">
                    <label>
                        Stamina:
                        <input
                            className="form-input attribute"
                            type="number"
                            value={character.stamina.current}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    stamina: {
                                        ...character.stamina,
                                        current: parseInt(e.target.value, 10),
                                    },
                                })
                            }
                        />
                        /{totalStamina}
                    </label>
                    <label>
                        Determination:
                        <input
                            className="form-input attribute"
                            type="number"
                            value={character.determination.current}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    determination: {
                                        ...character.determination,
                                        current: parseInt(e.target.value, 10),
                                    },
                                })
                            }
                        />
                        /{totalDetermination}
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Attributes</legend>
                <div className="form-row">
                    <label>
                        Prowess:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.prowess.base +
                                character.attributes.prowess.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Coordination:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.coordination.base +
                                character.attributes.coordination.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Strength:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.strength.base +
                                character.attributes.strength.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Intellect:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.intellect.base +
                                character.attributes.intellect.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Awareness:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.awareness.base +
                                character.attributes.awareness.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Willpower:
                        <input
                            className="form-input attribute"
                            type="text"
                            value={
                                character.attributes.willpower.base +
                                character.attributes.willpower.flat
                            }
                            readOnly
                            disabled
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Specialities</legend>
                <label>
                    <textarea
                        className="form-text"
                        value={character.specialities}
                        onChange={e =>
                            setCharacter({
                                ...character,
                                specialities: e.target.value,
                            })
                        }
                    />
                </label>
            </fieldset>
            <PowersFieldSection
                character={character}
                setCharacter={setCharacter}
            />
        </form>
    );
}
