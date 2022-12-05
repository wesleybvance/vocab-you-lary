import formEvents from '../api/events/formEvents';
import navigationEvents from '../api/events/navigationEvents';
import logoutButton from '../components/buttons/logoutButton';
import buildDOM from '../components/shared/buildDOM';
import navBar from '../components/shared/navBar';

const startApp = (user) => {
  buildDOM(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  formEvents(user);
};

export default startApp;
