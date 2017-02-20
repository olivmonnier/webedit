import slice from '../utils/slice';

export default function(elem) {
  elem.addEventListener('click', function(e) {
    e.preventDefault();
    const isFocused = elem.parentNode.classList.contains('w-btn-focus');
    const btnFocus = slice(document.querySelectorAll('.w-btn-focus'));

    btnFocus.forEach(btn => btn.classList.remove('w-btn-focus'));
    elem.parentNode.classList[isFocused ? 'remove' : 'add']('w-btn-focus');
  });

  elem.addEventListener('blur', function(e) {
    setTimeout(() => {
      elem.parentNode.classList.remove('w-btn-focus');
    }, 300)
  });
}
