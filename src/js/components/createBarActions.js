const basicModal = require('basicmodal');
const createButton = require('./createButton');
const getContents = require('../utils/getContents');

module.exports = function createBarActions(primaryContainer) {
  const container = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

  btnExport.addEventListener('click', function(e) {
    const content = getContents(primaryContainer);

    basicModal.show({
      body: '<pre>' + content + '</pre>',
      buttons: {
        action: {
          title: 'Close',
          fn: basicModal.close
        }
      }
    })
  });

  container.className = 'w-bar-container';
  container.appendChild(btnExport);
  document.body.appendChild(container);
}
