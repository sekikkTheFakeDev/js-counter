const counter = document.getElementById("btn");
const zero = document.getElementById("btn2");
const cnum = document.getElementById("number");
const text = document.getElementById("text");

var number = 0;

counter.addEventListener("click", function(event) {
    number++;
    cnum.innerHTML = number;
    text.style.visibility = "hidden";
})

zero.addEventListener("click", function(event) {
    number = 0;
    cnum.innerHTML = number;
    text.style.visibility = "visible";
})

document.addEventListener("keyup", function(event) {
    if (event.key == " ") {
        number++;   
        cnum.innerHTML = number;
        text.style.visibility = "hidden";
    }
})