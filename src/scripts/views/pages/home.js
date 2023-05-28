import RestoSource from '../../data/resto-source';
import { createRestoItemTemplate } from '../templates/template-creator';

import '../../../component/resto-list';

const Home = {
  async render() {
    return `
      <resto-list></resto-list>
    `;
  },

  async afterRender() {
    const restaurants = await RestoSource.getResto();
    const restaurantsContainer = document.querySelector('#list');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
