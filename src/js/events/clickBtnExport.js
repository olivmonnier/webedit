const basicModal = require('basicmodal');
import getContents from '../utils/getContents';

export default function(elem, container) {
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
