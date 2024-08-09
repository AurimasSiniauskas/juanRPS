let player = 5;
let computer = 5;
let roundWinner = "tie";
let playerWeapon = "";
let computerWeapon = "";
let winner = "";

const roca = document.querySelector(".piedra");
const papel = document.querySelector(".papel");
const tijera = document.querySelector(".tijera");

// Player lives

const heartOnePlayer = document.querySelector(".svgHeartOneP");
const heartTwoPlayer = document.querySelector(".svgHeartTwoP");
const heartThreePlayer = document.querySelector(".svgHeartThreeP");
const heartFourPlayer = document.querySelector(".svgHeartFourP");
const heartFivePlayer = document.querySelector(".svgHeartFiveP");

// Computer lives.

const heartOneComputer = document.querySelector(".svgHeartOneC");
const heartTwoComputer = document.querySelector(".svgHeartTwoC");
const heartThreeComputer = document.querySelector(".svgHeartThreeC");
const heartFourComputer = document.querySelector(".svgHeartFourC");
const heartFiveComputer = document.querySelector(".svgHeartFiveC");

// Weapon chosen. 

const weaponPC = document.querySelector(".questionPC");
const weaponPlayer = document.querySelector(".questionPlayer");

// <p> winner.

const winnerP = document.querySelector("#juan");
const coso = document.querySelector(".coso");
const btn = document.querySelector("#luna");

function whoIsWinning(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        computer -= 1;
        roundWinner = 'player';
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        player -= 1;
        roundWinner = 'computer';
    }
    return roundWinner;
}

function pcPick() {
    let pcRandomNum = Math.floor(Math.random() * 3);
    switch (pcRandomNum) {
        case 2:
            computerWeapon = "PAPER";
            weaponPC.src = "img/paper.svg";
            break;
        case 1:
            computerWeapon = "ROCK";
            weaponPC.src = "img/duroComoRoca.svg";
            break;
        case 0:
            computerWeapon = "SCISSORS";
            weaponPC.src = "img/scissor.svg";
            break;
    }
}


function statusPlayer() {
    if (player === 5) {
        heartOnePlayer.src = "img/redHeart.svg";
        heartTwoPlayer.src = "img/redHeart.svg";
        heartThreePlayer.src = "img/redHeart.svg";
        heartFourPlayer.src = "img/redHeart.svg";
        heartFivePlayer.src = "img/redHeart.svg";
    }else if (player === 4) {
        heartOnePlayer.src = "img/redHeart.svg";
        heartTwoPlayer.src = "img/redHeart.svg";
        heartThreePlayer.src = "img/redHeart.svg";
        heartFourPlayer.src = "img/redHeart.svg";
        heartFivePlayer.src = "img/redBrokenHeart.svg";
    }else if (player === 3) {
        heartOnePlayer.src = "img/redHeart.svg";
        heartTwoPlayer.src = "img/redHeart.svg";
        heartThreePlayer.src = "img/redHeart.svg";
        heartFourPlayer.src = "img/redBrokenHeart.svg";
        heartFivePlayer.src = "img/redBrokenHeart.svg";
    }else if (player === 2) {
        heartOnePlayer.src = "img/redHeart.svg";
        heartTwoPlayer.src = "img/redHeart.svg";
        heartThreePlayer.src = "img/redBrokenHeart.svg";
        heartFourPlayer.src = "img/redBrokenHeart.svg";
        heartFivePlayer.src = "img/redBrokenHeart.svg";
    }else if (player === 1) {
        heartOnePlayer.src = "img/redHeart.svg";
        heartTwoPlayer.src = "img/redBrokenHeart.svg";
        heartThreePlayer.src = "img/redBrokenHeart.svg";
        heartFourPlayer.src = "img/redBrokenHeart.svg";
        heartFivePlayer.src = "img/redBrokenHeart.svg";
    }else if (player === 0) {
        heartOnePlayer.src = "img/redBrokenHeart.svg";
        heartTwoPlayer.src = "img/redBrokenHeart.svg";
        heartThreePlayer.src = "img/redBrokenHeart.svg";
        heartFourPlayer.src = "img/redBrokenHeart.svg";
        heartFivePlayer.src = "img/redBrokenHeart.svg";
        winner = "COMPUTER";
    }
}

