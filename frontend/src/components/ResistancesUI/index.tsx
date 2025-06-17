import './styles.css';

const getResistanceInfo = (name: string) => {
    return (
        <div className="resistance-info">
            <h4>{name}</h4>
            <div className="resistance-info-values">
                <span>0</span>
                <span>50%</span>
            </div>
        </div>
    );
};

export default function ResistancesUI() {
    return (
        <div className="resistances-ui">
            <h2>Resistances</h2>
            <div className="resistances-ui-list">
                <div className="resistance-ui-category">
                    <h3>Physical</h3>
                    {getResistanceInfo('slashing')}
                    {getResistanceInfo('piercing')}
                    {getResistanceInfo('bludgeoning')}
                </div>
                <div className="resistance-ui-category">
                    <h3>Elemental</h3>
                    {getResistanceInfo('corrosive')}
                    {getResistanceInfo('cold')}
                    {getResistanceInfo('eletric')}
                    {getResistanceInfo('fire')}
                    {getResistanceInfo('thunder')}
                </div>
                <div className="resistance-ui-category">
                    <h3>Mythic</h3>
                    {getResistanceInfo('thauma')}
                </div>
                <div className="resistance-ui-category">
                    <h3>Mental</h3>
                    {getResistanceInfo('psychic')}
                </div>
                <div className="resistance-ui-category">
                    <h3>Other</h3>
                    {getResistanceInfo('poison')}
                </div>
                <div className="resistance-ui-category">
                    <h3>Spiritual</h3>
                    {getResistanceInfo('aetheric')}
                    {getResistanceInfo('light')}
                    {getResistanceInfo('dark')}
                </div>
            </div>
        </div>
    );
}
