import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const showLanguages = (array) => {
  clearDom();
  let domString = '';
  array.forEach((lang) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${lang.language}</h5>
      <p class="card-text">${lang.description}</p>
      <a href="#" id="delete-word--${lang.firebaseKey}" class="card-link">Delete Entry</a>
    </div>
  </div>`;
  });
  renderToDOM('#card-container', domString);
};

export default showLanguages;
