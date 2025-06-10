import './styles.css';

interface ProgressBarProps {
    current: number;
    max: number;
    type: 'hp' | 'mp' | 'armor' | 'barrier';
}

const gradientColors = {
    hp: {
        full: 'gradient-hp',
        background: 'background-hp',
        glow: 'glow-hp',
    },
    mp: {
        full: 'gradient-mp',
        background: 'background-mp',
        glow: 'glow-mp',
    },
    armor: {
        full: 'gradient-armor',
        background: 'background-armor',
        glow: 'glow-armor',
    },
    barrier: {
        full: 'gradient-barrier',
        background: 'background-barrier',
        glow: 'glow-barrier',
    },
};

function AnimatedProgressBar({ current, max, type }: ProgressBarProps) {
    const percentage = Math.min((current / max) * 100, 100);

    return (
        <div className="progress-bar-container">
            <div className="progress-bar-wrapper">
                <div
                    className={`progress-bar-background ${gradientColors[type].background} ${gradientColors[type].glow}`}
                >
                    <div className="animated-background">
                        <div
                            className={`animated-pulse ${gradientColors[type].full}`}
                        />
                        <div
                            className={`animated-flow ${gradientColors[type].full}`}
                        />
                    </div>
                    <div
                        className={`progress-bar-fill ${gradientColors[type].full}`}
                        style={{ width: `${percentage}%` }}
                    >
                        <div className="flow-highlight" />
                    </div>
                    <div className="inner-glow" />
                </div>
                <div className="percentage-indicator">
                    {Math.round(percentage)}%
                </div>
            </div>
        </div>
    );
}

export default AnimatedProgressBar;
