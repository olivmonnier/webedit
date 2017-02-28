const editorOptionsDefault = {
  buttonLabels: 'fontawesome',
  toolbar: {
    buttons: ['bold', 'italic', 'underline', 'strikethrough', 'fontsize', 'fontname', 'anchor', 'image', 'quote', 'justifyLeft', 'justifyRight', 'justifyCenter', 'h1', 'h2', 'h3', 'h4', 'orderedlist', 'unorderedlist', 'indent', 'outdent', 'removeFormat']
  }
}

export default function(options) {
  return new MediumEditor('.w-snippet.editable', options || editorOptionsDefault)
}
