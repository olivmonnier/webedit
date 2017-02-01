module.exports = function(elem) {
  elem.addEventListener('click', function() {
    document.querySelectorAll('.w-focus').forEach(elFocus => {
      elFocus.classList.remove('w-focus');
    });
  });
}
