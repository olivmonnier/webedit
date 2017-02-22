export default function createElement(options) {
  let el;
  const { tagName, className, attributes, on, html, text, childs } = options;

  if (!tagName) {
    el = document.createDocumentFragment()
  } else {
    el = document.createElement(tagName);

    if (className) {
      el.className = className
    }

    if (attributes) {
      for (let attr in attributes) {
        el.setAttribute(attr, attributes[attr])
      }
    }

    if (html !== undefined) {
      el.innerHTML = html
    }
  }

  if (on) {
    for (let e in on) {
      el.addEventListener(e, on[e])
    }
  }

  if (text) {
    el.appendChild(document.createTextNode(text))
  }

  if (window.HTMLElement === undefined) {
    window.HTMLElement = Element
  }

  if (childs && childs.length) {
    childs.forEach(child => el.appendChild(child instanceof window.HTMLElement ? child : createElement(child)))
  }

  return el;
}
