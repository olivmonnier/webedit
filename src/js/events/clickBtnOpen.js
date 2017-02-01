module.exports = function(elem, container) {
  elem.addEventListener('click', function(e) {
    const btnOpenClass = elem.classList;

    btnOpenClass.toggle('in');
    container.classList.toggle('in');

    if (btnOpenClass.contains('in')) {
      btnOpenClass.remove('fa-angle-left');
      btnOpenClass.add('fa-angle-right');
    } else {
      btnOpenClass.remove('fa-angle-right');
      btnOpenClass.add('fa-angle-left');
    }
  });
}
