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
            console.log(selection.isCollapsed)
            if (!FoundTag) {
          var boldElement = document.createElement('strong');
          boldElement.appendChild(range.extractContents());
          range.insertNode(boldElement);
            }
          }
        
        }
    }

    AlignText(selection,Name) {
        console.log()
        var parentElement = selection.anchorNode.parentElement;
        parentElement.style.textAlign =  Name;
    }
}