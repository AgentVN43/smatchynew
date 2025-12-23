// src/api/rating/controllers/rating.js
"use strict";

const gplay =
  require("google-play-scraper").default || require("google-play-scraper");
const appstore = require("app-store-scraper");

// Cache
const cache = new Map();
const CACHE_TTL = 3600000; // 1 hour

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryFetch = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(1000 * (i + 1));
    }
  }
};

module.exports = {
  getPlayStoreRating: async (ctx) => {
    const { appId } = ctx.params;
    const cacheKey = `play-${appId}`;

    try {
      // Check cache
      if (cache.has(cacheKey)) {
        const { data, timestamp } = cache.get(cacheKey);
        if (Date.now() - timestamp < CACHE_TTL) {
          return data;
        } else {
          cache.delete(cacheKey);
        }
      }

      const appData = await retryFetch(() =>
        gplay.app({ appId, lang: "en", country: "fr" })
      );

      const data = {
        rating: appData.score,
        ratingsCount: appData.ratings,
        icon: appData.icon,
        title: appData.title,
      };

      cache.set(cacheKey, { data, timestamp: Date.now() });
      return data;
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },

  getAppStoreRating: async (ctx) => {
    const { appId } = ctx.params;
    const cacheKey = `app-${appId}`;

    try {
      // Check cache
      if (cache.has(cacheKey)) {
        const { data, timestamp } = cache.get(cacheKey);
        if (Date.now() - timestamp < CACHE_TTL) {
          return data;
        } else {
          cache.delete(cacheKey);
        }
      }

      const appData = await retryFetch(() =>
        appstore.app({ id: appId, lang: "en", country: "fr" })
      );

      const data = {
        rating: appData.score,
        ratingsCount: appData.ratings,
        icon: appData.icon,
        title: appData.title,
      };

      cache.set(cacheKey, { data, timestamp: Date.now() });
      return data;
    } catch (error) {
      ctx.throw(500, error.message);
    }
  },
};
