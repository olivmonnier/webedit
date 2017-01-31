const createContentActions = require('./createContentActions');

module.exports = function createEditContainer(content, editorOptions) {
  const container = document.createElement('div');
  const contentActions = createContentActions(editorOptions);

  container.className = 'w-content-container';
  container.appendChild(contentActions);
  container.appendChild(content);

  return container;
}
