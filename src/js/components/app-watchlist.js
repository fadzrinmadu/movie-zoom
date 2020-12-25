import './watchlist-item.js';

class AppWatchlist extends HTMLElement {

  set watchlist(watchlist) {
    this._watchlist = watchlist;
    this.render();
  }

  render() {
    this.classList.add('row', 'watchlist', 'mt-5');
    if (this._watchlist == false) {
      this.innerHTML = `
      <div class="col">
        <p>Your watchlist is now empty.</p>
      </div>
      `;
    } else {
      this._watchlist.forEach(item => {
        const watchlistItem = document.createElement('watchlist-item');
        watchlistItem.item = item.movieId;
        this.appendChild(watchlistItem);
      });
    }
  }

}

customElements.define('app-watchlist', AppWatchlist);