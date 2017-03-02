import slice from '../utils/slice';

export default function changeSnippetsList(e) {
  const el = e.target;
  const index = this.value;
  const lists = slice(el.parentNode.querySelectorAll('.w-list-snippets'));

  lists.forEach(list => {
    if (list.getAttribute('data-index') == index) {
      list.classList.remove('w-hide');
    } else {
      list.classList.add('w-hide');
    }
  })
}
