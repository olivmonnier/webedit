const createButton = require('./createButton');

module.exports = function createSnippetContainer(snippets) {
  const primaryContainer = document.createElement('div');
  const container = document.createElement('div');
  const btnOpen = createButton('', 'w-btn-open fa fa-angle-left');

  btnOpen.addEventListener('click', function(e) {
    const btnOpenClass = btnOpen.classList;

    btnOpenClass.toggle('in');
    primaryContainer.classList.toggle('in');

    if (btnOpenClass.contains('in')) {
      btnOpenClass.remove('fa-angle-left');
      btnOpenClass.add('fa-angle-right');
    } else {
      btnOpenClass.remove('fa-angle-right');
      btnOpenClass.add('fa-angle-left');
    }
  });

  primaryContainer.className = 'w-aside-container';
  container.id = 'snippetsContainer';
  container.innerHTML = snippets;
  primaryContainer.appendChild(btnOpen);
  primaryContainer.appendChild(container)
  document.body.appendChild(primaryContainer);
}
