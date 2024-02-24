import React, { useState } from 'react'
import "./styles/style.css"
import Paragraph from './components/Paragraph'

function App() {
  const [edit,setEdit] = useState(false)
  const [text,setText] = useState("")
  const [textbox,setTextbox] = useState("Заголовок")
  const [Paragraphs,setParagraphs] = useState([

  ])
 
  if (edit === false)
  return (
    <div className="App">
      {Paragraphs.map((post,index) => <Paragraph key ={index} Options = {post} ></Paragraph>  )}
      <img onClick={function() { setTextbox(text) ;setEdit(true);} } src='/images/Paragraph.png'></img>
    </div>
  );
  else return(
    <div className="App">
     {Paragraphs.map((post,index) => <Paragraph key ={index} Options = {post} ></Paragraph>  )}

    <textarea  onChange={function(event) {setText(event.target.value) } }></textarea>
    <div className='buttons'>
      <button  onClick={function() {setEdit(false); Paragraphs.push({Text: text}); } }>Сохранить</button>
      <button onClick={function() {setEdit(false); setText(textbox);}}>Отменить</button>
    </div>
    </div>
  );
}

export default App;
