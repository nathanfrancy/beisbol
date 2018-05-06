import React from 'react';

import HitterRow from './HitterRow.jsx';
import PitcherRow from './PitcherRow.jsx';

const containerStyle = {
    height: '100%',
    width: '100%'
};

const tableStyle = {
    float: 'left',
    width: '50%',
    padding: '24px',
    height: '100%',
    overflow: 'auto'
};

class PlayerTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pitchers: props.pitchers,
            hitters: props.hitters
        };
    }

    render() {
        const hittersEl = this.state.hitters.map(hitter =>
            <HitterRow key={hitter.rank} player={hitter} />
        );
        const pitchersEl = this.state.pitchers.map(pitcher => 
            <PitcherRow key={pitcher.rank} player={pitcher} />
        );

        return (
            <div style={containerStyle}>
                <table style={tableStyle}>
                    {HitterRow.getHeaderRow()}
                    <tbody>
                        {hittersEl}
                    </tbody>
                </table>
                <table style={tableStyle}>
                    {PitcherRow.getHeaderRow()}
                    <tbody>
                        {pitchersEl}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlayerTable;