const createBarActions = require('./components/createBarActions');
const createSnippetContainer = require('./components/createSnippetContainer');
const dragNDrop = require('./dragNDrop');
const getContents = require('./utils/getContents');
const clickBody = require('./events/clickBody');

module.exports = function(containerId, options) {
  const primaryContainer = document.getElementById(containerId);
  const editorOptions = options && options.editorOptions;
  const snippetsPath = options && options.snippetsPath;
  const body = document.getElementsByTagName('body')[0];

  clickBody(body);

  if (snippetsPath) {
    fetch(snippetsPath).then(response => {
      return response.text();
    }).then((snippets) => {
      createSnippetContainer(snippets);
      createBarActions(primaryContainer);
    }).then(() => {
      dragNDrop(primaryContainer, editorOptions);
    }).catch(response => console.log(response));

    return {
      exportHtml: function() {
        return getContents(primaryContainer);
      }
    }
  } else {
    new Error('snippets path missing')
  }
}
