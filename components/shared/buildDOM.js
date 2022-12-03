import renderToDOM from '../../utils/renderToDom';

const buildDOM = () => {
  const domString = `<div id="navigation"></div>
  <div id="main-container">
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="card-container"></div>
    <div id="view"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default buildDOM;
