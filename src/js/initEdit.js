import createContentsContainer from './components/createContentsContainer';
import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import initMediumEditor from './initMediumEditor';
import getContents from './utils/getContents';
import slice from './utils/slice';
import clickDocument from './events/clickDocument';

export default function(containerId, options = {}) {
  let urls = []; let snippetsUrls = [];
  let {editorOptions, snippetsPath, viewports, buttons} = options;
  
  const primaryContainers = slice(document.querySelectorAll(containerId));
  const editorMedium = initMediumEditor(editorOptions);

  if (snippetsPath) {
    snippetsUrls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    urls = snippetsUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    Promise.all(urls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          document.addEventListener('click', clickDocument);
          createContentsContainer(primaryContainers, editorMedium);
          createSnippetContainer(snippets, urls);
          createBarActions(viewports, buttons);
        }).then(() => {
          dragNDrop(primaryContainers, editorMedium);
        }).catch(response => console.log(response))
    })

    return {
      exportHtml: function() {
        const container = document.body;

        return getContents(container);
      }
    }
  } else {
    new Error('snippets path missing')
  }
}
