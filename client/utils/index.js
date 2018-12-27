import { SUPPORTED_LANGUAGES } from './constants';
export const getImageUrl = (url, serverUrl = '') => serverUrl + url;

export const isSupportedLanguage = language =>
  SUPPORTED_LANGUAGES.indexOf(language) > -1;
