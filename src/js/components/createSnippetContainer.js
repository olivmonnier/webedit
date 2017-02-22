import createSelectorSnippets from './createSelectorSnippets';
import clickBtnOpen from '../events/clickBtnOpen';
import createElement from '../utils/createElement';

export default function createSnippetContainer(snippets, urls) {
  document.body.appendChild(createElement({
    tagName: 'div',
    className: 'w-aside-container',
    childs: [
      (snippets.length > 1) ? createSelectorSnippets(urls) : '',
      {
        tagName: 'button',
        className: 'w-btn-open fa fa-angle-left',
        on: {
          click: clickBtnOpen
        }
      },
      {
        tagName: 'div',
        className: 'w-snippets-container',
        childs: snippets.map((snippet, i) => {
          return createElement({
            tagName: 'div',
            className: 'w-list-snippets' + ((i !== 0) ? ' w-hide' : ''),
            html: snippet,
            attributes: {
              'data-index': i
            }
          })
        })
      }
    ]
  }));
}
