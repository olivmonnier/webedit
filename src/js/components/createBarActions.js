const createButton = require('./createButton');
const getClosest = require('../utils/getClosest');

module.exports = function createBarActions() {
  const barActions = document.createElement('div');
  const btnMove = createButton('move', 'btn-move');
  const btnDelete = createButton('delete', 'btn-delete');

  btnDelete.addEventListener('click', function(e) {
    const parent = getClosest(btnDelete, '.container');

    parent.remove();
  });

  barActions.className = 'actions';
  barActions.appendChild(btnMove);
  barActions.appendChild(btnDelete);

  return barActions;
}
