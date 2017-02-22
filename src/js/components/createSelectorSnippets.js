import changeSnippetsList from '../events/changeSnippetsList';
import createElement from '../utils/createElement';

export default function createSelectorSnippets(urls) {
  const select = createElement({
    tagName: 'select',
    childs: urls.map((url, n) => {
      return createElement({
        tagName: 'option',
        attributes: {
          value: n
        },
        text: url.label || 'List ' + n
      })
    })
  });

  changeSnippetsList(select);

  return select;
}
