import React, { useState } from 'react'
import "./styles/style.css"


function App() {
  return (
    <div>
      <h1 id="Header">Текстовый редактор</h1>
      <div id="buttons">
      <button onClick={function() {
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        if (selection.rangeCount > 0) {        
          const parentElement= selection.anchorNode.parentElement 
          if (parentElement.tagName === "STRONG") {
            var textNode = document.createTextNode(parentElement.innerHTML);
            parentElement.replaceWith(textNode);
          }
          else {
            var FoundTag = false
            parentElement.childNodes.forEach(function(node) {
              if (node.tagName === "STRONG") {
                    FoundTag = true;
                    var textNode = document.createTextNode(node.innerHTML);
                    node.replaceWith(textNode);
              }
            })
            if (!FoundTag) {
          var boldElement = document.createElement('strong');
          boldElement.appendChild(range.extractContents());
          range.insertNode(boldElement);
            }
          }
        
        }
      }}>Ж</button>
      </div>
          <div id="Editor" contenteditable="true" width="400" height="200" ></div>
    </div>
  );
}

export default App;
