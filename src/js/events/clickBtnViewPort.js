export default function clickBtnViewPort(elem, width) {
  const contentsContainers = [].slice.call(document.querySelectorAll('.w-contents-container'));
  const widthInt = width && width.replace('px', '');

  elem.addEventListener('click', function() {
    window.open(document.location.href, 'viewRender', 'height=200, width=' + widthInt + ', top=100, left=' + widthInt + ', toolbar=no, menubar=yes, location=no, resizable=yes, scrollbars=no, status=no');
    contentsContainers.forEach(elem => elem.style.width = width || '100%');
  });
}
