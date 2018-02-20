import React from 'react';

class PitcherRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: props.player
        };
    }

    static getHeaderRow() {
        return (
            <thead>
                <tr>
                    <th colSpan="2"></th>
                    <th>ERA</th>
                    <th>W</th>
                    <th>SV</th>
                    <th>K</th>
                    <th>WHIP</th>
                </tr>
            </thead>
        );
    }

    render() {
        return (
            <tr key={this.state.player.rank}>
                <td>{this.state.player.rank}</td>
                <td>{this.state.player.firstName} {this.state.player.lastName}</td>
                <td>{this.state.player.era}</td>
                <td>{this.state.player.w}</td>
                <td>{this.state.player.sv}</td>
                <td>{this.state.player.k}</td>
                <td>{this.state.player.whip}</td>
            </tr>
        )
    }
}

export default PitcherRow;
