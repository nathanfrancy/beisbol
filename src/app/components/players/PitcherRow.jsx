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
                    <th></th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>ERA</th>
                    <th>W</th>
                    <th>SV</th>
                    <th>K</th>
                    <th>WHIP</th>
                    <th>HLD</th>
                    <th>QS</th>
                </tr>
            </thead>
        );
    }

    render() {
        return (
            <tr key={this.state.player.rank}>
                <td>{this.state.player.rank}</td>
                <td>{this.state.player.team}</td>
                <td>{this.state.player.firstName} {this.state.player.lastName}</td>
                <td>{this.state.player.era}</td>
                <td>{this.state.player.w}</td>
                <td>{this.state.player.sv}</td>
                <td>{this.state.player.k}</td>
                <td>{this.state.player.whip}</td>
                <td>{this.state.player.hld}</td>
                <td>{this.state.player.qs}</td>
            </tr>
        )
    }
}

export default PitcherRow;
