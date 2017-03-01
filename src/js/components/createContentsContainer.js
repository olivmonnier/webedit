import clickBtnEditContents from '../events/clickBtnEditContents';
import clickBtnDeleteContents from '../events/clickBtnDeleteContents';
import createElement from '../utils/createElement';

export default function createContentsContainer(container, editor) {
  container.appendChild(createElement({
    tagName: 'div',
    className: 'w-contents-bar',
    childs: [
      {
        tagName: 'button',
        className: 'w-btn-move fa fa-arrows'
      },
      {
        tagName:'button',
        className: 'w-btn-edit fa fa-code',
        on: {
          click: clickBtnEditContents(editor)
        }
      },
      {
        tagName: 'button',
        className: 'w-btn-delete fa fa-trash',
        on: {
          click: clickBtnDeleteContents
        }
      }
    ]
  }));
}
