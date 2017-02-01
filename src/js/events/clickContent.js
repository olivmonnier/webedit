module.exports = function(elem) {
  elem.addEventListener('click', function(e) {
    e.stopPropagation();

    document.querySelectorAll('.w-focus').forEach(elFocus => {
      elFocus.classList.remove('w-focus');
    });
    elem.classList.add('w-focus');
  });
}
