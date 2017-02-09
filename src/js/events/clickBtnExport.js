const basicModal = require('basicmodal');
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';

export default function(elem) {
  const container = document.body;
  
  elem.addEventListener('click', function(e) {
    const content = getContents(container);

    basicModal.show({
      body: '<pre>' + content + '</pre>',
      class: 'modal-export',
      buttons: {
        action: {
          title: 'Close',
          fn: basicModal.close
        }
      }
    })
  });
}
