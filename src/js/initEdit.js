import createContentsContainer from './components/createContentsContainer';
import createBarActions from './components/createBarActions';
import createAsideContentsContainer from './components/createAsideContentsContainer';
import createAsideStructuresContainer from './components/createAsideStructuresContainer';
import createAsideContainer from './components/createAsideContainer';
import dragNDrop from './dragNDrop';
import initMediumEditor from './initMediumEditor';
import getContents from './utils/getContents';
import slice from './utils/slice';
import clickDocument from './events/clickDocument';

export default function(containerId, options = {}) {
  let urls = []; let contentsUrls = []; let structuresUrls = []; let instanceWebEdit = {};
  let {editorOptions, contentsPath, structuresPath, viewports, buttons} = options;

  const primaryContainers = slice(document.querySelectorAll(containerId));
  const editorMedium = initMediumEditor(editorOptions);

  if (contentsPath && structuresPath) {
    createAsideContainer();

    contentsUrls = Array.isArray(contentsPath) ? contentsPath : [contentsPath];
    contentsUrls = contentsUrls.map(u => ({url: u.url || u, label: u.label || ''}));
    structuresUrls = Array.isArray(structuresPath) ? structuresPath : [structuresPath];
    structuresUrls = structuresUrls.map(u => ({url: u.url || u, label: u.label || ''}));

    const contentsPromise = Promise.all(contentsUrls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      return Promise.all(responses.map(res => res.text()))
        .then((contents) => {
          createAsideContentsContainer(contents, contentsUrls);
        }).catch(response => console.log(response))
    });

    const structuresPromise = Promise.all(structuresUrls.map(u => fetch(u.url, { method: 'GET', mode: 'cors' }))).then(responses => {
      return Promise.all(responses.map(res => res.text()))
        .then((structures) => {
          createAsideStructuresContainer(structures, structuresUrls);
        }).catch(response => console.log(response))
    });

    Promise.all([contentsPromise, structuresPromise]).then(() => {
      createBarActions(viewports, buttons);
      instanceWebEdit = Object.assign(instanceWebEdit, dragNDrop(primaryContainers, editorMedium));
      document.addEventListener('click', clickDocument);
    });

    window.instanceWebEdit = instanceWebEdit;

    return Object.assign(instanceWebEdit, {
      exportHtml: function() {
        const container = document.body;

        return getContents(container);
      }
    });
  } else {
    new Error('snippets path missing')
  }
}
