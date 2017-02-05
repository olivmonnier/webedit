import initEdit from './initEdit';
import initRender from './initRender';

if (window) {
  if (window.opener) {
    initRender(window.opener.document);
  } else {
    window.WebEdit = initEdit;
  }
}
