import createContentContainer from './components/createContentContainer';
import slice from './utils/slice';

export default function dragNdrop(primaryContainers, editor) {
  let elems = slice(document.querySelectorAll('.w-list-contents'));

  elems = elems.concat(slice(document.querySelectorAll('.w-contents')));

  dragula(elems, {
    copy: function (el, source) {
      return source.classList.contains('w-list-contents')
    },
    accepts: function (el, target) {
      return !target.classList.contains('w-list-contents')
    },
    moves: function (e, container, handle) {
      if (container.classList.contains('w-contents')) {
        return handle.classList.contains('w-btn-move');
      }
      return container.classList.contains('w-list-contents')
    }
  }).on('drag', function(el, container) {
    primaryContainers.forEach(elem => elem.classList.add('w-hover'));
  }).on('drop', function (el, container) {
    primaryContainers.forEach(elem => elem.classList.remove('w-hover'));

    if (el.querySelectorAll('.w-actions').length > 0) return;

    if (container && container.classList.contains('w-contents')) {
      const parent = el.parentNode;
      const newEl = el.cloneNode(true);
      const content = newEl.querySelector('.w-content');

      if (content) {
        content.className += ' editable';
        parent.replaceChild(createContentContainer(content, editor), el);
        editor.destroy();
        editor.setup();
      }
    }
  }).on('cancel', function(el, container) {
    primaryContainers.forEach(elem => elem.classList.remove('w-hover'));
  });
}
