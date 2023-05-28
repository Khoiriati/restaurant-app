class RestoDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <h2 class="catalog-detail__title">Restaurant's Detail</h2>
        <div class="catalog-detail__info" id="detail"></div>
        <div id="likeButtonContainer"></div>
        `;
  }
}

customElements.define('resto-detail', RestoDetail);
