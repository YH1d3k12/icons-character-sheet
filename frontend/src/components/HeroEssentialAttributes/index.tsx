import { useKeyStat } from '../../hooks/useCharacter';
import './styles.css';

export default function HeroEssentialAttributes() {
    const totalSpeed = useKeyStat('totalSpeed');
    const totalDefense = useKeyStat('totalDefense');
    const totalActions = useKeyStat('totalActions');

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
