import slice from '../utils/slice';
import getClosest from '../utils/getClosest';

export default function(e) {
  e.stopPropagation();
  const parent = getClosest(e.target, '.w-content-container');
  const elemsFocus = slice(document.querySelectorAll('.w-focus'));

  elemsFocus.forEach(elemFocus => {
    elemFocus.classList.remove('w-focus');
  });
  parent.classList.add('w-focus');
  document.body.classList.add('w-content-focused');
}
