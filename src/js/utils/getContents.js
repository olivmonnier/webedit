const htmlEncode = require('htmlencode').htmlEncode;

export default function getContents(primaryContainer, encoded = true, editTag = false) {
  let result = '';

  const primaryContainerClone = primaryContainer.cloneNode(true);

  primaryContainerClone.childNodes.forEach(elem => {
    if (elem.classList.contains('w-content-container')) {
      const snippet = elem.querySelector('.w-snippet');

      result += (editTag) ? '\n<div class="w-snippet editable">' + snippet.innerHTML + '</div>\n' : snippet.innerHTML;
    } else {
      const divTemp = document.createElement('div');
      const newElem = elem.cloneNode(true);

      divTemp.appendChild(newElem);
      result += divTemp.innerHTML;
    }
  });

  return encoded ? htmlEncode(result) : result;
}
