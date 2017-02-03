import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import getContents from './utils/getContents';
import clickDocument from './events/clickDocument';

export default function(containerId, options) {
  let urls = []; let snippetsUrls = [];
  const primaryContainer = document.getElementById(containerId);
  const editorOptions = options && options.editorOptions;
  const snippetsPath = options && options.snippetsPath;

  clickDocument(document);

  primaryContainer.classList.add('w-contents-container');

  if (snippetsPath) {
    snippetsUrls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    urls = snippetsUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    Promise.all(urls.map(u => fetch(u.url, { method: 'GET' }))).then(responses => {
      Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          createSnippetContainer(snippets, urls);
          createBarActions(primaryContainer, options.viewports);
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
