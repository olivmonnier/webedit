const MediumEditor = require('medium-editor');
const dragula = require('dragula');
import createEditContainer from './components/createEditContainer';

export default function dragNdrop(primaryContainer, editorOptions) {
  let elems = [].slice.call(document.querySelectorAll('.w-list-snippets'));

  elems.push(primaryContainer);

  dragula(elems, {
    copy: function (el, source) {
      return source.classList.contains('w-list-snippets')
    },
    accepts: function (el, target) {
      return !target.classList.contains('w-list-snippets')
    },
    moves: function (e, container, handle) {
      if (container.classList.contains('w-contents-container')) {
        return handle.classList.contains('w-btn-move');
      }
      return container.classList.contains('w-list-snippets')
    }
  }).on('drag', function(el, container) {
    if (!container.classList.contains('w-contents-container')) {
      primaryContainer.classList.add('w-hover');
    }
  }).on('drop', function (el, container) {
    primaryContainer.classList.remove('w-hover');

    if (el.querySelectorAll('.w-actions').length > 0) return;

    if (container && container.classList.contains('w-contents-container')) {
      const parent = el.parentNode;
      const newEl = el.cloneNode(true);
      const content = newEl.querySelectorAll('.w-snippet')[0];

      if (content) {
        content.className += ' editable';
        parent.replaceChild(createEditContainer(content, editorOptions), el);
        new MediumEditor(content, editorOptions);
      }
    }
  });
}
