export default function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();

    elem.classList.toggle('w-btn-focus');
  });
}
