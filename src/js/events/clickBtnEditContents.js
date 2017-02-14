const basicModal = require('basicmodal');
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';
import CodeMirror from 'codemirror';
require('codemirror/mode/htmlmixed/htmlmixed');

function saveEditContents() {
  const elem = document.getElementById('basicModal__action');
  const event = new CustomEvent('replaceContents');

  elem.dispatchEvent(event);
  basicModal.close();
}

export default function(elem, container) {
  elem.addEventListener('click', function(e) {
    const content = getContents(container, true, true);

    basicModal.show({
      body: '<textarea>' + content + '</textarea>',
      class: 'modal-edit-contents',
      buttons: {
        cancel: {
          title: 'Cancel',
          fn: basicModal.close
        },
        action: {
          title: 'Save',
          fn: saveEditContents
        }
      }
    });

    if (basicModal.visible()) {
      const textarea = document.getElementsByTagName('textarea')[0];
      const editor = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'htmlmixed',
        tabSize: '2'
      });

      document.getElementById('basicModal__action').addEventListener('replaceContents', () => {
        container.innerHTML = editor.getValue();
      });
    }
  });
}
