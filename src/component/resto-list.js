class RestoList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="catalog__title">Explore Restaurant</h2>
      <div class="catalog__list" id="list"></div>
    `;
  }
}

customElements.define('resto-list', RestoList);
