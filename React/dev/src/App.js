import React, { useState } from 'react'
import "./styles/style.css"


function App() {
  return (
    <div>
      <h1 id="Header">Текстовый редактор</h1>
      <div id="buttons">
      <button onClick={function() {
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
          var range = selection.getRangeAt(0);
          var boldElement = document.createElement('strong');
          boldElement.appendChild(range.extractContents());
          range.insertNode(boldElement);
        }
      }}>Ж</button>
      </div>
          <div id="Editor" contenteditable="true" width="400" height="200" ></div>
    </div>
  );
}

export default App;
