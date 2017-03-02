import createElement from '../utils/createElement';
import createSelectorContents from './createSelectorContents';
import clickTabAside from '../events/clickTabAside';

export default function createAsideStructuresContainer(structures, urls) {
  const asideContainer = document.querySelector('.w-aside-container');

  asideContainer.appendChild(createElement({
    tagName: 'div',
    className: 'w-tab-content in',
    attributes: {
      'data-tab': 'wTabStructures'
    },
    childs: [
      (structures.length > 1) ? createSelectorContents(urls) : '',
      {
        tagName: 'div',
        className: 'w-structures-container',
        childs: structures.map((structure, i) => {
          return createElement({
            tagName: 'div',
            className: 'w-list-snippets w-list-structures' + ((i !== 0) ? ' w-hide' : ''),
            html: structure,
            attributes: {
              'data-index': i
            }
          })
        })
      }
    ]
  }));

  asideContainer.querySelector('.w-tabs').appendChild(createElement({
    tagName: 'a',
    className:'w-tab-link active',
    attributes: {
      id: 'wTabStructures'
    },
    on: {
      click: clickTabAside
    },
    text: 'Structures'
  }));
}
