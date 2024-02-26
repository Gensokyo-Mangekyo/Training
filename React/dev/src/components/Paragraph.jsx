import React, { useState } from 'react'
import AddParagraph from './AddParagraph';


function Paragraph(props) {
    const [edit,setEdit] = useState(false)
    const [header,setHeader] = useState(props.Options.Text)
    const [textbox,setTextbox] = useState(props.Options.Text)
    const [deleted,setDeleted] = useState(false)
    if (setDeleted === true)
        return null
    if (edit === false) 
    if (header !== "") {
    return (
      <div className="App">
      <h1 style={{ cursor: 'pointer', userSelect: 'none' }} onDoubleClick={function() { setEdit(true); setTextbox(header) } }>{header}</h1>
      </div>
    );
    } else return <AddParagraph></AddParagraph>;
    else return(
      <div className="App">
      <h1 style={{ cursor: 'pointer', userSelect: 'none' }} onDoubleClick={function() { setEdit(false)} }>{header}</h1>
      <textarea className='TextBox' value={header} onChange={function(event) {setHeader(event.target.value) } }></textarea>
      <div style={{display: 'flex', gap: '8px'}}>
        <button  onClick={function() {setEdit(false);  setTextbox("")  } }>Сохранить</button>
        <button onClick={function() {setEdit(false); setHeader(textbox);}}>Отменить</button>
        <button onClick={function() {setDeleted(true)}}>Удалить</button>
      </div>
      </div>
    );
}

export default Paragraph;