import MovieModel from '../models/movie-model.js';

const movieSingleView = () => {

  const { search: queryString } = window.location;

  const movieDetails = document.querySelector('movie-details');
  const similarMovies = document.querySelector('movie-list#similarMovies');
  const movieId = checkParams(queryString);

  if (movieDetails !== null | similarMovies !== null | movieId) {
    MovieModel.getMovieById(movieId)
      .then(data => movieDetails.movie = data);

    MovieModel.getSimilarMovies(movieId)
      .then(data => similarMovies.movies = data);
  }


  function checkParams(queryString = '') {
    let params = [];
    queryString
      .toLowerCase()
      .trim()
      .slice(1)
      .split("&")
      .forEach(str => {
        params = [...params, str.split("=")];
      });
    const entries = new Map(params);
    const obj = Object.fromEntries(entries);
    return obj.id;
  }

}

export default movieSingleView;