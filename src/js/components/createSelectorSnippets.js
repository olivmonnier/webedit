import changeSnippetsList from '../events/changeSnippetsList';
import createElement from '../utils/createElement';

export default function createSelectorSnippets(urls) {
  return createElement({
    tagName: 'select',
    on: {
      change: changeSnippetsList
    },
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
}
