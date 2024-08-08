let game = false;
let player = 3;
let computer = 2;
let roundWinner = "tie";
let playerWeapon = "";
let computerWeapon = "";
let winner = ""

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

function whoIsWinning(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
      }
      if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        computer--;
        roundWinner = 'player';
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        player--;
        roundWinner = 'computer';
    }
    return roundWinner;
}

function pcPick() {
    let pcRandomNum = Math.floor(Math.random * 3);
    let pcWeapon = "";
    switch (pcRandomNum) {
        case 2:
            pcWeapon = "PAPER";
            break;
        case 1:
            pcWeapon = "ROCK";
            break;
        case 0: 
            pcWeapon = "SCISSORS";
            break;
    }
    return pcWeapon;
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
        winner = "PLAYER";
    }
}

// Adding listener to the buttons.

roca.addEventListener("click", () => {
    if (winner === "") {
        playerWeapon = "ROCK";
        computerWeapon = pcPick();
        whoIsWinning(playerWeapon, computerWeapon);
        statusPlayer();
        statusComputer();
    }
});

