import clickBtnDeleteContents from '../events/clickBtnDeleteContents';
import clickBtnDuplicate from '../events/clickBtnDuplicate';
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
        tagName: 'button',
        className: 'w-btn-delete fa fa-trash',
        on: {
          click: clickBtnDeleteContents
        }
      },
      {
        tagName: 'button',
        className: 'w-btn-duplicate fa fa-plus',
        on: {
          click: clickBtnDuplicate(editor)
        }
      }
    ]
  }));
}
