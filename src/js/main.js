const MediumEditor = require('medium-editor');
const dragula = require('dragula');

dragula([document.getElementById('left'), document.getElementById('right')], {
  copy: function (el, source) {
    return source === document.getElementById('right')
  },
  accepts: function (el, target) {
    return target !== document.getElementById('right')
  }
}).on('drop', function (el, container) {
  if (container && container.id == 'left' ) {    
    const parent = el.parentNode;
    const newEl = el.cloneNode(true);
    const content = newEl.getElementsByTagName("p")[0];

    if (content) {
      content.className += 'editable';
      parent.replaceChild(content, el);
      new MediumEditor(content);
    }
  }
});
