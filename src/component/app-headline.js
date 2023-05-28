class AppHeadline extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="headline">
        <figure class="headline__figure">
        <img src="https://tse1.mm.bing.net/th?id=OIP.9KfGUARyEirmZHD4aOp9hgHaFR&pid=Api&P=0" alt="Rendang">
        <figcaption>Rendang, typically food from Minang Tribe, West Sumatera, Indonesia</figcaption>
        </figure>
        <div class="headline__content">
        <h1 class="headline__title">Favorite Indonesian Food in The World: Rendang</h1>
        <p class="headline__description">Rendang is a Minang dish originating from the Minangkabau region in West
            Sumatra, Indonesia. It has spread across Indonesian cuisine to the cuisines of neighbouring Southeast Asian
            countries such as Malaysia, Singapore, Brunei and the Philippines. Rendang is often described as a rich dish
            of meat — most commonly beef (rendang daging) — that has been slow cooked and braised in a coconut milk
            seasoned with a herb and spice mixture, until the liquids evaporate and the meat turns dark brown and
            tender, becoming caramelized and infused with rich flavours. <br><br>
            As the signature dish of Minangkabau culture, rendang is traditionally served at ceremonial occasions to honour
            guests during festive events; such as wedding feasts and Lebaran or Hari Raya (Indonesian popular words for both
            Eid al-Fitr and Eid al-Adha). Rendang is also traditionally served among the Malay community in Indonesia,
            Malaysia, Singapore and Brunei, as well as the Maranao in the Philippines.
        </p>
        <button class="headline__button" onclick="window.location.href='https://en.wikipedia.org/wiki/Rendang';"
            target="_blank" rel="noreferrer">More</button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-headline', AppHeadline);
