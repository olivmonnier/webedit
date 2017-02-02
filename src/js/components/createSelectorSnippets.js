export default function createSelectorSnippets(nbList, container) {
  const select = document.createElement('select');

  for(let n = 0; n < nbList; n++) {
    const option = document.createElement('option');

    option.setAttribute('value', n);
    option.textContent = n;
    select.appendChild(option);
  }

  container.appendChild(select);
}
