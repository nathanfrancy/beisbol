import React from 'react';

import HitterRow from './HitterRow.jsx';
import PitcherRow from './PitcherRow.jsx';

class PlayerTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            players: props.players,
            filterOptions: {
                isHitters: true,
                isPitchers: true
            }
        };
        this.onChangeHittersCheckbox = this.onChangeHittersCheckbox.bind(this);
        this.onChangePitchersCheckbox = this.onChangePitchersCheckbox.bind(this);
    }

    onChangeHittersCheckbox(event) {
        this.setState({
            filterOptions: {
                isHitters: !this.state.filterOptions.isHitters
            }
        });
    }

    onChangePitchersCheckbox(event) {
        this.setState({
            filterOptions: {
                isPitchers: !this.state.filterOptions.isPitchers
            }
        });
    }

    render() {
        const players = this.state.players.map((player) => {
            if (player.isPitcher && this.state.filterOptions.isPitchers) 
                return <PitcherRow key={player.rank} player={player}/>
            else if (player.isHitter && this.state.filterOptions.isHitters) 
                return <HitterRow key={player.rank} player={player} />
        });

        return (
            <div>
                <label>
                    <input type="checkbox" checked={this.state.filterOptions.isHitters} onChange={this.onChangeHittersCheckbox}/>
                    Hitters
                </label>
                <label>
                    <input type="checkbox" checked={this.state.filterOptions.isPitchers} onChange={this.onChangePitchersCheckbox}/>
                    Pitchers
                </label>
                <table>
                    {this.state.filterOptions.isHitters &&
                        HitterRow.getHeaderRow()
                    }
                    {this.state.filterOptions.isPitchers &&
                        PitcherRow.getHeaderRow()
                    }
                    <tbody>
                        {players}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PlayerTable;