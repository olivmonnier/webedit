const MediumEditor = require('medium-editor');
const dragula = require('dragula');
const createEditContainer = require('./components/createEditContainer');

dragula([document.getElementById('left'), document.getElementById('right')], {
  copy: function (el, source) {
    return source === document.getElementById('right')
  },
  accepts: function (el, target) {
    return target !== document.getElementById('right')
  },
  moves: function (e, container, handle) {
    if (container.id == 'left') {
      return handle.classList.contains('btn-move');
    }
    return container.id == 'right';
  }
}).on('drop', function (el, container) {
  if (el.querySelectorAll('.actions').length > 0) return;

  if (container && container.id == 'left' ) {
    const parent = el.parentNode;
    const newEl = el.cloneNode(true);
    const content = newEl.querySelectorAll('.snippet')[0];

    if (content) {
      content.className += ' editable';
      parent.replaceChild(createEditContainer(content), el);
      new MediumEditor(content);
    }
  }
});
