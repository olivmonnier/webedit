import changeListContents from '../events/changeListContents';
import createElement from '../utils/createElement';

export default function createSelectorContentss(urls) {
  return createElement({
    tagName: 'select',
    on: {
      change: changeListContents
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
