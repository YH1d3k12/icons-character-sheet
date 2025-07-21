import { useState } from 'react';
import { useCharacter, useDerivedStats } from '../../hook/useCharacter';
import AnimatedProgressBar from '../AnimatedProgressBar';
import characterIMG from '../../assets/character.jpg';
import HeroAttributes from '../HeroAttributes';
import './styles.css';

export default function HeroSection() {
    const [character, setCharacter, derivedStats] = useCharacter();
    const [hp, setHp] = useState(172);
    const [mp, setMp] = useState(230);
    const [armor, setArmor] = useState(28);
    const [barrier, setBarrier] = useState(15);
    const maxHp = 238;
    const maxMp = 393;

    return (
        <section className="hero-section">
            <div className="hero-section-portrait">
                <img src={characterIMG} alt="character image" />
                <div className="hero-section-info">
                    <h1>{character?.name}</h1>
                    <p>
                        <span>Lvl {}</span> <span>Minotaur</span>{' '}
                        <span>Cleric of Helm</span>
                    </p>
                </div>
                <div className="hero-section-bars">
                    <div className="hero-section-bars-values">
                        <h4>
                            HP <span>{hp}</span>
                        </h4>
                        <h4>
                            MP <span>{mp}</span>
                        </h4>
                        <h4>
                            Armor <span>{armor}</span>
                        </h4>
                        <h4>
                            M. Armor <span>{barrier}</span>
                        </h4>
                    </div>
                    <AnimatedProgressBar current={hp} max={maxHp} type="hp" />
                    <AnimatedProgressBar current={mp} max={maxMp} type="mp" />
                </div>
            </div>
            <div className="hero-section-buttons">
                <button id="reduce" onClick={() => {}}>
                    Reduce
                </button>
                <button id="recover" onClick={() => {}}>
                    Recover
                </button>
                <button id="reset" onClick={() => {}}>
                    Reset
                </button>
            </div>
            <div className="hero-section-essential-attributes">
                <div>
                    <h4>
                        Speed <span>9m</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Defense <span>18</span>
                    </h4>
                </div>
                <div>
                    <h4>
                        Actions <span>5</span>
                    </h4>
                </div>
            </div>
            <HeroAttributes />
            <div className="hero-section-resistances">{}</div>
        </section>
    );
}
