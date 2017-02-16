import createContentContainer from '../components/createContentContainer';
import getClosest from'../utils/getClosest';
import insertAfter from'../utils/insertAfter';


export default function(elem, editor) {
  elem.addEventListener('click', function(e) {
    let newParent = null;
    const parent = getClosest(elem, '.w-content-container');
    const content = parent.querySelectorAll('.w-snippet')[0];
    const html = content.innerHTML;
    const divSnippet = document.createElement('div');

    divSnippet.className = 'w-snippet editable';
    divSnippet.innerHTML = html;
    newParent = createContentContainer(divSnippet, editorOptions);
    insertAfter(newParent, parent);
    editor.destroy()
    editor.setup();
  });
}
