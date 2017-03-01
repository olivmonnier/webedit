const htmlEncode = require('htmlencode').htmlEncode;

export default function getContents(primaryContainer, encoded = true) {
  let result = '';

  const primaryContainerClone = primaryContainer.cloneNode(true);

  primaryContainerClone.childNodes.forEach(elem => {
    if (elem.classList.contains('w-content-container')) {
      const snippet = elem.querySelector('.w-content');

      result += '\n<div>\n\t' + snippet.innerHTML.trim() + '\n</div>\n';
    } else {
      const divTemp = document.createElement('div');
      const newElem = elem.cloneNode(true);

      divTemp.appendChild(newElem);
      result += divTemp.innerHTML;
    }
  });

  return encoded ? htmlEncode(result) : result;
}
