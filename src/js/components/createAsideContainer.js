import createElement from '../utils/createElement';
import clickBtnOpen from '../events/clickBtnOpen';

export default function createAsideContainer() {
  document.body.appendChild(createElement({
    tagName: 'div',
    className: 'w-aside-container',
    childs: [
      {
        tagName: 'button',
        className: 'w-btn-open fa fa-angle-left',
        on: {
          click: clickBtnOpen
        }
      },
      {
        tagName: 'div',
        className: 'w-tabs'
      }
    ]
  }));
}
