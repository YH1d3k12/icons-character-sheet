import { useCharacter } from '../../hooks/useCharacter';
import './styles.css';

export default function StickyNote() {
    const [character, setCharacter] = useCharacter();

    return (
        <div className="quality-note">
            <label className="quality-note-label">
                Qualities
                <textarea
                    className="quality-note-text"
                    value={character.qualities}
                    onChange={e =>
                        setCharacter({
                            ...character,
                            qualities: e.target.value,
                        })
                    }
                />
            </label>
        </div>
    );
}
