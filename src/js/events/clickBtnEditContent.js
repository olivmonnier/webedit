import getContents from '../utils/getContents';
import getClosest from '../utils/getClosest';

export default function(e) {
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
        fn: function(e) {
          const editorContent = window.instanceWebEdit.editorHtml.getValue();

          container.innerHTML = editorContent;
          basicModal.close();
        }
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

    window.instanceWebEdit.editorHtml = editorHtml;
  }
}
