import { getWords } from '../wordsData';
import showWords from '../pages/words';
import addWordForm from '../../components/forms/addWordForm';
import { getLanguages } from '../languageData';
import showLanguages from '../pages/languages';

const navigationEvents = (user) => {
  document.querySelector('#allVocab').addEventListener('click', () => {
    (getWords(user.uid)).then(showWords);
  });

  document.querySelector('#addWordLink').addEventListener('click', () => {
    addWordForm(user.uid);
  });

  document.querySelector('#allLang').addEventListener('click', () => {
    getLanguages(user.uid).then(showLanguages);
  });
};

export default navigationEvents;
