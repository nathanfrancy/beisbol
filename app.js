let express = require('express'),
    path = require('path');
let app = express();

let services = require('./services');

app.use('/', express.static(path.resolve(__dirname, 'src/public')));

app.get('/players', (req, res, next) => {
    services.players.get()
        .then((players) => res.json(players))
        .catch((err) => res.status(500).json(err));
});

app.listen(3000);