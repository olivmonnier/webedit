import createButton from './createButton';
import clickBtnExport from '../events/clickBtnExport';

export default function createContentsContainer(container) {
  const bar = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

  container.classList.add('w-contents-container');
  bar.classList.add('w-contents-bar');
  clickBtnExport(btnExport, container);
  bar.appendChild(btnExport);
  container.appendChild(bar);
}
