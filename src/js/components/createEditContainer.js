const createBarActions = require('./createBarActions');

module.exports = function createEditContainer(content) {
  const container = document.createElement('div');
  const barActions = createBarActions();

  container.className = 'container';
  container.appendChild(barActions);
  container.appendChild(content);

  return container;
}
