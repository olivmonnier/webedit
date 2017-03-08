import clickBtnViewPort from '../events/clickBtnViewPort';
import clickBtnDropdown from '../events/clickBtnDropdown';
import blurBtnDropdown from '../events/blurBtnDropdown';
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
      const settings = {
        width: viewport.width.replace('px', '') || '',
        height: viewport.height.replace('px', '') || ''
      }
      return createElement({
        tagName: 'li',
        childs: [
          {
            tagName: 'button',
            html: viewport.label,
            className: 'w-btn-viewport',
            on: {
              click: clickBtnViewPort(settings)
            }
          }
        ]
      })
    });

    return createElementLabelBarAction('Viewports <i class="fa fa-angle-down"></i>', elViewports);
  }
}

function createListActions(actions, container) {
  if (actions.length > 0) {
    const elActions = actions.map(action => {
      return createElement({
        tagName: 'li',
        childs: [
          {
            tagName: 'button',
            className: 'w-btn-action ' + (action.class || ''),
            html: action.label,
            attributes: {
              id: action.id || ''
            },
            on: {
              click: action.fn
            }
          }
        ]
      })
    });

    return createElementLabelBarAction('Actions <i class="fa fa-angle-down"></i>', elActions);
  }
}

function createElementLabelBarAction(label, nodes) {
  return createElement({
    tagName: 'li',
    childs: [
      {
        tagName: 'button',
        className: 'w-btn-dropdown',
        html: label,
        on: {
          click: clickBtnDropdown,
          blur: blurBtnDropdown
        }
      },
      {
        tagName: 'ul',
        childs: nodes
      }
    ]
  });
}
