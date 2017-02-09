import createBarActions from './components/createBarActions';
import createSnippetContainer from './components/createSnippetContainer';
import dragNDrop from './dragNDrop';
import getContents from './utils/getContents';
import clickDocument from './events/clickDocument';

export default function(containerId, options = {}) {
  let urls = []; let snippetsUrls = [];

  const primaryContainer = document.getElementById(containerId);
  const editorOptionsDefault = {
    buttonLabels: 'fontawesome',
    toolbar: {
      buttons: ['bold', 'italic', 'underline', 'strikethrough', 'anchor', 'image', 'quote', 'justifyLeft', 'justifyRight', 'justifyCenter', 'h1', 'h2', 'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'colorPicker', 'removeFormat']
    }
  }
  const editorOptions = options.editorOptions || editorOptionsDefault;
  const snippetsPath = options.snippetsPath;

  clickDocument(document);

  primaryContainer.classList.add('w-contents-container');

  if (snippetsPath) {
    snippetsUrls = Array.isArray(snippetsPath) ? snippetsPath : [snippetsPath];
    urls = snippetsUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    Promise.all(urls.map(u => fetch(u.url, { method: 'GET' }))).then(responses => {
      Promise.all(responses.map(res => res.text()))
        .then((snippets) => {
          createSnippetContainer(snippets, urls);
          createBarActions(primaryContainer, options.viewports, options.buttons);
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
