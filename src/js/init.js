import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import getContents from './utils/getContents';
import clickDocument from './events/clickDocument';

export default function(containerId, options) {
  const primaryContainer = document.getElementById(containerId);
  const editorOptions = options && options.editorOptions;
  const snippetsPath = options && options.snippetsPath;

  clickDocument(document);

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
