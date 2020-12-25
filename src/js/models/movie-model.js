class MovieModel {

  static getMoviesInTheaters(page = 1) {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=f163b1b69481388df2e5cfeab9cd4297&page=${page}`)
      .then(response => response.json()) 
      .then(data => Promise.resolve(data));
  }

  static getMostPopularMovies(page = 1) {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f163b1b69481388df2e5cfeab9cd4297&page=${page}`)
      .then(response => response.json())
      .then(data => Promise.resolve(data));
  }

  static getUpcomingMovies(page = 1) {
    return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=f163b1b69481388df2e5cfeab9cd4297&page=${page}`)
      .then(response => response.json())
      .then(data => Promise.resolve(data));
  }

  static getSimilarMovies(id = null) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=f163b1b69481388df2e5cfeab9cd4297`)
      .then(response => response.json())
      .then(data => Promise.resolve(data));
  }
  
  static getMovieById(id = null) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f163b1b69481388df2e5cfeab9cd4297`)
      .then(response => response.json())
      .then(data => Promise.resolve(data));
  }
}

export default MovieModel;