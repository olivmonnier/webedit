import createContentsContainer from './components/createContentsContainer';
import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import initMediumEditor from './initMediumEditor';
import getContents from './utils/getContents';
import slice from './utils/slice';
import clickDocument from './events/clickDocument';

export default function(containerId, options = {}) {
  let urls = []; let snippetsUrls = []; let structuresUrls = [];
  let {editorOptions, snippetsPath, structuresPath, viewports, buttons} = options;

  const primaryContainers = slice(document.querySelectorAll(containerId));
  const editorMedium = initMediumEditor(editorOptions);

  if (snippetsPath && structuresPath) {
    snippetsUrls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    snippetsUrls = snippetsUrls.map(u => ({url: u.url || u, label: u.label || ''}));
    structuresUrls = Array.isArray(structuresPath) ? structuresPath : [structuresPath];
    structuresUrls = structuresUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    const snippetsPromise = Promise.all(snippetsUrls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      return Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          createContentsContainer(primaryContainers, editorMedium);
          createSnippetContainer(snippets, snippetsUrls);
        }).catch(response => console.log(response))
    });

    const structuresPromise = Promise.all(structuresUrls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      return Promise.all(responses.map(res => res.text()))
        .then((structures) => {
          console.log(structures)
        }).catch(response => console.log(response))
    });

    Promise.all([snippetsPromise]).then(() => {
      createBarActions(viewports, buttons);
      document.addEventListener('click', clickDocument);
      dragNDrop(primaryContainers, editorMedium);
    });

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
