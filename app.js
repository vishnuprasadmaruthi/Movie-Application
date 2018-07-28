var express = require('express');
var app = express();
var routes = require('./routes');
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
//implies that all static files/assets like images are under public directory

app.set('view engine', 'ejs');
// ejs is used to add template for html

//routes
app.get('/', routes.home);

app.get('/star_wars_episode/:episode_number', routes.movie_number);

app.get('*', routes.notFound);
//* means any route other than specified here


app.listen(3000, function(){
  console.log("The application is running on localhost:3000");
});
