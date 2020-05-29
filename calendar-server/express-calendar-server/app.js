var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var calendarList;

var dbConnected = false;

//--------------------------------
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/data';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {

  console.log('MongoDB connection success!');
  dbConnected = true;
  
  /*
  // practice
  var kittySchema = new mongoose.Schema({
    name: String,
    age: Number
  });

  kittySchema.methods.speak = function() {
    var greeting = this.name
      ? this.name + ' says meow!'
      : 'A cat meows.';
    console.log(greeting);
  }

  kittySchema.methods.ageCheck = function() {
    var ageNumber = this.age
      ? 'This kitty is ' + this.age + ' years old.'
      : 'No one knows how old this cat is.';
    console.log(ageNumber);
  }

  function saveTheCat(kitte) {
    kitte.save(function (err, kitte) {
      if (err) return console.error(err);
      Kitten.findOne({ name: kitte.name }, function (err, cat) 
      { err 
        ? console.log('error: '+ err)
        : console.log(cat.speak(), cat.ageCheck())
      })
    });
      
  }

  var Kitten = mongoose.model('Kitten', kittySchema);

  var tuppers = new Kitten({ name: 'Tuppers', age: 2 });
  var kant = new Kitten({ name: 'Kant' });
  var fluffy = new Kitten({ name: 'Fluffy', age: 5 });

  saveTheCat(tuppers);
  saveTheCat(kant);
  saveTheCat(fluffy);
  */
});
//--------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/calendars', (req, res) => {
  if (!dbConnected) {
    res.statusCode(503)
    return;
  }
  loadCalendars(calendar => res.send(calendar));
})

function loadCalendars(callback) {
  db.db.collection('calendars', function(err, collection) { 
    collection.find({}).toArray(function(err, calendars){
      callback(calendars);
    });
  });
}


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
