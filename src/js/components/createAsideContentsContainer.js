import createSelectorContents from './createSelectorContents';
import createElement from '../utils/createElement';

export default function createAsideContentsContainer(contents, urls) {
  const asideContainer = document.querySelector('.w-aside-container');

  asideContainer.appendChild(createElement({
    tagName: 'div',
    className: 'w-tab-content',
    childs: [
      (contents.length > 1) ? createSelectorContents(urls) : '',
      {
        tagName: 'div',
        className: 'w-contents-container',
        childs: contents.map((content, i) => {
          return createElement({
            tagName: 'div',
            className: 'w-list-contents' + ((i !== 0) ? ' w-hide' : ''),
            html: content,
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
      id: 'wTabContents'
    },
    text: 'Contents'
  }))
}
