// # Screensize

// Write a JavaScript program to get the width and height of the window (any time the window is resized).

// Then write the sizes in the p element in a nice format ("The window is x pixels" or similar).

// # Extra

// Change the color of the screen based on 3 sizes of your choice (ex. 300px green, 500px black , 700+ yellow)

function windowSize() {
  
    var w = window.innerWidth;
    var h = window.innerHeight;
    var txt = "The Window is " +w+ "px width and " +h+ "px height";
    document.getElementById("p").innerHTML = txt;
    if (w <= 300 && w <= 499){
        document.body.style.backgroundColor = "green"
        document.body.style.color = "blue"
    } else if(w >= 500 && w <= 699){
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
    } else if(w >= 700){
        document.body.style.backgroundColor = "yellow"
        document.body.style.color = "red"
    }
}
window.addEventListener("resize", windowSize);





