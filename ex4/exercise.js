// # Input = Output

// Create an input field and whenever the user types a word, show what the user has typed by inserting it in the p tag.

var output = document.getElementById("output")
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Hello World!");
input.setAttribute("oninput", "text()")
document.body.appendChild(input);


function text() {
  output.innerHTML = input.value  
}













