const mongoose = require('mongoose');

const Movie = mongoose.model('Movie', {
    title: {
        type: String,
        required: true,
        trim: true

    },
    description: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        trim: true
    },
    stars: {
        type: Array,
    },
    ratings: {
        type: Array,
        required: true,
    }
})

module.exports = Movie