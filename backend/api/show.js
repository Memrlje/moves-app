const express = require('express');
const Show = require('../models/shows');
const router = new express.Router();

router.post('/shows', async(req, res) => {
    const show = new Show(req.body);

    try {
        await show.save();
        res.send(show);
      }catch {
          res.status(400).send(e)
      }
})

router.get('/shows', async (req, res) => {
    try {
        var query = req._parsedUrl.query;
        if(query === 'undefined' || query === ''){
            const shows = await Show.find({});
            shows.sort((a, b) => {
                averageRatingA = a.ratings.reduce((a,b) => a + b, 0) / a.ratings.length;
                averageRatingB = b.ratings.reduce((a,b) => a + b, 0) / b.ratings.length;
                return averageRatingB - averageRatingA
            });
            res.send(shows);
        }else{
            const shows = await Show.find(
                {
                    $or:[
                        { title: { $regex: query, $options: 'i' }},
                        { description: { $regex: query, $options: 'i' }}
                    ]
                });
                
            res.send(shows);
        }
    }catch (e) {
        res.status(500).send(e);
    }

})

router.patch('/shows/:id', async (req, res) => {
    try {
        const show = await Show.findByIdAndUpdate(req.params.id, req.body, { runValidators: true})
        if(!show) {
            return res.status(404).send();
        }

        res.send(show);
    }catch (e) {
        res.status(500).send;
    }
})


module.exports = router;