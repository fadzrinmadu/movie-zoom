import MovieModel from '../models/movie-model.js';
import WatchlistModel from '../models/watchlist-model.js';

const main = () => {

  const moviesInTheaters = document.querySelector('movie-list#moviesInTheaters');
  const mostPopularMovies = document.querySelector('movie-list#mostPopularMovies');
  const upComingMovies = document.querySelector('movie-list#upComingMovies');
  
  if ((moviesInTheaters !== null) | (mostPopularMovies !== null) | (upComingMovies !== null)) {
    MovieModel.getMoviesInTheaters()
      .then(data => moviesInTheaters.movies = data);

    MovieModel.getMostPopularMovies()
      .then(data => mostPopularMovies.movies = data);

    MovieModel.getUpcomingMovies()
      .then(data => upComingMovies.movies = data);
    }

}

export default main;