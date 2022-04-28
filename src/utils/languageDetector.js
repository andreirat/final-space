import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'react-native-localize';
import { loadLocale } from 'services/Time';

import { STORE_LANGUAGE_KEY } from 'config';
export const userLanguage = getLocales()[0].languageCode;

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language !== userLanguage) {
          loadLocale(userLanguage);
          return callback(userLanguage);
        } else if (language) {
          loadLocale(language);
          return callback(language);
        } else {
          loadLocale(userLanguage);
          return callback(userLanguage);
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

module.exports = { languageDetector };
