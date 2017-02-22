import clickBtnDelete from '../events/clickBtnDelete';
import clickBtnDuplicate from '../events/clickBtnDuplicate';
import createElement from '../utils/createElement';

export default function createContentActions(editor) {
  return createElement({
    tagName: 'div',
    className: 'w-actions',
    childs: [
      {
        tagName: 'button',
        className: 'w-btn-move fa fa-arrows'
      },
      {
        tagName: 'button',
        className: 'w-btn-delete fa fa-trash',
        on: {
          click: clickBtnDelete
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
  })
}
