import createButton from './createButton';
import clickBtnViewPort from '../events/clickBtnViewPort';

export default function createBarActions(viewports = [], buttons = []) {
  const container = document.createElement('div');
  container.className = 'w-bar-container';

  viewports.forEach(viewport => {
    const widthInt = viewport.width.replace('px', '') || '';
    const heightInt = viewport.height.replace('px', '') || '';
    const label = viewport.label || widthInt + 'x' + heightInt;
    const btnViewPort = createButton(label, 'w-btn-viewport');
    const settings = {
      width: widthInt,
      height: heightInt
    }

    clickBtnViewPort(btnViewPort, settings);
    container.appendChild(btnViewPort);
  });

  buttons.forEach(button => {
    const btn = createButton(button.label, 'w-btn ' + (button.class || ''), button.id);

    btn.addEventListener('click', button.fn);
    container.appendChild(btn);
  });

  document.body.appendChild(container);
}
