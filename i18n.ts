import NextI18Next from 'next-i18next';
import getConfig from 'next/config';
import path from 'path';

const { publicRuntimeConfig } = getConfig();
const { localeSubpaths } = publicRuntimeConfig;

const nextI18n = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['zh-HK'],
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
});

export const {
  useTranslation,
  appWithTranslation,
  i18n,
  Router,
  Link,
  config,
} = nextI18n;
