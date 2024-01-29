let celsius;
celsius = Number(prompt("Inserisci la temperatura"));

const temperature = celsius * (9 / 5) + 32

document.getElementById("temperature_calculator").innerHTML = temperature