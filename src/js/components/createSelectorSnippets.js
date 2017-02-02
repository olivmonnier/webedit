import changeSnippetsList from '../events/changeSnippetsList';

export default function createSelectorSnippets(urls, container) {
  const select = document.createElement('select');

  urls.forEach((url, n) => {
    const option = document.createElement('option');

    option.setAttribute('value', n);
    option.textContent = url.label || 'List ' + n;
    select.appendChild(option);
  });

  changeSnippetsList(select);

  container.appendChild(select);
}
