let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let start = document.getElementById("start")


start.addEventListener("click", function() {
    let player1v = player1.value
    let player2v = player2.value
    if (player1v.length === 0) {
        player1 = "Player 1";
    }

    if (player2v.length === 0) {
        player2 = "Player 2";
    }
    localStorage["play1"] = player1v;
    localStorage["play2"] = player2v;
})