function statusComputer() {
    if (computer === 5) {
        heartOneComputer.src = "img/redHeart.svg";
        heartTwoComputer.src = "img/redHeart.svg";
        heartThreeComputer.src = "img/redHeart.svg";
        heartFourComputer.src = "img/redHeart.svg";
        heartFiveComputer.src = "img/redHeart.svg";
    }else if (computer === 4) {
        heartOneComputer.src = "img/redHeart.svg";
        heartTwoComputer.src = "img/redHeart.svg";
        heartThreeComputer.src = "img/redHeart.svg";
        heartFourComputer.src = "img/redHeart.svg";
        heartFiveComputer.src = "img/redBrokenHeart.svg";
    }else if (computer === 3) {
        heartOneComputer.src = "img/redHeart.svg";
        heartTwoComputer.src = "img/redHeart.svg";
        heartThreeComputer.src = "img/redHeart.svg";
        heartFourComputer.src = "img/redBrokenHeart.svg";
        heartFiveComputer.src = "img/redBrokenHeart.svg";
    }else if (computer === 2) {
        heartOneComputer.src = "img/redHeart.svg";
        heartTwoComputer.src = "img/redHeart.svg";
        heartThreeComputer.src = "img/redBrokenHeart.svg";
        heartFourComputer.src = "img/redBrokenHeart.svg";
        heartFiveComputer.src = "img/redBrokenHeart.svg";
    }else if (computer === 1) {
        heartOneComputer.src = "img/redHeart.svg";
        heartTwoComputer.src = "img/redBrokenHeart.svg";
        heartThreeComputer.src = "img/redBrokenHeart.svg";
        heartFourComputer.src = "img/redBrokenHeart.svg";
        heartFiveComputer.src = "img/redBrokenHeart.svg";
    }else if (computer === 0) {
        heartOneComputer.src = "img/redBrokenHeart.svg";
        heartTwoComputer.src = "img/redBrokenHeart.svg";
        heartThreeComputer.src = "img/redBrokenHeart.svg";
        heartFourComputer.src = "img/redBrokenHeart.svg";
        heartFiveComputer.src = "img/redBrokenHeart.svg";
        winner = "PLAYER";
    }
}

// Adding listener to the buttons.

roca.addEventListener("click", () => {
    if (winner == "") {
        playerWeapon = "ROCK";
        weaponPlayer.src = "img/duroComoRoca.svg";
        pcPick();
        whoIsWinning(playerWeapon, computerWeapon);
        statusPlayer();
        statusComputer();

        if (winner === "PLAYER") {
            winnerP.textContent = "YOU WON";
            coso.classList.remove("innactive");
        } else if (winner === "COMPUTER") {
            winnerP.textContent = "YOU LOST";
            coso.classList.remove("innactive");
        }
    }
});

papel.addEventListener("click", () => {
    if (winner === "") {
        playerWeapon = "PAPER";
        weaponPlayer.src = "img/paper.svg";
        pcPick();
        whoIsWinning(playerWeapon, computerWeapon);
        statusPlayer();
        statusComputer();

        if (winner === "PLAYER") {
            winnerP.textContent = "YOU WON";
            coso.classList.remove("innactive");
        } else if (winner === "COMPUTER") {
            winnerP.textContent = "YOU LOST";
            coso.classList.remove("innactive");
        }
    }
});


tijera.addEventListener("click", () => {
    if (winner == "") {
        playerWeapon = "SCISSORS";
        weaponPlayer.src = "img/scissor.svg";
        pcPick();
        whoIsWinning(playerWeapon, computerWeapon);
        statusPlayer();
        statusComputer();

        if (winner === "PLAYER") {
            winnerP.textContent = "YOU WON";
            coso.classList.remove("innactive");
        } else if (winner === "COMPUTER") {
            winnerP.textContent = "YOU LOST";
            coso.classList.remove("innactive");
        }
    }
});

// Replay function.

function replayGame() {
    playerWeapon = "";
    weaponPlayer.src = "img/question.svg";
    weaponPC.src = "img/question.svg";
    winner = "";
    player = 5;
    computer = 5;
    statusComputer();
    statusPlayer();
    coso.classList.add("innactive");
}

btn.addEventListener("click", () => {
    replayGame();
})




