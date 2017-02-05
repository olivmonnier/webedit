function popupSettings(width) {
  return 'height=400, width=' + width + ', top=100, left=' + width / 2 + ', toolbar=no, menubar=no, location=no, resizable=no, scrollbars=yes, status=no';
}

export default function clickBtnViewPort(elem, width) {
  const widthInt = width && width.replace('px', '');

  elem.addEventListener('click', function() {
    const pop = window.open(document.location.href, 'viewRender', popupSettings(widthInt));
  });
}
