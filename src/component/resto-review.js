class RestoReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <h2 class="catalog-detail">Reviews</h2>
      <div id="review"></div>
    `;
  }
}

customElements.define('resto-review', RestoReview);
