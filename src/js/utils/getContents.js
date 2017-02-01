const htmlEncode = require('htmlencode').htmlEncode;

export default function getContents(primaryContainer) {
  let result = '';
  const snippets = primaryContainer.querySelectorAll('.w-snippet');

  snippets.forEach(snippet => {
    result += snippet.innerHTML;
  });

  return htmlEncode(result);
}
