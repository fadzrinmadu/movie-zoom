import MovieModel from '../models/movie-model.js';

class MovieDetails extends HTMLElement {
  
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="movie-details mb-6">
        <div class="row text-center">
          <div class="col">
            <h1>Movies ${this._movie.status}</h1>
          </div>
        </div>
        <div class="row mt-6">
          <div class="col-lg-5 mb-4">
            <div class="movie-image">
              <img src="https://image.tmdb.org/t/p/w500${this._movie.poster_path}?api_key=f163b1b69481388df2e5cfeab9cd4297" alt="${this._movie.original_title}">
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="list-unstyled">
              <li class="mb-4">
                <h2>${this._movie.original_title}</h2>
              </li>
              <li>
                <h3>Release Date</h3>
                <p>${this._movie.release_date}</p>
              </li>
              <li>
                <h3>Status</h3>
                <p>${this._movie.status}</p>
              </li>
              <li>
                <h3>Production By</h3>
                <p>${this._movie.production_companies.map(com => com.name).join(', ')}</p>
              </li>
              <li>
                <h3>Genre</h3>
                <p>${this._movie.genres.map(genre => genre.name).join(', ')}</p>
              </li>
              <li>
                <h3>Description</h3>
                <p>${this._movie.overview}</p>
              </li>
              <li>
                <h3>Rating</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    `;
  }

}

customElements.define('movie-details', MovieDetails);