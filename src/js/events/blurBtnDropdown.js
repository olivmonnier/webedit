export default function(e) {
  setTimeout(() => {
    e.target.parentNode.classList.remove('w-btn-focus');
  }, 300)
}
