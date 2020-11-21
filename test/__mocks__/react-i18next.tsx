const React = require('react');

module.exports = {
  withTranslation: () => (Component) => (props) => (
    <Component t={(k) => k} {...props} />
  ),
  useTranslation: () => {
    return {
      t: () => 'Translated Text',
      i18n: {
        changeLanguage: jest.fn(),
      },
    };
  },
};

export {};
