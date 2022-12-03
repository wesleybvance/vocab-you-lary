import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button type="button" class="btn btn-light" id="google-auth">Log In</button>';
  document.querySelector('#app').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
