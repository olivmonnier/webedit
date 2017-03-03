import replaceContent from './replaceContent';
import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';

function saveEditContents() {
  const elem = document.getElementById('basicModal__action');
  const event = new CustomEvent('replaceContent');

  elem.dispatchEvent(event);
  basicModal.close();
}

export default function(editor) {
  return function(e) {
    const parent = getClosest(e.target, '.w-content-container');
    const container = parent.querySelector('.w-content')
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
      const editorHtml = CodeMirror.fromTextArea(textarea, {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'htmlmixed',
        tabSize: '2'
      });

      document.getElementById('basicModal__action').addEventListener('replaceContent', replaceContent(container, editorHtml, editor));
    }
  }
}
