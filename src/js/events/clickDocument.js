import slice from '../utils/slice';

export default function(elem) {
  elem.addEventListener('click', function() {
    const elemsFocus = slice(document.querySelectorAll('.w-focus'));

    elemsFocus.forEach(elemFocus => {
      elemFocus.classList.remove('w-focus');
    });
  });
}
