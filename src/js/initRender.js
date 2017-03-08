import getContents from './utils/getContents';

export default function(containerId, options = {}) {
  const documentParent = window.opener.document;
  const containerParent = documentParent.querySelector(containerId);
  const container = document.querySelector(containerId);
  const contents = getContents(containerParent, false);

  container.innerHTML = contents;
}
