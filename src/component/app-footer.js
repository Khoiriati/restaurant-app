class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        Copyright © 2023 - RestoId by Siti Khoiriati
      `;
  }
}

customElements.define('app-footer', AppFooter);
