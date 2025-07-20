import { useState } from 'react';
import AnimatedProgressBar from '../AnimatedProgressBar';
import character from '../../assets/character.jpg';
import './styles.css';

export default function HeroSection() {
    const [hp, setHp] = useState(172);
    const [mp, setMp] = useState(230);
    const [armor, setArmor] = useState(28);
    const [barrier, setBarrier] = useState(15);
    const maxHp = 238;
    const maxMp = 393;

    return (
        <section className="hero-section">
            <div className="hero-section-portrait">
                <img src={character} alt="character image" />
                <div className="hero-section-info">
                    <h1>Deodatus O'Khorno</h1>
                    <p>
                        <span>Lvl 57</span> <span>Minotaur</span>{' '}
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
            <div className="hero-section-attributes">
                <div className="row">
                    <div className="hero-section-attribute">
                        <h3>Strength</h3>
                        <p>
                            48<span>(+3)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Dexterity</h3>
                        <p>
                            22<span>(-1)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Vigor</h3>
                        <p>
                            40<span>(+3)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Senses</h3>
                        <p>
                            38<span>(+2)</span>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="hero-section-attribute">
                        <h3>Charisma</h3>
                        <p>
                            33<span>(+2)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Mind</h3>
                        <p>
                            25<span>(0)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Spirit</h3>
                        <p>
                            56<span>(+6)</span>
                        </p>
                    </div>
                    <div className="hero-section-attribute">
                        <h3>Luck</h3>
                        <p>
                            30<span>(+1)</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero-section-resistances">{}</div>
        </section>
    );
}
