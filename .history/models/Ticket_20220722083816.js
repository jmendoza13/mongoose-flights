const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketSchema = new Schema ( {
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,  
    },
    flight: {
        type: ObjectId,

    }
})

module.exports = mongoose.model('Flight', ticketSchema);