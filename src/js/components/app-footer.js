class AppFooter extends HTMLElement {
  
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="mt-8">
      <div class="container">
        <a class="footer-brand mb-4" href="#">MoviesZoom</a>
        <div class="row justify-content-between">
          <div class="col-lg-4 mb-3">
            <p>Suspendisse eu facilisis est. Duis ac diam nec mi condimentum imperdiet. Nam tempus dolor nec lectus auctor, sed tristique magna.</p>
            <div class="mb-2">
              <i class="fas fa-phone-alt mr-3"></i>
              Phone: +231-1111-111
            </div>
            <div class="">
              <i class="far fa-envelope mr-3"></i>
              example@movieszoom.com
            </div>
          </div>
          <div class="col-lg-2">
            <ul class="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="col-lg-2">
            <ul class="social-media d-flex list-unstyled">
              <li><a href="#" aria-label="facebook"><i class="fab fa-facebook-f"></i></a></li>
              <li class="ml-4"><a href="#" aria-label="twitter"><i class="fab fa-twitter"></i></a></li>
              <li class="ml-4"><a href="#" aria-label="blogger"><i class="fab fa-blogger-b"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="copyright text-center mt-5">@Copyright 2020 Movies Zoom. All Rights Reserved</div>
      </div>
    </footer>
    `;
  }

}

customElements.define('app-footer', AppFooter);