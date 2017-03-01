import createContentContainer from '../components/createContentContainer';
import createElement from '../utils/createElement';

export default function(container, editorHtml, editor) {
  return function () {
    const editorContent = editorHtml.getValue();
    const divTemp = createElement({
      tagName: 'div',
      html: editorContent
    });

    container.innerHTML = '';
    divTemp.childNodes.forEach(node => {
      let newElem = node.cloneNode(true);

      if (newElem.tagName) {
        if (node.tagName != 'DIV') {
          newElem = createElement({
            tagName: 'div',
            childs: [node]
          });
        }
        newElem.classList.add('w-content');
        newElem.classList.add('editable');

        const newContent = createContentContainer(newElem);

        container.appendChild(newContent);
        editor.destroy()
        editor.setup();
      }
    });
  }
}
