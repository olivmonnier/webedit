function popupSettings(width, height = '700') {
  return 'height=' + height + ', width=' + width + ', top=100, left=' + width / 2 + ', toolbar=no, menubar=no, location=no, resizable=no, scrollbars=yes, status=no';
}

export default function clickBtnViewPort(elem, settings) {
  const { width, height } = settings;

  elem.addEventListener('click', function() {
    const pop = window.open(document.location.href, 'viewRender', popupSettings(width, height));
  });
}
