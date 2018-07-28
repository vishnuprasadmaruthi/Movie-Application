var moviesJSON = require('../movies.json');

exports.home = function(req, res){
  var movies = moviesJSON.movies; //movies array present in movies.json file accessed by moviesJSON variable

  res.render('home', {
    movies : movies,
    title : "Star Wars Movies"
  });
};

exports.movie_number = function(req, res){
  var episode_number = req.params.episode_number;

  var movies = moviesJSON.movies;

  if(episode_number >=1 && episode_number <=6){

    var movie  = movies[episode_number - 1];

    var title = movie.title;

    var main_characters = movie.main_characters;

    res.render('movie_number',{
      movies :  movies,
      title : title,
      movie : movie,
      main_characters : main_characters
    });
  }else{
    res.render('notFound',{
      movies : movies,
      title : "This is not the page you are looking for"
    });
  }

};

exports.notFound = function(req, res){

  var movies = moviesJSON.movies;

  res.render('notFound', {
    title : "This is not the page you are looking for",
    movies : movies
  })
};
