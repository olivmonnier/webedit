import createContentContainer from '../components/createContentContainer';
import createElement from '../utils/createElement';

export default function(container, editorHtml, editor) {
  return function () {
    const editorContent = editorHtml.getValue();
    
    container.innerHTML = editorContent;
  }
}
