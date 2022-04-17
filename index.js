// remove main element with main id
document.querySelector("main#main").remove();
// create h1 element with victory id, inner text and class name
const newHeader = document.createElement("hi");
newHeader.id = "victory"
newHeader.className = "victory"
newHeader.innerHTML = "your name is the champion!"
newHeader.nodeName = "h1"
