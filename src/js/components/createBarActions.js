const basicModal = require('basicmodal');
const htmlEncode = require('htmlencode').htmlEncode;
const createButton = require('./createButton');

function getContents(primaryContainer) {
  let result = '';
  const snippets = primaryContainer.querySelectorAll('.w-snippet');

  snippets.forEach(snippet => {
    result += snippet.innerHTML;
  });

  return result;
}

module.exports = function createBarActions(primaryContainer) {
  const container = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

  btnExport.addEventListener('click', function(e) {
    const content = getContents(primaryContainer);

    basicModal.show({
      body: '<pre>' + htmlEncode(content) + '</pre>',
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
