export default function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();

    elem.parentNode.classList.toggle('w-btn-focus');
  });
}
