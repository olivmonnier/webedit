import createButton from './createButton';
import createSelectorSnippets from './createSelectorSnippets';
import clickBtnOpen from '../events/clickBtnOpen';

export default function createSnippetContainer(snippets, urls) {
  const primaryContainer = document.createElement('div');
  const container = document.createElement('div');
  const btnOpen = createButton('', 'w-btn-open fa fa-angle-left');

  clickBtnOpen(btnOpen, primaryContainer);

  snippets.forEach((snippet, i) => {
    const list = document.createElement('div');

    list.className = 'w-list-snippets';
    if (i !== 0) list.className += ' w-hide';
    list.setAttribute('data-index', i);
    list.innerHTML = snippet;
    container.appendChild(list);
  });

  if (snippets.length > 1) {
    createSelectorSnippets(urls, primaryContainer);
  }

  primaryContainer.className = 'w-aside-container';
  container.className = 'w-snippets-container';
  primaryContainer.appendChild(btnOpen);
  primaryContainer.appendChild(container);
  document.body.appendChild(primaryContainer);
}
