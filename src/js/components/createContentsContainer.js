import clickBtnEditContents from '../events/clickBtnEditContents';
import createElement from '../utils/createElement';

export default function createContentsContainer(containers, editor) {
  containers.forEach(container => {
    container.classList.add('w-contents-container');
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
    container.appendChild(createElement({
      tagName: 'div',
      className: 'w-contents'
    }));
  });
}
