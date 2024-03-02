export default class TextEditorService {

    StrongText(selection) {
        var range = selection.getRangeAt(0);
        if (selection.rangeCount > 0 && !selection.isCollapsed) {        
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
    }

    AlignText(selection,Name) {
      if (selection.anchorNode.parentElement.tagName == "H1")
      return
      let parentElement = selection.anchorNode.parentElement;
       if (selection.anchorNode.parentElement.tagName == "STRONG") 
        parentElement = parentElement.parentElement
        parentElement.style.textAlign = Name;
    }

    FontText(selection,Value) {
      if (selection.anchorNode.parentElement.tagName == "H1")
      return false
      if (!selection.isCollapsed) {
      let parentElement = selection.anchorNode.parentElement;
      parentElement.style.fontSize = Value;
      }
      else {
        if (selection.anchorNode.parentElement.tagName == "DIV" || selection.anchorNode.parentElement.tagName == "STRONG" )
        selection.anchorNode.parentElement.setAttribute("style","Font-Size: " + Value + ";")
      }
      return true
    }
}