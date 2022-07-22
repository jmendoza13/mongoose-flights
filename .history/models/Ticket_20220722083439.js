const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const ticketsSchema = new Schema ( {

})

module.exports = mongoose.model('Flight', ticketSchema);