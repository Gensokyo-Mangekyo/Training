import React, { useState,useEffect } from 'react'

function DropList(props) {

    const [SelectedFontSize,SetSelectedFontSize] = useState()
    const ElementsDivArr = []
    props.Elements.map((x,index) => ElementsDivArr.push(
    <div id={"Font " + index} onClick= { function() {
        SelectedFontSize.style.textDecoration = "none"
    let ElementFontSize = document.getElementById("Font " + index);
        ElementFontSize.style.textDecoration = "underline" 
    SetSelectedFontSize(ElementFontSize)
    x.Func()
    }}>{x.Name}
    </div>))
    useEffect(() => {
        let ElementFontSize = document.getElementById("Font 12");
        ElementFontSize.setAttribute("style","text-decoration: underline;")
        SetSelectedFontSize(ElementFontSize)
      }, []);
     
      return (
        <div class="dropdown" onmouseover="showDropdown()">
        <button class="dropbtn">{props.Name}</button>
        <div class="dropdown-content" id="myDropdown">
        {ElementsDivArr.map(x=> x) } 
        </div>
    </div>
  );
}

export default DropList;