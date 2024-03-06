import React, { useState } from 'react'
import "./styles/TextEditor.css"
import Buttons from './components/Buttons';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav></Nav>
      <h1 id="Header">Текстовый редактор</h1>
      <Buttons></Buttons>
          <div id="Editor" contenteditable="true" width="400" height="200" ></div>
    </div>
  );
}

export default App;
