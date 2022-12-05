import getTime from '../../utils/getTime';
import showWords from '../pages/words';
import { createWord, getWords, updateWord } from '../wordsData';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const payload = {
        name: document.querySelector('#wordName').value,
        definition: document.querySelector('#wordDefinition').value,
        language: document.querySelector('#language').value,
        time: getTime(),
        uid: user.uid,
      };
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
        language: document.querySelector('#language').value,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords(user.uid).then(showWords);
      });
    }
  });
};

export default formEvents;
