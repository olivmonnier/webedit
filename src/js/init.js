const createBarActions = require('./components/createBarActions');
const createSnippetContainer = require('./components/createSnippetContainer');
const dragNDrop = require('./dragNDrop');

module.exports = function(containerId, options) {
  const primaryContainer = document.getElementById(containerId);
  const editorOptions = options && options.editorOptions;
  const snippetsPath = options && options.snippetsPath;

  if (snippetsPath) {
    fetch(snippetsPath).then(response => {
      return response.text();
    }).then((snippets) => {
      createSnippetContainer(snippets);
      createBarActions(primaryContainer);
    }).then(() => {
      dragNDrop(primaryContainer, editorOptions);
    }).catch(response => console.log(response));
  }
}
