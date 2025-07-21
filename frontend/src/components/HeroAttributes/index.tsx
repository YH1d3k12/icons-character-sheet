import { useKeyStat } from '../../hooks/useCharacter';
import './styles.css';

export default function HeroAttributes() {
    const strength = useKeyStat('totalStrength');
    const dexterity = useKeyStat('totalDexterity');
    const vigor = useKeyStat('totalVigor');
    const senses = useKeyStat('totalSenses');
    const charisma = useKeyStat('totalCharisma');
    const mind = useKeyStat('totalMind');
    const spirit = useKeyStat('totalSpirit');
    const luck = useKeyStat('totalLuck');

    return (
        <div className="hero-section-attributes">
            <div className="row">
                <div className="hero-section-attribute">
                    <h3>Strength</h3>
                    <p>
                        {strength.base}
                        <span>
                            (
                            {strength.modifier > 0
                                ? '+' + strength.modifier
                                : strength.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Dexterity</h3>
                    <p>
                        {dexterity.base}
                        <span>
                            (
                            {dexterity.modifier > 0
                                ? '+' + dexterity.modifier
                                : dexterity.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Vigor</h3>
                    <p>
                        {vigor.base}
                        <span>
                            (
                            {vigor.modifier > 0
                                ? '+' + vigor.modifier
                                : vigor.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Senses</h3>
                    <p>
                        {senses.base}
                        <span>
                            (
                            {senses.modifier > 0
                                ? '+' + senses.modifier
                                : senses.modifier}
                            )
                        </span>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="hero-section-attribute">
                    <h3>Charisma</h3>
                    <p>
                        {charisma.base}
                        <span>
                            (
                            {charisma.modifier > 0
                                ? '+' + charisma.modifier
                                : charisma.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Mind</h3>
                    <p>
                        {mind.base}
                        <span>
                            (
                            {mind.modifier > 0
                                ? '+' + mind.modifier
                                : mind.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Spirit</h3>
                    <p>
                        {spirit.base}
                        <span>
                            (
                            {spirit.modifier > 0
                                ? '+' + spirit.modifier
                                : spirit.modifier}
                            )
                        </span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Luck</h3>
                    <p>
                        {luck.base}
                        <span>
                            (
                            {luck.modifier > 0
                                ? '+' + luck.modifier
                                : luck.modifier}
                            )
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
