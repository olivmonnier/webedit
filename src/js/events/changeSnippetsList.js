import slice from '../utils/slice';

export default function changeSnippetsList() {
  const index = this.value;
  const lists = slice(document.querySelectorAll('.w-list-snippets'));

  lists.forEach(list => {
    if (list.getAttribute('data-index') == index) {
      list.classList.remove('w-hide');
    } else {
      list.classList.add('w-hide');
    }
  })
}
