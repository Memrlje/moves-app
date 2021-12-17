const express = require('express');
const Movie = require('../models/movies');
const router = new express.Router();



router.post('/movies', async (req, res) => {
    const movie = new Movie(req.body);
    try {
        await movie.save();
        res.send(movie);  
    }catch (e){
        res.status(400).send(e)
    }
    
    
})


router.get('/movies', async (req, res) => {
    try {
        var query = req._parsedUrl.query;
        if(query === 'undefined' || query === ''){
            const movies = await Movie.find({});
            res.send(movies);
        }else{
            const movies = await Movie.find(
                {
                    $or:[
                        { title: { $regex: query, $options: 'i' }},
                        { description: { $regex: query, $options: 'i' }}
                    ]
                });
                
            res.send(movies);
        }
    }catch (e) {
        res.status(500).send(e);
    }
        
})

router.patch('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { runValidators: true})
        if(!movie) {
            return res.status(404).send();
        }

        res.send(movie);
    }catch (e) {
        res.status(500).send;
    }
})

module.exports = router;