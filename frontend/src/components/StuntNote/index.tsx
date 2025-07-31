import { useCharacter } from '../../hooks/useCharacter';
import './styles.css';

export default function StuntNote() {
    const [character, setCharacter] = useCharacter();

    return (
        <div className="stunt-note">
            <label className="stunt-note-label">
                Stunts
                <textarea
                    className="stunt-note-text"
                    value={character.stunts}
                    onChange={e =>
                        setCharacter({
                            ...character,
                            stunts: e.target.value,
                        })
                    }
                />
            </label>
        </div>
    );
}
