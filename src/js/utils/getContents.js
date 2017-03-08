const htmlEncode = require('htmlencode').htmlEncode;
import slice from './slice';

export default function getContents(primaryContainer, encoded = true) {
  let result = '';
  const primaryContainerClone = primaryContainer.cloneNode(true);

  cleanHtml(primaryContainerClone);

  primaryContainerClone.childNodes.forEach(elem => {
    const divTemp = document.createElement('div');
    const newElem = elem.cloneNode(true);

    divTemp.appendChild(newElem);
    result += divTemp.innerHTML;
  });

  return encoded ? htmlEncode(result) : result;
}

function cleanHtml (container) {
  const structures = slice(container.querySelectorAll('.w-structure'));
  const contents = slice(container.querySelectorAll('.w-content-container'));
  const structureBars = slice(container.querySelectorAll('.w-contents-bar'));
  const contentActions = slice(container.querySelectorAll('.w-actions'));

  structures.forEach(el => el.classList.remove('w-structure'));
  contents.forEach(el => {
    const content = el.querySelector('.w-content').innerHTML;
    
    el.classList.remove('w-content-container');
    el.innerHTML = content;
  });
  structureBars.forEach(el => el.remove());
  contentActions.forEach(el => el.remove());
}
