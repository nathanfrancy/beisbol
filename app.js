let express = require('express'),
    path = require('path');
let app = express();

let services = require('./services');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/', express.static(path.resolve(__dirname, 'src/public')));

app.get('/players', (req, res, next) => {
    services.players.get()
        .then((players) => res.json(players))
        .catch((err) => res.status(500).json(err));
});

app.post('/api/pick', (req, res, next) => {
    res.json(req.body);
});

app.listen(7272);