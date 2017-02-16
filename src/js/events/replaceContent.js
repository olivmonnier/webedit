const MediumEditor = require('medium-editor');
import createContentContainer from '../components/createContentContainer';

export default function(elem, container, editor, editorOptions) {
  document.getElementById('basicModal__action').addEventListener('replaceContent', () => {
    const editorContent = editor.getValue();
    const divTemp = document.createElement('div');

    container.innerHTML = '';
    divTemp.innerHTML = editorContent;
    divTemp.childNodes.forEach(node => {
      let newElem = node.cloneNode(true);

      if (newElem.tagName) {
        if (node.tagName != 'DIV') {
          const div = document.createElement('div');

          div.appendChild(node);
          newElem = div;
        }
        newElem.classList.add('w-snippet');
        newElem.classList.add('editable');

        const newContent = createContentContainer(newElem);

        container.appendChild(newContent);

        new MediumEditor(newContent.querySelector('.w-snippet'), editorOptions);
      }
    });
  });
}
