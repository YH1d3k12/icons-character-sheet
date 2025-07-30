import { useCharacter } from '../../hooks/useCharacter';
import './styles.css';

export default function FlawNote() {
    const [character, setCharacter] = useCharacter();

    return (
        <div className="flaw-note">
            <label className="flaw-note-label">
                Flaws
                <textarea
                    className="flaw-note-text"
                    value={character.flaws}
                    onChange={e =>
                        setCharacter({
                            ...character,
                            flaws: e.target.value,
                        })
                    }
                />
            </label>
        </div>
    );
}
