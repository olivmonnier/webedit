import getContents from './utils/getContents';

export default function(containerId, options = {}) {
  const documentParent = window.opener.document;
  const containersParent = [].slice.call(documentParent.querySelectorAll(containerId));
  const containers = [].slice.call(document.querySelectorAll(containerId));

  containersParent.forEach((containerParent, i) => {
    const contents = getContents(containerParent, false);

    containers[i].innerHTML = contents;
  });
}
