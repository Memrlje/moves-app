const mongoose = require('mongoose');

const Show = mongoose.model('Show', {
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

module.exports = Show