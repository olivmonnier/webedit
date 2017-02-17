import getContents from './utils/getContents';
import slice from './utils/slice';

export default function(containerId, options = {}) {
  const documentParent = window.opener.document;
  const containersParent = slice(documentParent.querySelectorAll(containerId));
  const containers = slice(document.querySelectorAll(containerId));

  containersParent.forEach((containerParent, i) => {
    const contents = getContents(containerParent.querySelector('.w-contents'), false);

    containers[i].innerHTML = contents;
  });
}
