import slice from '../utils/slice';

export default function clickTabAside (e) {
  const el = e.target;
  const elemsTab = slice(document.querySelectorAll('.w-tab-link.active'));
  const elemsContentTab = slice(document.querySelectorAll('.w-tab-content.in'));

  elemsTab.forEach(elem => elem.classList.remove('active'));
  elemsContentTab.forEach(elem => elem.classList.remove('in'));

  el.classList.add('active');
  document.querySelector('[data-tab="' + el.id + '"]').classList.add('in');
}
