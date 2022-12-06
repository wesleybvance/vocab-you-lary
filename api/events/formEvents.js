import getTime from '../../utils/getTime';
import showWords from '../pages/words';
import { createWord, getWords, updateWord } from '../wordsData';
import getLanguageName from '../../utils/getLanguageName';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const payload = {
        name: document.querySelector('#wordName').value,
        definition: document.querySelector('#wordDefinition').value,
        language_id: document.querySelector('#language').value,
        language: getLanguageName(document.querySelector('#language').value),
        time: getTime(),
        uid: user.uid,
      };
      console.warn(payload);
      console.warn(document.querySelector('#language').value);
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords(user.uid).then(showWords);
        });
      });
    }
    // CLICK TO SUBMIT EDITED WORD
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#wordName').value,
        definition: document.querySelector('#wordDefinition').value,
        language_id: document.querySelector('#language').value,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
