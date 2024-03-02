import React from "react";
import TextEditorService from "../modules/TextEditorService";
import DropList from "../UI/DropList";
export default function Buttons() {
    const TextEditor = new TextEditorService()
    const AlignFunction = function(selection,Name) {
        TextEditor.AlignText(selection,Name)
    }


    const ButtonsFunctions = [{
        Func: function () {
            var selection = window.getSelection();
            TextEditor.StrongText(selection);
            
          },
        Name: "B"
    },
    {
        Func: function() {var selection = window.getSelection(); AlignFunction(selection,"left") },
        Name: "L"
    }, 
    {
        Func: function() {var selection = window.getSelection(); AlignFunction(selection,"center") },
        Name: "C"
    },
    {
        Func: function() {var selection = window.getSelection(); AlignFunction(selection,"right") },
        Name: "R"
    },
        ]
        const FontsArr = []
        for (let i=8; i < 50; i++) {
            FontsArr.push(
                {
                    Func: function() {var selection = window.getSelection(); TextEditor.FontText(selection,i +"px") },
                    Name: i +"px"
                } 
            )
        }

    return (
    <div id="buttons">
        {ButtonsFunctions.map((x) => <button onClick={x.Func}>{x.Name}</button>)} 
        <DropList Name = "Размер Шрифта" Elements = {FontsArr} ></DropList>
    </div>
    );
}