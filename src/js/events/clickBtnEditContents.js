const basicModal = require('basicmodal');
import CodeMirror from 'codemirror';
import createContentContainer from '../components/createContentContainer';
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';
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
        const editorContent = editor.getValue();
        const divTemp = document.createElement('div');

        container.innerHTML = '';
        divTemp.innerHTML = editorContent;
        divTemp.querySelectorAll('.w-snippet').forEach(elem => {
          const newElem = elem.cloneNode(true);
          const newContent = createContentContainer(newElem)

          elem.parentNode.replaceChild(newContent, elem);
        });
        divTemp.childNodes.forEach(node => container.appendChild(node));
      });
    }
  });
}
