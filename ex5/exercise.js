// # Moving ball

// Give the body 200vh height, create a red circle in HTML with CSS border radius 50% and 100px of height and width.

// The ball starts at the top and will move down whenever you scroll down, and up when you croll up.
var circle = document.getElementById("circle")
var outter = document.getElementById("outter")

function moveUd() {
    document.getElementById("circle").style.position = "fixed";
    document.getElementById("circle").style.backgroundColor = "orange";
    document.getElementById("outter").style.height = "150vh";
    document.getElementById("outter").style.width = "110px"
    document.getElementById("outter").style.backgroundColor = "rgba(0,0,0,0.5)"
}
  
window.addEventListener("scroll", moveUd)
