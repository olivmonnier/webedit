import changeSnippetsList from '../events/changeSnippetsList';

export default function createSelectorSnippets(nbList, container) {
  const select = document.createElement('select');

  for(let n = 0; n < nbList; n++) {
    const option = document.createElement('option');

    option.setAttribute('value', n);
    option.textContent = 'List ' + n;
    select.appendChild(option);
  }

  changeSnippetsList(select);

  container.appendChild(select);
}
