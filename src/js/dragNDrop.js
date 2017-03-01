import createContentContainer from './components/createContentContainer';
import createContentsContainer from './components/createContentsContainer';
import slice from './utils/slice';

export default function dragNdrop(primaryContainers, editor) {
  let dragContents = null; let dragStructures = null;
  let listStructures = slice(document.querySelectorAll('.w-list-structures'));
  let listContents = slice(document.querySelectorAll('.w-list-contents'));

  listStructures = listStructures.concat(primaryContainers);
  listContents = listContents.concat(slice(document.querySelectorAll('.w-contents')));

  dragContents = dragula(listContents, {
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
    const contentsContainer = slice(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(elem => elem.classList.add('w-hover'));
  }).on('drop', function (el, container) {
    const contentsContainer = slice(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(elem => elem.classList.remove('w-hover'));

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
    const contentsContainer = slice(document.querySelectorAll('.w-contents'));

    contentsContainer.forEach(elem => elem.classList.remove('w-hover'));
  });

  dragStructures = dragula(listStructures, {
    copy: function (el, source) {
      return source.classList.contains('w-list-structures')
    },
    accepts: function (el, target) {
      return !target.classList.contains('w-list-structures')
    },
    moves: function (e, container, handle) {
      return container.classList.contains('w-list-structures')
    }
  }).on('drag', function(el, container) {
    primaryContainers.forEach(elem => elem.classList.add('w-hover'));
  }).on('drop', function(el, container) {
    primaryContainers.forEach(elem => elem.classList.remove('w-hover'));

    if (container) {
      const parent = el.parentNode;
      const newEl = el.cloneNode(true);
      const structure = newEl.querySelector('.w-structure');

      if (structure) {
        const contents = slice(structure.querySelectorAll('.w-contents'));

        parent.replaceChild(structure, el);
        createContentsContainer(structure, editor);
        contents.forEach(content => dragContents.containers.push(content));
      }
    }
  }).on('cancel', function(el, container) {
    primaryContainers.forEach(elem => elem.classList.remove('w-hover'));
  });

  return {
    dragContents,
    dragStructures
  }
}
