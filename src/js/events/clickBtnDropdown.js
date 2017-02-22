import slice from '../utils/slice';

export default function(e) {
  e.preventDefault();
  const parent = e.target.parentNode;
  const isFocused = parent.classList.contains('w-btn-focus');
  const btnFocus = slice(document.querySelectorAll('.w-btn-focus'));

  btnFocus.forEach(btn => btn.classList.remove('w-btn-focus'));
  parent.classList[isFocused ? 'remove' : 'add']('w-btn-focus');
}
