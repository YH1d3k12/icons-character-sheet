import { useCharacter } from '../../hooks/useCharacter';
import './styles.css';

export default function BackgroundNote() {
    const [character, setCharacter] = useCharacter();

    return (
        <div className="background-note">
            <label className="background-note-label">
                Background
                <textarea
                    className="background-note-text"
                    value={character.background}
                    onChange={e =>
                        setCharacter({
                            ...character,
                            background: e.target.value,
                        })
                    }
                />
            </label>
        </div>
    );
}
