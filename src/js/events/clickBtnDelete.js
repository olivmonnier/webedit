const basicModal = require('basicmodal');
import getClosest from '../utils/getClosest';

export default function(elem) {
  elem.addEventListener('click', function(e) {
    const parent = getClosest(elem, '.w-content-container');

    basicModal.show({
      body: '<p><strong>Are you sure ?</strong></p>',
      buttons: {
        cancel: {
          title: 'Cancel',
          fn: basicModal.close
        },
        action: {
          title: 'Continue',
          fn: () => {
            parent.remove();
            basicModal.close();
          }
        }
      }
    })
  });
}
