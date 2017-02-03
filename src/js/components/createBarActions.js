import createButton from './createButton';
import clickBtnExport from '../events/clickBtnExport';
import clickBtnViewPort from '../events/clickBtnViewPort';

export default function createBarActions(primaryContainer, viewports = []) {
  const container = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

  if (viewports.length > 0) {
    const btnViewPortAuto = createButton('Auto', 'w-btn-viewport');

    clickBtnViewPort(btnViewPortAuto);
    container.appendChild(btnViewPortAuto);

    viewports.forEach(viewport => {
      const btnViewPort = createButton(viewport, 'w-btn-viewport');

      clickBtnViewPort(btnViewPort, viewport);
      container.appendChild(btnViewPort);
    });
  }

  clickBtnExport(btnExport, primaryContainer);

  container.className = 'w-bar-container';
  container.appendChild(btnExport);
  document.body.appendChild(container);
}
