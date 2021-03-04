
// Write a JavaScript program to change the color of the bold words when the user hovers the link.

// ## EXTRA (to do when everything is finished)

// Make the color random for each bold word when the user hovers.
var a = document.getElementById("link")
var b = document.getElementById("b")
var c = document.getElementById("c")
var d = document.getElementById("d")

function colorChange() {
   b.style.color = "red";
   c.style.color = "red";
   d.style.color = "red";
}

a.addEventListener("mouseover", colorChange)




