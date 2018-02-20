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
                    <th colSpan="2"></th>
                    <th>AVG</th>
                    <th>RBI</th>
                    <th>HR</th>
                    <th>SB</th>
                    <th>Runs</th>
                </tr>
            </thead>
        );
    }

    render() {
        return (
            <tr key={this.state.player.rank}>
                <td>{this.state.player.rank}</td>
                <td>{this.state.player.firstName} {this.state.player.lastName}</td>
                <td>{this.state.player.avg}</td>
                <td>{this.state.player.rbi}</td>
                <td>{this.state.player.hr}</td>
                <td>{this.state.player.sb}</td>
                <td>{this.state.player.r}</td>
            </tr>
        )
    }
}

export default HitterRow;