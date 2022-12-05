import renderToDOM from '../../utils/renderToDom';
import getLanguages from '../../api/languageData';

const selectLanguage = (uid, languageId) => {
  let domString = `<label for="newWordLang">Select a Language</label>
  <select class="form-control" id="newWordLang">
    <option value="">Select a Language</option>`;
  getLanguages(uid).then((languageArray) => {
    languageArray.forEach((lang) => {
      domString += `
      <option value="${lang.firebaseKey}" 
            ${languageId === lang.firebaseKey ? 'selected' : ''}>
              ${lang.language}
          </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
