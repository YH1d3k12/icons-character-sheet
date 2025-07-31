import { useCharacter, useKeyStat } from '../../hooks/useCharacter';
import type { AttributeKey } from '../../services/attribute';
import './styles.css';

export default function AdvancedStatsForm() {
    const [character, setCharacter] = useCharacter();
    const totalStamina = useKeyStat('totalStamina');
    const totalDetermination = useKeyStat('totalDetermination');

    return (
        <form className="form advanced-stats-form">
            <fieldset>
                <legend>Advanced Config - Attributes</legend>
                <div className="advanced-config-table">
                    <div className="advanced-config-row advanced-config-header">
                        <div>Name</div>
                        <div>Base</div>
                        <div>Bonuses</div>
                        <div>Total</div>
                    </div>
                    {(Object.keys(character.attributes) as AttributeKey[]).map(
                        attrKey => {
                            const attr = character.attributes[attrKey];
                            const total = attr.base + attr.flat;

                            return (
                                <div
                                    key={attrKey}
                                    className="advanced-config-row"
                                >
                                    <div className="attr-name">{attrKey}</div>
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={attr.base}
                                        onChange={e =>
                                            setCharacter({
                                                ...character,
                                                attributes: {
                                                    ...character.attributes,
                                                    [attrKey]: {
                                                        ...attr,
                                                        base:
                                                            parseInt(
                                                                e.target.value,
                                                                10
                                                            ) || 0,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={attr.flat}
                                        onChange={e =>
                                            setCharacter({
                                                ...character,
                                                attributes: {
                                                    ...character.attributes,
                                                    [attrKey]: {
                                                        ...attr,
                                                        flat:
                                                            parseInt(
                                                                e.target.value,
                                                                10
                                                            ) || 0,
                                                    },
                                                },
                                            })
                                        }
                                    />
                                    <input
                                        type="number"
                                        className="form-input"
                                        value={total}
                                        readOnly
                                        disabled
                                    />
                                </div>
                            );
                        }
                    )}
                </div>
            </fieldset>
            <fieldset>
                <legend>Advanced Config - Resources</legend>

                <div className="advanced-config-table">
                    <div className="advanced-config-row advanced-config-header">
                        <div>Name</div>
                        <div>Base</div>
                        <div>Bonuses</div>
                        <div>Total</div>
                    </div>
                    <div className="advanced-config-row">
                        <div className="attr-name">Stamina</div>
                        <input
                            type="number"
                            className="form-input"
                            value={character.stamina.base}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    stamina: {
                                        ...character.stamina,
                                        base: parseInt(e.target.value, 10) || 0,
                                    },
                                })
                            }
                        />
                        <input
                            type="number"
                            className="form-input"
                            value={character.stamina.flat}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    stamina: {
                                        ...character.stamina,
                                        flat: parseInt(e.target.value, 10) || 0,
                                    },
                                })
                            }
                        />
                        <input
                            type="number"
                            className="form-input"
                            value={totalStamina}
                            readOnly
                            disabled
                        />
                    </div>
                    <div className="advanced-config-row">
                        <div className="attr-name">Determination</div>
                        <input
                            type="number"
                            className="form-input"
                            value={character.determination.base}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    determination: {
                                        ...character.determination,
                                        base: parseInt(e.target.value, 10) || 0,
                                    },
                                })
                            }
                        />
                        <input
                            type="number"
                            className="form-input"
                            value={character.determination.flat}
                            onChange={e =>
                                setCharacter({
                                    ...character,
                                    determination: {
                                        ...character.determination,
                                        flat: parseInt(e.target.value, 10) || 0,
                                    },
                                })
                            }
                        />
                        <input
                            type="number"
                            className="form-input"
                            value={totalDetermination}
                            readOnly
                            disabled
                        />
                    </div>
                </div>
            </fieldset>
        </form>
    );
}
