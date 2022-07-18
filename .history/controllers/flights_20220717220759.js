const { Schema } = require("mongoose");

module.exports = {
    new: newFlight,
    create
};

function create(req, res) {
    
}

function newFlight(req, res) {
    res.render('flights/new');
}

