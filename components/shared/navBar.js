import renderToDOM from '../../utils/renderToDom';
import { selectLanguageFilter } from '../forms/selectLanguage';

const navBar = (user) => {
  const domString = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vocabulary</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" id="allVocab" href="#">All Vocabulary<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" id="addWordLink">
        <a class="nav-link" href="#">Create Entry</a>
      </li>
      <li class="nav-item active">
      <a class="nav-link" id="allLang" href="#">All Languages<span class="sr-only">(current)</span></a>
    </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Words by Language
        </a>
        <div id="select-language-nav">
        </div>
        <li class="nav-item" id="logoutCont">
        <a class="nav-link" href="#">Log Out</a>
      </li>
    </ul>
  </div>
</nav>`;
  renderToDOM('#navBar', domString);
  selectLanguageFilter(user.uid);
};

export default navBar;
