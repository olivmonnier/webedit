import createButton from './createButton';
import clickBtnDelete from '../events/clickBtnDelete';
import clickBtnDuplicate from '../events/clickBtnDuplicate';

export default function createContentActions(editor) {
  const barActions = document.createElement('div');
  const btnMove = createButton('', 'w-btn-move fa fa-arrows');
  const btnDelete = createButton('', 'w-btn-delete fa fa-trash');
  const btnDuplicate = createButton('', 'w-btn-duplicate fa fa-plus');

  clickBtnDelete(btnDelete);
  clickBtnDuplicate(btnDuplicate, editor);

  barActions.className = 'w-actions';
  barActions.appendChild(btnMove);
  barActions.appendChild(btnDelete);
  barActions.appendChild(btnDuplicate);

  return barActions;
}
