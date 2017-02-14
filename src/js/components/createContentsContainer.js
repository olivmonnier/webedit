import createButton from './createButton';
import clickBtnEditContents from '../events/clickBtnEditContents';

export default function createContentsContainer(container) {
  const bar = document.createElement('div');
  const btnEditContents = createButton('', 'w-btn-edit fa fa-code');

  container.classList.add('w-contents-container');
  bar.classList.add('w-contents-bar');
  clickBtnEditContents(btnEditContents, container);
  bar.appendChild(btnEditContents);
  container.appendChild(bar);
}
