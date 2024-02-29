import React from "react";
import TextEditorService from "../modules/TextEditorService";
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

    return (
    <div id="buttons">
        {ButtonsFunctions.map((x,index) => <button onClick={x.Func}>{x.Name}</button>)}     
    </div>
    );
}