    // Initialize CodeMirror on the textarea
    var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        mode: "javascript",
        theme: "ayu-mirage",
        lineNumbers: true,
        autofocus: true,
        matchBrackets: true,
        autoCloseBrackets: true,
      });
      // You can add more configuration options based on your req uirements
  
      // Example: Set initial code content
      editor.setValue('console.log("Hello, CodeMirror!");');
  
      // Example: Get code content
      // var codeContent = editor.getValue();