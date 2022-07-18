const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All flights', flights });
    });
  }

  function create(req, res) {
      for (let key in req.body) {
          if (req.body[key] === '') delete req.body[key];
      }
      var flight = new flight(req.body);
      flight.save(function(err) {
          // one way to handle errors
          if (err) return res.redirect('/flights/new');
          console.log(flight);
          // for now, redirect right back to new.ejs
          res.redirect('/flights');
      });
  }



function newFlight(req, res) {
    res.render('flights/new');
}

// function create(req, res) {
//     req.body.airline = !!req.body.airline
//     req.body.airport = !req.body.airport.trim();
//     if(req.body.airport) req.body.airport = req.body.airport.split(/\s*,\s*/g, ',');
//     const flight = new Flight(req.body);
//     flight.save(function(err) {
//         if (err) return res.redirect('/flights/new');
//         console.log(flight);
//         res.redirect('/flighs/new');
//     });