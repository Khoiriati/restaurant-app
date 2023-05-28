import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => `
<div class="catalog-item">
    <img class="catalog-item__thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}">
    <div clas="catalog-item__content">
        <p class="catalog-item__rating">Rating: ${resto.rating}</p>
        <p class="catalog-item__title" tabindex="0"><a href="./#/detail/${resto.id}" title="Link ke halaman detail restoran">${resto.name} - ${resto.city}</a></p>      
        <p class="catalog-item__description">${resto.description}</p>
    </div>
</div>
`;

const createRestoDetailTemplate = (resto) => `
<div class="catalog-detail">
    <h1>${resto.name}</h1>
    <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
    <div class="info">
      <ul>
        <li>
          <h2>City</h2>
          <p>${resto.city}</p>
        </li>
        <li>
          <h2>Address</h2>
          <p>${resto.address}</p>
        </li>
        <li>
          <h2>Rating</h2>
          <p>${resto.rating}</p>
        </li>
        <li>
          <h2>Foods Menu</h2>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
        <li>
          <h2>Drinks Menu</h2>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(', ')}</p>
          </span>
        </li>
      </ul>
    </div>
    <div class="overview">
      <h2>Overview</h2>
      <p>${resto.description}</p>
    </div>
</div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="catalog-detail">
    <p>
    <span class="name">${reviews.name}</span> - <span class="date">${reviews.date}</span>
    </p>
    <p>${reviews.review}</p>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
