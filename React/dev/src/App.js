import React, { useState } from 'react'
import "./styles/style.css"
import Buttons from './components/Buttons';

function App() {
  return (
    <div>
      <h1 id="Header">Текстовый редактор</h1>
      <Buttons></Buttons>
          <div id="Editor" contenteditable="true" width="400" height="200" ></div>
    </div>
  );
}

export default App;
