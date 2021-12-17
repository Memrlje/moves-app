const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const movieApi = require('./api/movie');
const showApi = require('./api/show');

const app = express();
app.use(cors())
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(movieApi);
app.use(showApi);



app.listen(port, () => {
    console.log('Server running!')
});