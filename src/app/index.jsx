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
                this.setState({ 
                    initializing: false,
                    players: response.data
                });
            })
            .catch((err) => { console.log(err); });
    }

    render () {
        if (this.state.initializing) 
            return <div>Loading...</div>
        else
            return <PlayerTable players={this.state.players} />
    }
}

render(<App/>, document.getElementById('app'));