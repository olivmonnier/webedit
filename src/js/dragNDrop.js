const MediumEditor = require('medium-editor');
const dragula = require('dragula');
const createEditContainer = require('./components/createEditContainer');

module.exports = function dragNdrop(primaryContainer, editorOptions) {
  dragula([primaryContainer, document.getElementById('snippetsContainer')], {
    copy: function (el, source) {
      return source === document.getElementById('snippetsContainer')
    },
    accepts: function (el, target) {
      return target !== document.getElementById('snippetsContainer')
    },
    moves: function (e, container, handle) {
      if (container.id == primaryContainer.id) {
        return handle.classList.contains('w-btn-move');
      }
      return container.id == 'snippetsContainer';
    }
  }).on('drag', function(el, container) {
    if (container.id !== primaryContainer.id) {
      primaryContainer.classList.add('w-hover');
    }
  }).on('drop', function (el, container) {
    primaryContainer.classList.remove('w-hover');

    if (el.querySelectorAll('.w-actions').length > 0) return;

    if (container && container.id == primaryContainer.id ) {
      const parent = el.parentNode;
      const newEl = el.cloneNode(true);
      const content = newEl.querySelectorAll('.w-snippet')[0];

      if (content) {
        content.className += ' editable';
        parent.replaceChild(createEditContainer(content), el);
        new MediumEditor(content, editorOptions);
      }
    }
  });
}
