import domEvents from '../api/events/domEvents';
import formEvents from '../api/events/formEvents';
import navigationEvents from '../api/events/navigationEvents';
import logoutButton from '../components/buttons/logoutButton';
import buildDOM from '../components/shared/buildDOM';
import navBar from '../components/shared/navBar';
import { getWords } from '../api/wordsData';
import showWords from '../api/pages/words';

const startApp = (user) => {
  buildDOM(user);
  navBar(user);
  logoutButton();
  navigationEvents(user);
  formEvents(user);
  domEvents(user);
  (getWords(user.uid)).then(showWords);
};

export default startApp;
