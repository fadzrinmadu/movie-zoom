class MovieItem extends HTMLElement {

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.classList.add('col-sm-12', 'col-md-4', 'col-lg-2', 'mb-4');
    this.innerHTML = `
      <div class="movie-image">
        <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}?api_key=f163b1b69481388df2e5cfeab9cd4297" alt="${this._movie.original_title}">
        <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
          <button class="btn btn-secondary shadow-sm btn-add-watchlist" data-id="${this._movie.id}">Add to watchlist</button>
        </div>
      </div>
      <h3 class="text-center mt-3"><a href="movie-single.html?id=${this._movie.id}">${this._movie.original_title}</a></h3>
    `;
  }
  
}

customElements.define('movie-item', MovieItem);