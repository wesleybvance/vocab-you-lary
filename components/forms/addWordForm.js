import renderToDOM from '../../utils/renderToDom';
import clearDom from '../../utils/clearDom';
import { selectLanguage } from './selectLanguage';

const addWordForm = (uid, obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}">
  <div class="form-group">
    <label for="wordName">New Vocabulary Word</label>
    <input type="text" id="wordName" class="form-control" placeholder="Enter New Word" value="${obj.name || ''}" required>
  </div>
  <div class="form-group" id="select-language">
  </div>
  <div class="form-group">
    <label for="wordDefinition">Definition</label>
    <textarea class="form-control" id="wordDefinition" rows="3">${obj.definition || ''}</textarea>
    </div>
  <button type="submit" id="submitWord" class="btn btn-primary">Submit</button>
</form>`;
  renderToDOM('#form-container', domString);
  selectLanguage(uid, `${obj.language_id || ''}`);
};

export default addWordForm;
