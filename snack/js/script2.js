let prompt1;
prompt1 = Number(prompt("Inserisci il primo numero"));

let prompt2;
prompt2 = Number(prompt("Inserisci il secondo numero"));

let prompt3;
prompt3 = Number(prompt("Inserisci il terzo numero"));

document.getElementById("input").innerHTML = ((prompt1 + prompt2 + prompt3) / 3).toFixed(2)