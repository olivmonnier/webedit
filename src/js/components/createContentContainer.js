import createContentActions from './createContentActions';
import clickContent from '../events/clickContent';

export default function createContentContainer(content, editor) {
  const container = document.createElement('div');
  const contentActions = createContentActions(editor);

  clickContent(container);

  container.className = 'w-content-container';
  container.appendChild(contentActions);
  container.appendChild(content);

  return container;
}
