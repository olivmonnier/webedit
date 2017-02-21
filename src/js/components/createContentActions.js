import createButton from './createButton';
import clickBtnDelete from '../events/clickBtnDelete';
import clickBtnDuplicate from '../events/clickBtnDuplicate';
import createElement from '../utils/createElement';

export default function createContentActions(editor) {
  const btnMove = createButton('', 'w-btn-move fa fa-arrows');
  const btnDelete = createButton('', 'w-btn-delete fa fa-trash');
  const btnDuplicate = createButton('', 'w-btn-duplicate fa fa-plus');

  clickBtnDelete(btnDelete);
  clickBtnDuplicate(btnDuplicate, editor);

  return createElement({
    tagName: 'div',
    className: 'w-actions',
    childs: [
      btnMove,
      btnDelete,
      btnDuplicate
    ]
  })
}
