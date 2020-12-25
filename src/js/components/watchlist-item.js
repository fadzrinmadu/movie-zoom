import MovieModel from '../models/movie-model.js';

class WatchlistItem extends HTMLElement {

  set item(movieId) {
    MovieModel.getMovieById(movieId)
      .then(data => {
        this._movie = data;
        this.render();
      })
  }

  render() {
    this.classList.add('col-xl-6', 'mb-4');
    this.innerHTML = `
    <div class="media flex-column flex-lg-row">
      <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}?api_key=f163b1b69481388df2e5cfeab9cd4297" class="mr-3 mb-3" alt="${this._movie.original_title}">
      <div class="media-body">
        <h5 class="mt-0"><a href="movie-single.html?id=${this._movie.id}">${this._movie.original_title}</a></h5>
        <div class="mb-2">
          <span class="mr-2">${this._movie.release_date}  |  ${this._movie.genres.map(genre => genre.name).join(', ')}</span>
          <span><i class="fas fa-star"></i> ${this._movie.vote_average} Rate</span>
        </div>
        <p>${this._movie.overview.substr(0, 186) + "&hellip;"}</p>
        <button class="btn btn-outline-danger btn-remove-watchlist mr-2" data-id="${this._movie.id}">Remove watchlist</button>
      </div>
    </div>
    `;
  }
  
}

customElements.define('watchlist-item', WatchlistItem);