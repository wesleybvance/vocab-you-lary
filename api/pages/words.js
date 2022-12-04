import renderToDOM from '../../utils/renderToDom';

const showWords = (array) => {
  let domString = '';
  array.forEach((word) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${word.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${word.language}</h6>
      <p class="card-text">${word.definition}</p>
      <a href="#" id="delete-word--${word.firebaseKey}" class="card-link">Delete Entry</a>
    </div>
  </div>`;
  });
  renderToDOM('#card-container', domString);
};

export default showWords;
