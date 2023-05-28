class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Home</a></li>
          <li class="nav__item"><a href="#/favorite">Favorite</a></li>
          <li class="nav__item"><a href="https://www.instagram.com/skhoiriati1102?r=nametag" target="_blank"
              rel="noreferrer">About Us</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('app-nav', AppNav);
