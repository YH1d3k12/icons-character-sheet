import { useCharacter } from '../../hooks/useCharacter';
import { IoClose } from 'react-icons/io5';
import './styles.css';

export default function InventoryForm() {
    const [character, setCharacter] = useCharacter();

    const addItem = () => {
        const newItem = { name: '', quantity: 1, description: '', weight: 0 };
        setCharacter({
            ...character,
            items: [...character.items, newItem],
        });
    };

    const updateItemField = (
        index: number,
        field: string,
        value: string | number
    ) => {
        const updatedItems = character.items.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setCharacter({
            ...character,
            items: updatedItems,
        });
    };

    const removeItem = (index: number) => {
        const updatedItems = character.items.filter((_, i) => i !== index);
        setCharacter({
            ...character,
            items: updatedItems,
        });
    };

    return (
        <form className="form inventory-form">
            <fieldset>
                <legend>Items</legend>
                {character.items.length === 0 && <p>No items added yet.</p>}

                {character.items.map((item, idx) => (
                    <div key={idx} className="form-group">
                        <div className="form-row">
                            <label>
                                Name:
                                <input
                                    className="form-input"
                                    type="text"
                                    value={item.name}
                                    onChange={e =>
                                        updateItemField(
                                            idx,
                                            'name',
                                            e.target.value
                                        )
                                    }
                                />
                            </label>
                            <label>
                                Quantity:
                                <input
                                    className="form-input"
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={item.quantity}
                                    onChange={e =>
                                        updateItemField(
                                            idx,
                                            'quantity',
                                            parseInt(e.target.value, 10) || 0
                                        )
                                    }
                                />
                            </label>
                            <button
                                className="rmv-item-button"
                                type="button"
                                aria-label={`Remove item ${
                                    item.name || idx + 1
                                }`}
                                onClick={() => removeItem(idx)}
                                title="Remove item"
                            >
                                <IoClose size={24} />
                            </button>
                        </div>
                        <label style={{ display: 'block', lineHeight: '24px' }}>
                            Description
                            <textarea
                                className="form-text"
                                value={item.description || ''}
                                onChange={e =>
                                    updateItemField(
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
                    className="add-item-button"
                    type="button"
                    onClick={addItem}
                >
                    Add Item
                </button>
            </fieldset>
            <fieldset>
                <legend>Small Items</legend>
                <label>
                    <textarea
                        className="form-text"
                        value={character.smallItems || ''}
                        onChange={e =>
                            setCharacter({
                                ...character,
                                smallItems: e.target.value,
                            })
                        }
                    />
                </label>
            </fieldset>
        </form>
    );
}
