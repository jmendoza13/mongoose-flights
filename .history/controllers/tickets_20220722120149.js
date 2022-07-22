const Flight = require('../models/flight');

module.exports {
    create,
    new: newTicket
}

Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
        flight.tickets.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${ flight._id }`);    });
});