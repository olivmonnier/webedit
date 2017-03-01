import createElement from '../utils/createElement';

export default function createAsideStructuresContainer(structures, urls) {
  const asideContainer = document.querySelector('.w-aside-container');

  asideContainer.appendChild(createElement({
    tagName: 'div',
    className: 'w-tab-content',
    childs: [
      {
        tagName: 'div',
        className: 'w-structures-container',
        childs: structures.map((structure, i) => {
          return createElement({
            tagName: 'div',
            className: 'w-list-structures' + ((i !== 0) ? ' w-hide' : ''),
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
    className:'w-tab-link',
    attributes: {
      id: 'wTabStructures'
    },
    text: 'Structures'
  }));
}
