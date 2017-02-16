const MediumEditor = require('medium-editor');
import createContentContainer from '../components/createContentContainer';

export default function(elem, container, editor, editorOptions) {
  document.getElementById('basicModal__action').addEventListener('replaceContent', () => {
    const editorContent = editor.getValue();
    const divTemp = document.createElement('div');

    container.innerHTML = '';
    divTemp.innerHTML = editorContent;
    divTemp.querySelectorAll('.w-snippet').forEach(elem => {
      const newElem = elem.cloneNode(true);
      const newContent = createContentContainer(newElem)

      elem.parentNode.replaceChild(newContent, elem);
    });
    divTemp.childNodes.forEach(node => {
      container.appendChild(node);
      if (node.classList.contains('w-content-container')) {
        new MediumEditor(node.querySelector('.w-snippet'), editorOptions);
      }
    });
  });
}
