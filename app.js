let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started");
        started = true;

        levelUp();
    }
})

// document.addEventListener("click", function(){
//     if(started == false){
//         console.log("Game Started");
//         started = true;
        
//         levelUp();
//     }
// })



function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 100);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randColor = btns[ Math.floor(Math.random() * 4) ];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        highScore = Math.max(highScore,level-1);
        h2.innerHTML = `Game Over! Your score is <b>${level - 1}</b> <br> Highscore: ${highScore} <br> Press any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    btnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress)
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}