const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const destinationSchema = new Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    arrival: {
        type: Date,
        default: function() {
            let date = new Date();
            return date.setFullYear(date.getFullYear() + 1);
        }
    },
})
  
const flightSchema = new Schema({
    airline: {
        type: String,
        enum:['American', 'Southwest', 'United'],
    },
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function() {
            let date = new Date();
            return date.setFullYear(date.getFullYear() + 1);
        }
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);