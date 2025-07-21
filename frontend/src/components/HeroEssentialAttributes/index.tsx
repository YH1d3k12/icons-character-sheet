import { useDerivedStats } from '../../hook/useCharacter';
import './styles.css';

export default function HeroEssentialAttributes() {
    const totalSpeed = useDerivedStats('totalSpeed');
    const totalDefense = useDerivedStats('totalDefense');
    const totalActions = useDerivedStats('totalActions');

    return (
        <div className="hero-section-essential-attributes">
            <div>
                <h4>
                    Speed <span>{totalSpeed.base}m</span>
                </h4>
            </div>
            <div>
                <h4>
                    Defense <span>{totalDefense.base}</span>
                </h4>
            </div>
            <div>
                <h4>
                    Actions <span>{totalActions.base}</span>
                </h4>
            </div>
        </div>
    );
}
