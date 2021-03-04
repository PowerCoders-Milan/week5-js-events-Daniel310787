// # Counting

// Create two buttons, when clicked they will increment or decrease the counter in the p tag.

// Once it reaches +10 or -10 show an image below the counter.

// You can either create an image element or hide/show an existing image.
var count = document.getElementById("count");
var img = document.getElementById("after")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var num = 0;

function countUp() {
    count.innerHTML = "Count is " + num++ +"." 
    if(num == 11){
        var img1 = document.createElement("img");
        img1.setAttribute("src", "images/maximo.jpg");
        img1.setAttribute("width", "304");
        img1.setAttribute("height", "228");
        count.appendChild(img1);
    }   
}

function countDown() {
    count.innerHTML = "Count is " + num-- +"."
    if(num == -11){
        var img2 = document.createElement("img");
        img2.setAttribute("src", "images/minimo.PNG");
        img2.setAttribute("width", "304");
        img2.setAttribute("height", "228");
        count.appendChild(img2);
    }
}
btn1.addEventListener("click", countUp)
btn2.addEventListener("click", countDown)