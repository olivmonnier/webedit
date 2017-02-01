const createContentActions = require('./createContentActions');
const clickContent = require('../events/clickContent');

module.exports = function createEditContainer(content, editorOptions) {
  const container = document.createElement('div');
  const contentActions = createContentActions(editorOptions);

  clickContent(container);

  container.className = 'w-content-container';
  container.appendChild(contentActions);
  container.appendChild(content);

  return container;
}
