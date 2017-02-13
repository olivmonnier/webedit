const basicModal = require('basicmodal');
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';
import CodeMirror from 'codemirror';
require('codemirror/mode/htmlmixed/htmlmixed');

export default function(elem, container) {
  elem.addEventListener('click', function(e) {
    const content = getContents(container);

    basicModal.show({
      body: '<textarea>' + content + '</textarea>',
      class: 'modal-export',
      buttons: {
        action: {
          title: 'Close',
          fn: basicModal.close
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
    }
  });
}
