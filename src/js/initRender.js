import getContents from './utils/getContents';

export default function(documentParent) {
  const container = documentParent.querySelectorAll('.w-contents-container')[0];
  const contents = getContents(container, false);

  window.document.getElementById(container.id).innerHTML = contents;
}
