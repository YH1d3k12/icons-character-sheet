import { IoClose } from 'react-icons/io5';
import type { Character } from '../../services/character';
import './styles.css';

interface PowersFieldSectionProps {
    character: Character;
    setCharacter: (character: Character) => void;
}

export default function PowersFieldSection({
    character,
    setCharacter,
}: PowersFieldSectionProps) {
    const addPower = () => {
        const newPower = { name: '', level: 1, description: '' };
        setCharacter({
            ...character,
            powers: [...character.powers, newPower],
        });
    };

    const updatePowerField = (
        index: number,
        field: string,
        value: string | number
    ) => {
        const updatedPowers = character.powers.map((power, i) =>
            i === index ? { ...power, [field]: value } : power
        );
        setCharacter({
            ...character,
            powers: updatedPowers,
        });
    };

    const removePower = (index: number) => {
        const updatedPowers = character.powers.filter((_, i) => i !== index);
        setCharacter({
            ...character,
            powers: updatedPowers,
        });
    };

    return (
        <fieldset>
            <legend>Powers</legend>
            {character.powers.length === 0 && <p>No powers added yet.</p>}

            {character.powers.map((power, idx) => (
                <div key={idx} className="form-group">
                    <div className="form-row">
                        <label>
                            Name:
                            <input
                                className="form-input"
                                type="text"
                                value={power.name}
                                onChange={e =>
                                    updatePowerField(
                                        idx,
                                        'name',
                                        e.target.value
                                    )
                                }
                            />
                        </label>
                        <label>
                            Level:
                            <input
                                className="form-input"
                                type="number"
                                min="1"
                                max="10"
                                value={power.level}
                                onChange={e =>
                                    updatePowerField(
                                        idx,
                                        'level',
                                        parseInt(e.target.value, 10) || 1
                                    )
                                }
                            />
                        </label>
                        <button
                            className="rmv-power-button"
                            type="button"
                            aria-label={`Remove power ${power.name || idx + 1}`}
                            onClick={() => removePower(idx)}
                            title="Remove power"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>
                    <label style={{ display: 'block', lineHeight: '24px' }}>
                        Description
                        <textarea
                            className="form-text"
                            value={power.description || ''}
                            onChange={e =>
                                updatePowerField(
                                    idx,
                                    'description',
                                    e.target.value
                                )
                            }
                        />
                    </label>
                </div>
            ))}
            <button
                className="add-power-button"
                type="button"
                onClick={addPower}
            >
                Add Power
            </button>
        </fieldset>
    );
}
