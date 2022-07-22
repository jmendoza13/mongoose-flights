const Flight = require('../models/flight');

module.exports = {
    index,
    show,
    new: newFlight,
    create
};

function index(req, res) {
    Flight.find({}, function(err, flights) {
      res.render('flights/index', { title: 'All flights', flights });
    });
  }

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/show', {flight});
  });
}

  function create(req, res) {
    console.log(req.body)
      for (let key in req.body) {
          if (req.body[key] === '') delete req.body[key];
      }
      var flight = new Flight(req.body);
      flight.save(function(err) {
          // one way to handle errors
          if (err) return res.redirect('/flights/new');
          console.log(flight);
          // for now, redirect right back to new.ejs
          res.redirect('/flights');
      });
  }



function newFlight(req, res) {
  const newFlight = new Flight();
// Obtain the default date
const dt = newFlight.departs;
// Format the date for the value attribute of the input
let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}
