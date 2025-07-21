import { useDerivedStats } from '../../hook/useCharacter';
import './styles.css';

export default function HeroAttributes() {
    const strength = useDerivedStats('totalStrength');
    const dexterity = useDerivedStats('totalDexterity');
    const vigor = useDerivedStats('totalVigor');
    const senses = useDerivedStats('totalSenses');
    const charisma = useDerivedStats('totalCharisma');
    const mind = useDerivedStats('totalMind');
    const spirit = useDerivedStats('totalSpirit');
    const luck = useDerivedStats('totalLuck');

    return (
        <div className="hero-section-attributes">
            <div className="row">
                <div className="hero-section-attribute">
                    <h3>Strength</h3>
                    <p>
                        {strength.base}
                        <span>({strength.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Dexterity</h3>
                    <p>
                        {dexterity.base}
                        <span>({dexterity.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Vigor</h3>
                    <p>
                        {vigor.base}
                        <span>({vigor.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Senses</h3>
                    <p>
                        {senses.base}
                        <span>({senses.modifier})</span>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="hero-section-attribute">
                    <h3>Charisma</h3>
                    <p>
                        {charisma.base}
                        <span>({charisma.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Mind</h3>
                    <p>
                        {mind.base}
                        <span>({mind.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Spirit</h3>
                    <p>
                        {spirit.base}
                        <span>({spirit.modifier})</span>
                    </p>
                </div>
                <div className="hero-section-attribute">
                    <h3>Luck</h3>
                    <p>
                        {luck.base}
                        <span>({luck.modifier})</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
