const basicModal = require('basicmodal');
import CodeMirror from 'codemirror';
import replaceContent from './replaceContent';
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';
require('codemirror/mode/htmlmixed/htmlmixed');

function saveEditContents() {
  const elem = document.getElementById('basicModal__action');
  const event = new CustomEvent('replaceContent');

  elem.dispatchEvent(event);
  basicModal.close();
}

export default function(elem, container, editorOptions) {
  elem.addEventListener('click', function(e) {
    const content = getContents(container, true);

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

      replaceContent(document.getElementById('basicModal__action'), container, editor, editorOptions);
    }
  });
}
