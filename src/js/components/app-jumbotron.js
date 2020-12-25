class AppJumbotron extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron jumbotron-fluid position-relative">
      <div class="container">
        <div class="intro d-flex align-items-center d-lg-block">
          <div class="row">
            <div class="col">
              <h1>Discover Your Favorite Movies</h1>
              <p>veniam laboris fugiat eu adipisicing cupidatat ullamco laborum commodo nostrud non duis excepteur aliquip nulla aliquip exercitation fugiat qui quis aliqua do elit mollit</p>
              <button class="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

}

customElements.define('app-jumbotron', AppJumbotron);