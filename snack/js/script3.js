let playerChoice;
playerChoice = prompt("Carta, Sasso o Forbice?");

const choices = ["Carta", "Sasso", "Forbice"];

const computerChoice = choices[Math.floor(Math.random() * 3 + 1)];

if (playerChoice === computerChoice) {

    document.getElementById("cartasassoforbice").innerHTML = "Pareggio";

} else if (

    (playerChoice === "Sasso" && computerChoice === "Forbice") ||

    (playerChoice === "Carta" && computerChoice === "Sasso") ||

    (playerChoice === "Forbice" && computerChoice === "Carta")

) {

    document.getElementById("cartasassoforbice").innerHTML = "Vinci Tu!";

} else {

    document.getElementById("cartasassoforbice").innerHTML = "Vince il Computer!";

}

