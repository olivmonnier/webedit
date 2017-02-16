import createContentContainer from '../components/createContentContainer';

export default function(elem, container, editorHtml, editor) {
  document.getElementById('basicModal__action').addEventListener('replaceContent', () => {
    const editorContent = editorHtml.getValue();
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
        editor.destroy()
        editor.setup();
      }
    });
  });
}
