class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header__inner">
        <h1 class="header__title">
          RestoId
        </h1>
      </div>
      <button id="menu" class="header__menu" aria-label="menu" tabindex="0">☰</button>
    `;
  }
}

customElements.define('app-bar', AppBar);
