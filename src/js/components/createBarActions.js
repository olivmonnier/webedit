import createButton from './createButton';
import clickBtnViewPort from '../events/clickBtnViewPort';
import clickBtnDropdown from '../events/clickBtnDropdown';

export default function createBarActions(viewports = [], actions = []) {
  const container = document.createElement('div');
  const ul = document.createElement('ul');

  container.className = 'w-bar-container';

  createListViewports(viewports, ul);
  createListActions(actions, ul);

  container.appendChild(ul);
  document.body.appendChild(container);
}

function createListViewports(viewports, container) {
  if (viewports.length > 0) {
    const elementContainerBarAction = createElementLabelBarAction(container, 'Viewports');

    viewports.forEach(viewport => {
      const li = document.createElement('li');
      const widthInt = viewport.width.replace('px', '') || '';
      const heightInt = viewport.height.replace('px', '') || '';
      const label = viewport.label || widthInt + 'x' + heightInt;
      const btnViewPort = createButton(label, 'w-btn-viewport');
      const settings = {
        width: widthInt,
        height: heightInt
      }

      clickBtnViewPort(btnViewPort, settings);
      li.appendChild(btnViewPort);
      elementContainerBarAction.appendChild(li);
    });
  }
}

function createListActions(actions, container) {
  if (actions.length > 0) {
    const elementContainerBarAction = createElementLabelBarAction(container, 'Actions');

    actions.forEach(action => {
      const li = document.createElement('li');
      const btn = createButton(action.label, 'w-btn ' + (action.class || ''), action.id);

      btn.addEventListener('click', action.fn);
      li.appendChild(btn);
      elementContainerBarAction.appendChild(li);
    });
  }
}

function createElementLabelBarAction(container, label) {
  const li = document.createElement('li');
  const elementLabel = document.createElement('button');
  const elementContainer = document.createElement('ul');

  elementLabel.classList.add('w-btn-dropdown');
  elementLabel.innerHTML = label;

  clickBtnDropdown(elementLabel);

  li.appendChild(elementLabel)
  li.appendChild(elementContainer);
  container.appendChild(li);

  return elementContainer;
}
