/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.catalog-item');
  I.seeElement('.catalog-item__title a');

  const firstRestaurant = locate('.catalog-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.catalog-item');

  const likedRestaurantTitle = await I.grabTextFrom('.catalog-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.catalog-item');
  I.seeElement('.catalog-item__title a');

  const firstRestaurant = locate('.catalog-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.catalog-item');

  const likedRestaurantTitle = await I.grabTextFrom('.catalog-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(likedRestaurantTitle);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
});
