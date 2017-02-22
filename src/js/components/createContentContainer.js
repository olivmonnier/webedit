import createContentActions from './createContentActions';
import clickContent from '../events/clickContent';
import createElement from '../utils/createElement';

export default function createContentContainer(content, editor) {
  return createElement({
    tagName: 'div',
    className: 'w-content-container',
    on: {
      click: clickContent
    },
    childs: [
      createContentActions(editor),
      content
    ]
  });
}
