const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes/games.route');

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/', route);

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});