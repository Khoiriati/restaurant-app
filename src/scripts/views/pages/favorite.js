import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="catalog">
            <h2 class="catalog__title">Your Favorited Restaurant</h2>
            <div id="restaurants" class="catalog__list">

            </div>
          </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
