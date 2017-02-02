import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import getContents from './utils/getContents';
import clickDocument from './events/clickDocument';

export default function(containerId, options) {
  let urls = [];
  const primaryContainer = document.getElementById(containerId);
  const editorOptions = options && options.editorOptions;
  const snippetsPath = options && options.snippetsPath;

  clickDocument(document);

  if (snippetsPath) {
    urls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    
    Promise.all(urls.map(url => fetch(url, { method: 'GET' }))).then(responses => {
      Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          createSnippetContainer(snippets);
          createBarActions(primaryContainer);
        }).then(() => {
          dragNDrop(primaryContainer, editorOptions);
        }).catch(response => console.log(response))
    })

    return {
      exportHtml: function() {
        return getContents(primaryContainer);
      }
    }
  } else {
    new Error('snippets path missing')
  }
}
