const createButton = require('./createButton');
const clickBtnExport = require('../events/clickBtnExport');

module.exports = function createBarActions(primaryContainer) {
  const container = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

  clickBtnExport(btnExport, primaryContainer);

  container.className = 'w-bar-container';
  container.appendChild(btnExport);
  document.body.appendChild(container);
}
