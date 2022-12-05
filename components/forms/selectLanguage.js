import renderToDOM from '../../utils/renderToDom';
import getLanguages from '../../api/languageData';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="language">Select a Language</label>
  <select class="form-control" id="language" required>
    <option value="no selection">Select a Language</option>`;
  getLanguages(uid).then((languageArray) => {
    languageArray.forEach((lang) => {
      domString += `
      <option value="${lang.language}" 
            ${languageId === lang.language ? 'selected' : ''}>
              ${lang.language}
          </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
