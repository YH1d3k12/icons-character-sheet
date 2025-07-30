import { useCharacter, useKeyStat } from '../../hooks/useCharacter';
import './styles.css';

export default function ProfileForm() {
    const [character, setCharacter] = useCharacter();
    const totalStamina = useKeyStat('totalStamina');
    const totalDetermination = useKeyStat('totalDetermination');

    return (
        <form className="profile-form">
            <fieldset>
                <legend>Bio</legend>
                <label>
                    Name:
                    <input
                        className="profile-form-input"
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
                        className="profile-form-input"
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
                            className="profile-form-input"
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
                            className="profile-form-input"
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
                            className="profile-form-input"
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
                            className="profile-form-input"
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
                            className="profile-form-input attribute"
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
                            className="profile-form-input attribute"
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
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.prowess.base}
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Coordination:
                        <input
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.coordination.base}
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Strength:
                        <input
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.strength.base}
                            readOnly
                            disabled
                        />
                    </label>
                </div>
                <div className="form-row">
                    <label>
                        Intellect:
                        <input
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.intellect.base}
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Awareness:
                        <input
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.awareness.base}
                            readOnly
                            disabled
                        />
                    </label>
                    <label>
                        Willpower:
                        <input
                            className="profile-form-input attribute"
                            type="text"
                            value={character.attributes.willpower.base}
                            readOnly
                            disabled
                        />
                    </label>
                </div>
            </fieldset>
        </form>
    );
}
