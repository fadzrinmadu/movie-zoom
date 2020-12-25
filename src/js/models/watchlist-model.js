import MovieModel from './movie-model.js';

class WatchlistModel {

  static getWatchlist() {
    let watchlist;
    if (localStorage.getItem('watchlist') === null) {
      watchlist = [];
    } else {
      watchlist = JSON.parse(localStorage.getItem('watchlist'));
    }
    return watchlist;
  }

  static getWatchlistById(movieId) {
    let watchlist;
    if (localStorage.getItem('watchlist') === null) {
      watchlist = [];
    } else {
      watchlist = JSON.parse(localStorage.getItem('watchlist'))
        .find(movie => movie.movieId == movieId);
    }
    return watchlist;
  }

  static addWatchlist(movieId) {
    if (WatchlistModel.getWatchlistById(movieId) == []) {
      alert('Movie has been added to the watchlist.');
    } else {
      let watchlist = WatchlistModel.getWatchlist();
      watchlist.push({ movieId, watch: false })
      localStorage.setItem('watchlist', JSON.stringify(watchlist));
    }
  }

  static removeWatchlist(movieId) {
    let watchlist = WatchlistModel.getWatchlist();
    let updateWatchlist = watchlist.filter(movie => movie.movieId != movieId);
    localStorage.setItem('watchlist', JSON.stringify(updateWatchlist));
  }

}

export default WatchlistModel;