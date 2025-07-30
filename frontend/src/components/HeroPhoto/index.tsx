import { useCharacter } from '../../hooks/useCharacter';
import './styles.css';

export default function HeroPhoto() {
    const [character, setCharacter] = useCharacter();

    const changePortrait = () => {
        const newPortrait = prompt('Enter new portrait URL:');
        if (newPortrait) {
            setCharacter({ ...character, portrait: newPortrait });
        }
    };

    return (
        <div className="hero-photo" onClick={changePortrait}>
            <img src={character.portrait} alt={`${character.name} image`} />
            <h1>{character.name}</h1>
        </div>
    );
}
