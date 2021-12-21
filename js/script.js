console.log("JS OK!")

/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca
*/

/*
1- chiedere età e km da percorrere
2- calcolare prezzo moltiplicando per 0.21€ al km
3- calcolo percentuali
4- condizioni se minorenni o se over 65.
*/

// #1 Chiedo al cliente età e km
const userKM = parseInt(prompt("Quanti chilometri devi percorrere?").trim());
console.log('userKM:', userKM)

const userAge = parseInt(prompt("Quanti anni hai?").trim());
console.log('userAge:', userAge);

// 2# calcolo prezzo moltiplicando km * 0.21€km

const finalKMPrice = userKM * 0.21

console.log('finalKmPrice: ', finalKMPrice)

// #3 calcolo percentuali

const off20 = finalKMPrice - finalKMPrice * 20 / 100;
console.log('off20: ', off20);

const off40 = finalKMPrice - finalKMPrice * 40 / 100;
console.log('off40: ', off40);

// 4# condizioni

if (userAge <= 18) {
    console.log("Hai ricevuto uno sconto del 20%, il prezzo migliore per te che sei minorenne  è ", off20)
} else if (userAge >= 65) {
    console.log("Hai ricevuto uno sconto del 40%, il prezzo migliore per te che sei over 65  è ", off40)
} else {
    console.log("Il prezzo finale per le tue necessità è: ", finalKMPrice)
}