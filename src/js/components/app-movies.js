class AppMovies extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="movies mb-5">
      <div class="row text-center text-md-left">
        <div class="col movie-header d-md-flex justify-content-between align-items-center">
          <h2>Movies in Theaters</h2>
          <a href="#">View all <i class="fas fa-eye"></i> </a>
        </div>
      </div>
      <hr />
      <!-- Movie List -->
      <div class="row movie-list mt-5">
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/1.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Bloodshot</a></h3>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/2.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Sonic the Hedgehog</a></h3>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/3.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Underwater</a></h3>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/4.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)</a></h3>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/5.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Bad Boys for Life</a></h3>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-2 mb-4">
          <div class="movie-image">
            <img src="images/theaters/2.jpg" alt="sample title">
            <div class="watchlist-wrapper d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary shadow-sm">Add to watchlist</button>
            </div>
          </div>
          <h3 class="text-center mt-3"><a href="#">Sonic the Hedgehog</a></h3>
        </div>
      </div>
      <!-- / Movie List -->
    </section>
    `;
  }
}

customElements.define('app-movies', AppMovies);