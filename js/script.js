let distanza;
distanza = Number(prompt("Quanti chilometri vuoi percorrere?"));

let eta;
eta = Number(prompt("Quanti anni hai?"));

const prezzoChilometro = 0.21;
const prezzoViaggio = distanza * prezzoChilometro
const prezzoMinori = prezzoViaggio / 100 * 20
const prezzoSenior = prezzoViaggio / 100 * 40


document.getElementById("userDistance").innerHTML = distanza
document.getElementById("userAge").innerHTML = eta

if ((eta > 0 && eta < 100) && (distanza > 0)) {

    if (eta < 18) {

        document.getElementById("trainPrice").innerHTML = (prezzoViaggio - prezzoMinori).toFixed(2)

    } else if (eta >= 65) {

        document.getElementById("trainPrice").innerHTML = (prezzoViaggio - prezzoSenior).toFixed(2)

    } else {

        document.getElementById("trainPrice").innerHTML = prezzoViaggio

    }

} else {

    alert("Età non riconosciuta")

}