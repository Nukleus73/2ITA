var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
  mode: "htmlmixed",
  theme: "ayu-mirage",
  lineNumbers: true,
  autofocus: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  lineWrapping: true,
});

// You can add more configuration options based on your requirements

// Example: Set initial code content
editor.setValue(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>

  </body>
</html>`);

// Example: Get code content
// var codeContent = editor.getValue();

function consoleOutput() {
  var outputFrame = document.getElementById("output-frame");
  var editorValue = editor.getValue(); // Assuming editor is defined somewhere
  if (outputFrame) {
    try {
      var iframe = outputFrame.contentWindow || outputFrame.contentDocument;
      var iframeDocument = iframe.document;
      
      // Create a new div element
      var div = iframeDocument.createElement('div');
      div.innerHTML = editorValue;

      // Clear the existing content of the iframe body
      iframeDocument.body.innerHTML = '';

      // Append the new div element to the body of the iframe
      iframeDocument.body.appendChild(div);
    } catch (error) {
      outputFrame.contentDocument.body.innerHTML = "Error: " + error.message;
    }
  }
}
