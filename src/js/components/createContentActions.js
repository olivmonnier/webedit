const createButton = require('./createButton');
const getClosest = require('../utils/getClosest');

module.exports = function createContentActions() {
  const barActions = document.createElement('div');
  const btnMove = createButton('', 'w-btn-move fa fa-arrows');
  const btnDelete = createButton('', 'w-btn-delete fa fa-trash');

  btnDelete.addEventListener('click', function(e) {
    const parent = getClosest(btnDelete, '.w-content-container');

    parent.remove();
  });

  barActions.className = 'w-actions';
  barActions.appendChild(btnMove);
  barActions.appendChild(btnDelete);

  return barActions;
}
