export default function() {
  const btnOpenClass = this.classList;
  const container = this.parentNode;

  btnOpenClass.toggle('in');
  container.classList.toggle('in');

  if (btnOpenClass.contains('in')) {
    btnOpenClass.remove('fa-angle-left');
    btnOpenClass.add('fa-angle-right');
  } else {
    btnOpenClass.remove('fa-angle-right');
    btnOpenClass.add('fa-angle-left');
  }
}
