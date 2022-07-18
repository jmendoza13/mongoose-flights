const { Schema } = require("mongoose");

module.exports = {
    new: newFlight
};

function newFlight(req, res) {
    res.render('flights/new');
}

