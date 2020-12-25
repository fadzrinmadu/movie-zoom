class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-light bg-white fixed-top shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="/">MoviesZoom</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link d-inline-flex align-items-center" href="watchlist.html">
              <i class="far fa-bookmark mr-2"></i>
              Watchlist
            </a>
            <a class="nav-item nav-link d-inline-flex align-items-center" href="#">
              <i class="far fa-user mr-2"></i>
              Guest
            </a>
          </div>
        </div>
      </div>
    </nav>
    `;
  }
}

customElements.define('app-bar', AppBar);