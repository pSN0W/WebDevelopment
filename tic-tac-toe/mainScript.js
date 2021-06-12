const tl = document.querySelector("#tl");
const tm = document.querySelector("#tm");
const tr = document.querySelector("#tr");
const ml = document.querySelector("#ml");
const mm = document.querySelector("#mm");
const mr = document.querySelector("#mr");
const ll = document.querySelector("#ll");
const lm = document.querySelector("#lm");
const lr = document.querySelector("#lr");
const h3 = document.querySelector("h3");

let players1 = localStorage["play1"]
let players2 = localStorage["play2"]

h3.innerHTML = "It's " + players1 + " turn";

let done = {
    tl: 0,
    tm: 0,
    tr: 0,
    ml: 0,
    mm: 0,
    mr: 0,
    ll: 0,
    lm: 0,
    lr: 0
};

let value = {
    tl: " ",
    tm: " ",
    tr: " ",
    ml: " ",
    mm: " ",
    mr: " ",
    ll: " ",
    lm: " ",
    lr: " "
};

function check() {
    let checking = ['', '', '', '', '', '', '', '']
    checking[0] = value['tl'] + value['ml'] + value['ll'];
    checking[1] = value['tm'] + value['mm'] + value['lm'];
    checking[2] = value['tr'] + value['mr'] + value['lr'];
    checking[3] = value['tl'] + value['tm'] + value['tr'];
    checking[4] = value['ml'] + value['mm'] + value['mr'];
    checking[5] = value['ll'] + value['lm'] + value['lr'];
    checking[6] = value['tl'] + value['mm'] + value['lr'];
    checking[7] = value['tr'] + value['mm'] + value['ll'];
    for (let i = 0; i < 9; i++) {
        if (checking[i] === 'XXX') {
            return 1;
        }
        if (checking[i] === 'OOO') {
            return 2;
        }
    }
    return 0;
}

let marker = {
    symbol: "X"
}

function completed() {
    let comp = false;
    let cnt = Object.values(done).reduce((a, b) => a + b, 0);
    if (cnt === 9) {
        comp = true;
    }
    if (check() !== 0) {
        comp = true;
    }
    if (comp === true) {
        done['tl'] = 1;
        done['tm'] = 1;
        done['tr'] = 1;
        done['ml'] = 1;
        done['mm'] = 1;
        done['mr'] = 1;
        done['ll'] = 1;
        done['lm'] = 1;
        done['lr'] = 1;
        if (check() === 1) {
            h3.innerHTML = players1 + " wins the game..";
        } else if (check() === 2) {
            h3.innerHTML = players2 + " wins the game..";
        } else if (cnt === 9) {
            h3.innerHTML = "The match is tied..";
        }
    }
}

function work(phrase) {
    if (done[phrase] === 0) {
        value[phrase] = marker['symbol'];
        done[phrase] = 1;
        let tags = document.getElementById(phrase);
        tags.innerHTML = marker['symbol'];
        let clas = tags.classList;
        clas.remove('anim');
        if (marker['symbol'] === 'X') {
            clas.add('cross');
        } else {
            clas.add('circle');
        }
        if (marker['symbol'] === "X") {
            marker["symbol"] = "O";
            h3.innerHTML = "It's " + players2 + " turn";
        } else {
            marker['symbol'] = "X";
            h3.innerHTML = "It's " + players1 + " turn";
        }
    }
    completed()
}


tl.addEventListener("click", function() {
    work('tl');
});
tm.addEventListener("click", function() {
    work('tm');
});
tr.addEventListener("click", function() {
    work('tr');
});
ml.addEventListener("click", function() {
    work('ml');
});
mm.addEventListener("click", function() {
    work('mm');
});
mr.addEventListener("click", function() {
    work('mr');
});
ll.addEventListener("click", function() {
    work('ll');
});
lm.addEventListener("click", function() {
    work('lm');
});
lr.addEventListener("click", function() {
    work('lr');
});