// src/api/rating/routes/rating.js
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ratings/play-store/:appId',
      handler: 'rating.getPlayStoreRating',
      config: {
        auth: false, // Public API
      },
    },
    {
      method: 'GET',
      path: '/ratings/app-store/:appId',
      handler: 'rating.getAppStoreRating',
      config: {
        auth: false,
      },
    },
  ],
};