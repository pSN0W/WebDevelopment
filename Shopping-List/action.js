var ul = document.getElementsByTagName("ul")[0];
var button = document.getElementById("enter");
var input = document.getElementById("userInput")

button.addEventListener("click", function() {
    if (input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keypress", function(event) {
    if (input.value.length > 0 && event.key === "Enter") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})