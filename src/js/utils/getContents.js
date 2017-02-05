const htmlEncode = require('htmlencode').htmlEncode;

export default function getContents(primaryContainer, encoded = true) {
  let result = '';
  const snippets = primaryContainer.querySelectorAll('.w-snippet');

  snippets.forEach(snippet => {
    result += snippet.innerHTML;
  });

  return encoded ? htmlEncode(result) : result;
}
