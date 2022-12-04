import getWords from '../wordsData';
import showWords from '../pages/words';

const navigationEvents = () => {
  document.querySelector('#allVocab').addEventListener('click', () => {
    getWords().then(showWords);
  });
};

export default navigationEvents;
