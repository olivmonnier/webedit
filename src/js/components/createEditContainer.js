const createContentActions = require('./createContentActions');

module.exports = function createEditContainer(content) {
  const container = document.createElement('div');
  const contentActions = createContentActions();

  container.className = 'w-content-container';
  container.appendChild(contentActions);
  container.appendChild(content);

  return container;
}
