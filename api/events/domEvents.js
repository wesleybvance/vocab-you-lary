import addWordForm from '../../components/forms/addWordForm';
import { getWordsByLanguage } from '../languageData';
import showWords from '../pages/words';
import { deleteWord, getOneWord, getWords } from '../wordsData';
// import renderToDOM from '../../utils/renderToDom';

const domEvents = (user) => {
  document.querySelector('#app').addEventListener('click', (e) => {
    // CLICK DELETE WORD
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this entry?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showWords);
        });
      }
    }
    // CLICK TO VIEW UPDATE WORD FORM
    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOneWord(firebaseKey).then((word) => addWordForm(user.uid, word));
    }

    // CLICK TO VIEW BY LANGUAGE
    if (e.target.id.includes('filter-words')) {
      const [, firebaseKey] = e.target.id.split('--');
      getWordsByLanguage(firebaseKey).then(showWords);
    }
  });
};

export default domEvents;
