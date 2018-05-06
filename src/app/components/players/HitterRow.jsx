import React from 'react';

class HitterRow extends React.Component {
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
                    <th>AVG</th>
                    <th>RBI</th>
                    <th>HR</th>
                    <th>SB</th>
                    <th>Runs</th>
                    <th>OBP</th>
                    <th>SLG%</th>
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
                <td>{this.state.player.avg}</td>
                <td>{this.state.player.rbi}</td>
                <td>{this.state.player.hr}</td>
                <td>{this.state.player.sb}</td>
                <td>{this.state.player.r}</td>
                <td>{this.state.player.obp}</td>
                <td>{this.state.player.slg}</td>
            </tr>
        )
    }
}

export default HitterRow;
