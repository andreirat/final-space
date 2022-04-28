import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, ro } from 'translations';
const { languageDetector } = require('./languageDetector');

const resources = {
  en: {
    translation: en,
  },
  ro: {
    translation: ro,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
