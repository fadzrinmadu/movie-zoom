import WatchlistModel from '../models/watchlist-model.js';

const watchlistView = () => {

  const appWatchlist = document.querySelector('app-watchlist');

  if (appWatchlist !== null) {
    appWatchlist.watchlist = WatchlistModel.getWatchlist();
  }
  
}

export default watchlistView;