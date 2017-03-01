import createContentContainer from '../components/createContentContainer';
import getClosest from '../utils/getClosest';
import insertAfter from '../utils/insertAfter';
import createElement from '../utils/createElement';

export default function(editor) {
  return function(e) {
    let newParent = null;
    const parent = getClosest(e.target, '.w-content-container');
    const content = parent.querySelector('.w-content');
    const html = content.innerHTML;
    const divSnippet = createElement({
      tagName: 'div',
      className: 'w-content editable',
      html
    });

    newParent = createContentContainer(divSnippet, editor);
    insertAfter(newParent, parent);
    editor.destroy()
    editor.setup();
  }
}
