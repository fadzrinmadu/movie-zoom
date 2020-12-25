import './sass/custom.scss';
import 'jquery';
import 'popper.js';
import 'bootstrap';

import './js/components/app-navbar.js'; 
import './js/components/app-jumbotron.js';
import './js/components/movie-list.js';
import './js/components/app-footer.js'; 
import './js/components/movie-details.js'; 
import './js/components/app-watchlist.js'; 

import main from './js/views/main.js';
import movieSingleView from './js/views/movie-single-view.js';
import watchlistView from './js/views/watchlist-view.js';

import WatchlistModel from './js/models/watchlist-model.js';

document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', movieSingleView);
document.addEventListener('DOMContentLoaded', watchlistView);

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-add-watchlist')) {
    const btnAddWatchlist = e.target;
    WatchlistModel.addWatchlist(btnAddWatchlist.dataset.id);
  }
  if (e.target.classList.contains('btn-remove-watchlist')) {
    const btnRemoveWatchlist = e.target;
    WatchlistModel.removeWatchlist(btnRemoveWatchlist.dataset.id);
    const movie = btnRemoveWatchlist.parentElement.parentElement.parentElement;
    movie.remove();
  }
});
