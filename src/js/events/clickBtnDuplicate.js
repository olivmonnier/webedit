import createContentsContainer from '../components/createContentsContainer';
import createContentContainer from '../components/createContentContainer';
import getClosest from '../utils/getClosest';
import insertAfter from '../utils/insertAfter';
import createElement from '../utils/createElement';
import slice from '../utils/slice';

export default function(editor) {
  return function(e) {
    let parent = null;
    let newParent = null;
    const el = e.target;

    if (el.parentNode.classList.contains('w-actions')) {
      parent = getClosest(el, '.w-content-container');
      newParent = duplicateContent(parent, editor);
    } else {
      parent = getClosest(el, '.w-structure');
      newParent = duplicateStructure(parent, editor);
    }

    insertAfter(newParent, parent);
    editor.destroy()
    editor.setup();
  }
}

function duplicateContent(parent, editor) {
  const content = parent.querySelector('.w-content');
  const html = content.innerHTML;
  const divSnippet = createElement({
    tagName: 'div',
    className: 'w-content editable',
    html
  });
  return createContentContainer(divSnippet, editor);
}

function duplicateStructure(parent, editor) {
  const contents = slice(parent.querySelectorAll('.w-content-container'));
  const newStructure = parent.cloneNode(true);
  const newContentsContainer = newStructure.querySelector('.w-contents');

  newStructure.querySelector('.w-contents-bar').remove();
  newContentsContainer.innerHTML = '';
  createContentsContainer(newStructure, editor);
  contents.forEach(content => newContentsContainer.appendChild(duplicateContent(content, editor)));

  let newContents = slice(newStructure.querySelectorAll('.w-contents'));
  newContents.forEach(content => window.instanceWebEdit.dragContents.containers.push(content));

  return newStructure;
}
