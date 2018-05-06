import axios from 'axios';
import React from 'react';
import {render} from 'react-dom';

import PlayerTable from './components/players/PlayerTable.jsx';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            initializing: true
        };
    }

    componentDidMount() {
        axios.get('/players')
            .then(response => {
                let players = response.data;

                this.setState({ 
                    initializing: false,
                    pitchers: players.filter(p => p.isPitcher),
                    hitters: players.filter(p => p.isHitter)
                });
            })
            .catch((err) => { alert(err.message); });
    }

    render () {
        if (this.state.initializing) 
            return <div>Loading...</div>
        else
            return <PlayerTable hitters={this.state.hitters} pitchers={this.state.pitchers} />
    }
}

render(<App/>, document.getElementById('app'));