const htmlEncode = require('htmlencode').htmlEncode;

export default function getContents(primaryContainer, encoded = true, editTag = false) {
  let result = '';
  const snippets = primaryContainer.querySelectorAll('.w-snippet.editable');

  snippets.forEach(snippet => {
    result += editTag ? '<div class="w-snippet editable">' + snippet.innerHTML + '</div>\n' : snippet.innerHTML;
  });

  return encoded ? htmlEncode(result) : result;
}
