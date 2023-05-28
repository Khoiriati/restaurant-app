import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/resto-source';
import { createRestoDetailTemplate, createRestoReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

import '../../../component/resto-detail';
import '../../../component/resto-review';

const Detail = {
  async render() {
    return `
      <resto-detail></resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await RestoSource.detailResto(url.id);
    const restaurantsContainer = document.querySelector('#detail');
    restaurantsContainer.innerHTML += createRestoDetailTemplate(detail);

    restaurantsContainer.innerHTML += `
      <resto-review></resto-review>
    `;

    const restaurantReview = document.querySelector('#review');
    detail.customerReviews.forEach((review) => {
      restaurantReview.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoIdb,
      restaurant: {
        id: detail.id,
        pictureId: detail.pictureId,
        rating: detail.rating,
        name: detail.name,
        city: detail.city,
        description: detail.description,
      },
    });
  },
};

export default Detail;
