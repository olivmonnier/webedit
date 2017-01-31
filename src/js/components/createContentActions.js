const basicModal = require('basicmodal');
const MediumEditor = require('medium-editor');
const createButton = require('./createButton');
const getClosest = require('../utils/getClosest');
const insertAfter = require('../utils/insertAfter');

function createContentActions(editorOptions) {
  const barActions = document.createElement('div');
  const btnMove = createButton('', 'w-btn-move fa fa-arrows');
  const btnDelete = createButton('', 'w-btn-delete fa fa-trash');
  const btnDuplicate = createButton('', 'w-btn-duplicate fa fa-plus');

  initEventBtnDelete(btnDelete);
  initEventBtnDuplicate(btnDuplicate, editorOptions);

  barActions.className = 'w-actions';
  barActions.appendChild(btnMove);
  barActions.appendChild(btnDelete);
  barActions.appendChild(btnDuplicate);

  return barActions;
}

function initEventBtnDelete(elem) {
  elem.addEventListener('click', function(e) {
    const parent = getClosest(elem, '.w-content-container');

    basicModal.show({
      body: '<p><strong>Are you sure ?</strong></p>',
      buttons: {
        cancel: {
          title: 'Cancel',
          fn: basicModal.close
        },
        action: {
          title: 'Continue',
          fn: () => {
            parent.remove();
            basicModal.close();
          }
        }
      }
    })
  });
}

function initEventBtnDuplicate(elem, editorOptions) {
  elem.addEventListener('click', function(e) {
    const parent = getClosest(elem, '.w-content-container');
    const content = parent.querySelectorAll('.w-snippet')[0];
    const html = content.innerHTML;
    const newParent = parent.cloneNode(true);
    const newContent = newParent.querySelectorAll('.w-snippet')[0];
    const newBarAction = newParent.querySelectorAll('.w-actions')[0];
    const divSnippet = document.createElement('div');
    const divActions = createContentActions(editorOptions);

    newBarAction.remove();
    newContent.remove();
    divSnippet.className = 'w-snippet editable';
    divSnippet.innerHTML = html;
    newParent.appendChild(divActions);
    newParent.appendChild(divSnippet);

    insertAfter(newParent, parent);
    new MediumEditor(divSnippet, editorOptions);
  });
}

module.exports = createContentActions;
