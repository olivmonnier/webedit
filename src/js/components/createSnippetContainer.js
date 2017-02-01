const createButton = require('./createButton');
const clickBtnOpen = require('../events/clickBtnOpen');

module.exports = function createSnippetContainer(snippets) {
  const primaryContainer = document.createElement('div');
  const container = document.createElement('div');
  const btnOpen = createButton('', 'w-btn-open fa fa-angle-left');

  clickBtnOpen(btnOpen, primaryContainer);

  primaryContainer.className = 'w-aside-container';
  container.id = 'snippetsContainer';
  container.innerHTML = snippets;
  primaryContainer.appendChild(btnOpen);
  primaryContainer.appendChild(container)
  document.body.appendChild(primaryContainer);
}
