let gameSeq = [];
let userSeq = [];
let colors = ['one', 'three', 'two', 'four'];
let started = false;

let Level = 0;
let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log('Game is Started');
        started = true;
        LevelUp();
    }
});


function GameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function LevelUp() {
    userSeq = [];
    Level++;
    h2.innerText = `Level ${Level}`;
    let RandIndx = Math.floor(Math.random() * 4);
    let RandColor = colors[RandIndx];
    let RandBtn = document.querySelector(`.${RandColor}`);

    gameSeq.push(RandColor);
    console.log(gameSeq);

    GameFlash(RandBtn);

}

function checkAns(idx) {
    //  idx = Level - 1; //this eror is solve
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(LevelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your Score is <b>${Level}</b> <br> Press any Key To Start Again`;
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 150);
        reset();
    }

}


function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (abtn of allBtns) {
    abtn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
}