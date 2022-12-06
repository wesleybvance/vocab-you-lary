import { getOneLanguage } from '../api/languageData';

const getLanguage = (obj) => obj.language;

const getLanguageName = (firebaseKey) => {
  getOneLanguage(firebaseKey).then(getLanguage);
};

export default getLanguageName;
