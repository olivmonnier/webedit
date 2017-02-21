import createContentActions from './createContentActions';
import clickContent from '../events/clickContent';
import createElement from '../utils/createElement';

export default function createContentContainer(content, editor) {
  const container = createElement({
    tagName: 'div',
    className: 'w-content-container',
    childs: [
      createContentActions(editor),
      content
    ]
  });

  clickContent(container);

  return container;
}
