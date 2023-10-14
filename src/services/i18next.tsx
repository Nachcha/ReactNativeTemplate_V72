import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en_us from '../localization/en-us.json';
import en_uk from '../localization/en-uk.json';
import ja from '../localization/ja.json';
import sinhala from '../localization/sinhala.json';

export const languageResources = {
  en_us: {translation: en_us},
  en_uk: {translation: en_uk},
  ja: {translation: ja},
  sinhala: {translation: sinhala},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en_us',
  fallbackLng: 'en_us',
  resources: languageResources,
});

export default i18next;
