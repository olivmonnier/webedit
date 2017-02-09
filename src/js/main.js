import initEdit from './initEdit';
import initRender from './initRender';

if (window) {
  window.WebEdit = (window.opener) ? initRender : initEdit;
}
