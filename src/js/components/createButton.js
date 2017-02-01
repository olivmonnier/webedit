export default function createButton(text, className, id) {
  const button = document.createElement('button');
  button.textContent = text;

  if (className) button.className = className;
  if (id) button.id = id;

  return button;
}
