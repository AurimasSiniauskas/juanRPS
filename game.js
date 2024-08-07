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