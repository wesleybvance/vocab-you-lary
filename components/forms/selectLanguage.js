import renderToDOM from '../../utils/renderToDom';
import { getLanguages } from '../../api/languageData';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="language">Select a Language</label>
  <select class="form-control" id="language" required>
    <option value="no selection">Select a Language</option>`;
  getLanguages(uid).then((languageArray) => {
    languageArray.forEach((lang) => {
      domString += `
      <option value="${lang.language}" 
            ${languageId === lang.language_id ? 'selected' : ''}>
              ${lang.language}
          </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

const selectLanguageFilter = (uid) => {
  let domString = '<div class="dropdown-menu" aria-labelledby="navbarDropdown">';
  getLanguages(uid).then((arr) => {
    arr.forEach((lang) => {
      domString += `
    <a class="dropdown-item" href="#" id="filter-words--${lang.firebaseKey}">${lang.language}</a>`;
    });
    domString += '</div>';
    renderToDOM('#select-language-nav', domString);
  });
};

export { selectLanguage, selectLanguageFilter };
