import slice from '../utils/slice';

export default function(e) {
  const elemsFocus = slice(document.querySelectorAll('.w-focus'));

  elemsFocus.forEach(elemFocus => {
    elemFocus.classList.remove('w-focus');
  });
  document.body.classList.remove('w-content-focused');
}
