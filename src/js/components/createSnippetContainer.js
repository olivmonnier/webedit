import createButton from './createButton';
import clickBtnOpen from '../events/clickBtnOpen';

export default function createSnippetContainer(snippets) {
  const primaryContainer = document.createElement('div');
  const container = document.createElement('div');
  const btnOpen = createButton('', 'w-btn-open fa fa-angle-left');

  clickBtnOpen(btnOpen, primaryContainer);

  primaryContainer.className = 'w-aside-container';
  container.id = 'snippetsContainer';
  container.innerHTML = snippets;
  primaryContainer.appendChild(btnOpen);
  primaryContainer.appendChild(container)
  document.body.appendChild(primaryContainer);
}
