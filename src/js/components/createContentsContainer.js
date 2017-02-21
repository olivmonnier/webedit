import createButton from './createButton';
import clickBtnEditContents from '../events/clickBtnEditContents';
import createElement from '../utils/createElement';

export default function createContentsContainer(container, editor) {
  const btnEditContents = createButton('', 'w-btn-edit fa fa-code');
  const bar = createElement({
    tagName: 'div',
    className: 'w-contents-bar',
    childs: [
      btnEditContents
    ]
  });
  const contentsContainer = createElement({
    tagName: 'div',
    className: 'w-contents'
  });

  clickBtnEditContents(btnEditContents, contentsContainer, editor);

  container.classList.add('w-contents-container');
  container.appendChild(bar);
  container.appendChild(contentsContainer);
}
