const express = require('express');
require('./db/mongoose');
const Movie = require('./models/movies');
const Show = require('./models/shows');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.post('/movies', (req, res) => {
    const movie = new Movie(req.body);

    movie.save().then(() => {
        res.send(movie);
    }).catch((e) => {
        res.send(e);
    })
})
app.post('/shows', (req, res) => {
    const show = new Show(req.body);

    show.save().then(() => {
        res.send(show);
    }).catch((e) => {
        res.send(e);
    })
})



app.listen(port, () => {
    console.log('Server running!')
});