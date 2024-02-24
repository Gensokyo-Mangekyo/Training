import React, { useState } from 'react'

function App() {
  const [edit,setEdit] = useState(false)
  const [header,setHeader] = useState("Заголовок")
  const [textbox,setTextbox] = useState("Заголовок")
  if (edit === false)
  return (
    <div className="App">
    <h1 style={{ cursor: 'pointer', userSelect: 'none' }} onDoubleClick={function() { setEdit(true); setTextbox(header) } }>{header}</h1>

    </div>
  );
  else return(
    <div className="App">
    <h1 style={{ cursor: 'pointer', userSelect: 'none' }} onDoubleClick={function() { setEdit(false)} }>{header}</h1>
    <textarea value={header} onChange={function(event) {setHeader(event.target.value) } }></textarea>
    <div style={{display: 'flex', gap: '8px'}}>
      <button  onClick={function() {setEdit(false); } }>Сохранить</button>
      <button onClick={function() {setEdit(false); setHeader(textbox);}}>Отменить</button>
    </div>
    </div>
  );
}

export default App;
