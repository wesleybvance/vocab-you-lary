import { signOut } from '../../utils/auth';

const logoutButton = () => {
  const domString = '<a class="nav-link" id="google-auth" href="#">Log Out</a>';
  document.querySelector('#logoutCont').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signOut);
};

export default logoutButton;
