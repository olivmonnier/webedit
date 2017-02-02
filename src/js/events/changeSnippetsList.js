export default function changeSnippetsList(elem) {
  elem.addEventListener('change', function() {
    const index = this.value;
    const lists = [].slice.call(document.querySelectorAll('.w-list-snippets'));

    lists.forEach(list => {
      if (list.getAttribute('data-index') == index) {
        list.classList.remove('w-hide');
      } else {
        list.classList.add('w-hide');
      }
    })
  });
}
