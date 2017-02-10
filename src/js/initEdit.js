import createContentsContainer from './components/createContentsContainer';
import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import getContents from './utils/getContents';
import clickDocument from './events/clickDocument';

export default function(containerId, options = {}) {
  let urls = []; let snippetsUrls = [];

  const primaryContainer = [].slice.call(document.querySelectorAll(containerId));
  const editorOptionsDefault = {
    buttonLabels: 'fontawesome',
    toolbar: {
      buttons: ['bold', 'italic', 'underline', 'strikethrough', 'anchor', 'image', 'quote', 'justifyLeft', 'justifyRight', 'justifyCenter', 'h1', 'h2', 'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'colorPicker', 'removeFormat']
    }
  }
  const editorOptions = options.editorOptions || editorOptionsDefault;
  const snippetsPath = options.snippetsPath;

  if (snippetsPath) {
    snippetsUrls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    urls = snippetsUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    Promise.all(urls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          clickDocument(document);
          primaryContainer.forEach(createContentsContainer);
          createSnippetContainer(snippets, urls);
          createBarActions(options.viewports, options.buttons);
        }).then(() => {
          dragNDrop(primaryContainer, editorOptions);
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
