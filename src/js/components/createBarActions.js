import createButton from './createButton';
import clickBtnViewPort from '../events/clickBtnViewPort';
import clickBtnDropdown from '../events/clickBtnDropdown';
import createElement from '../utils/createElement';

export default function createBarActions(viewports = [], actions = []) {
  document.body.appendChild(createElement({
    tagName: 'div',
    className: 'w-bar-container',
    childs: [{
      tagName: 'ul',
      childs: [
        createListViewports(viewports),
        createListActions(actions)
      ]
    }]
  }))
}

function createListViewports(viewports) {
  if (viewports.length > 0) {
    const elViewports = viewports.map(viewport => {
      const btnViewPort = createButton(viewport.label, 'w-btn-viewport');
      const settings = {
        width: viewport.width.replace('px', '') || '',
        height: viewport.height.replace('px', '') || ''
      }
      clickBtnViewPort(btnViewPort, settings);
      return createElement({
        tagName: 'li',
        childs: [
          btnViewPort
        ]
      })
    });

    return createElementLabelBarAction('Viewports', elViewports);
  }
}

function createListActions(actions, container) {
  if (actions.length > 0) {
    const elActions = actions.map(action => {
      const btn = createButton(action.label, 'w-btn ' + (action.class || ''), action.id);

      btn.addEventListener('click', action.fn);
      return createElement({
        tagName: 'li',
        childs: [
          btn
        ]
      })
    });

    return createElementLabelBarAction('Actions', elActions);
  }
}

function createElementLabelBarAction(label, nodes) {
  const elementLabel = createElement({
    tagName: 'button',
    className: 'w-btn-dropdown',
    html: label
  });

  clickBtnDropdown(elementLabel);

  return createElement({
    tagName: 'li',
    childs: [
      elementLabel,
      {
        tagName: 'ul',
        childs: nodes
      }
    ]
  });
}
