const basicModal = require('basicmodal');
const getContents = require('../utils/getContents');

module.exports = function(elem, container) {
  elem.addEventListener('click', function(e) {
    const content = getContents(container);

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
}
