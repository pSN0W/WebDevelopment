var h3 = document.querySelector("h3")
var body = document.getElementById("bod")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")

function setGrad() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    h3.innerHTML = body.style.background + ";";
}
color1.addEventListener("input", setGrad);
color2.addEventListener("input", setGrad);