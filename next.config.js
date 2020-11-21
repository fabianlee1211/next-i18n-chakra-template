const { nextI18NextRewrites } = require('next-i18next/rewrites');

// Required
const localeSubpaths = {
  en: 'en',
  'zh-HK': 'zh-hk',
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
