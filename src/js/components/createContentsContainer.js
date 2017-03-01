import clickBtnEditContents from '../events/clickBtnEditContents';
import createElement from '../utils/createElement';

export default function createContentsContainer(container, editor) {
  container.appendChild(createElement({
    tagName: 'div',
    className: 'w-contents-bar',
    childs: [
      {
        tagName:'button',
        className: 'w-btn-edit fa fa-code',
        on: {
          click: clickBtnEditContents(editor)
        }
      }
    ]
  }));
}
