import React, { useState } from 'react'


function Paragraph(props) {
    const [edit,setEdit] = useState(false)
    const [header,setHeader] = useState(props.Options.Text)
    const [textbox,setTextbox] = useState(props.Options.Text)
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

export default Paragraph;