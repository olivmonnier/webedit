import createButton from './createButton';
import clickBtnExport from '../events/clickBtnExport';
import clickBtnViewPort from '../events/clickBtnViewPort';

export default function createBarActions(primaryContainer, viewports = []) {
  const container = document.createElement('div');
  const btnExport = createButton('', 'w-btn-export fa fa-code');

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

  clickBtnExport(btnExport, primaryContainer);

  container.className = 'w-bar-container';
  container.appendChild(btnExport);
  document.body.appendChild(container);
}
