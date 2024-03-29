/*  Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/

// VARIABILI PREIMPOSTATE
    // ARRAY'S
const startRandomNumbers = creaArrRandomNum(1, 100, 5);
const indovinati = [];
const sbagliati = [];
    // HTML ELEMENTS
const startContainer = document.getElementById("container");
// const finishContainer = document.getElementById("numbers");

// GENERA 5 NUMERI RANDOM DA PUSHARE IN UN ARRAY
// creaArrRandomNum(1, 100, 5);
// startRandomNumbers.push(creaArrRandomNum(1, 100, 5));
console.log("I 5 numeri iniziali sono: " + startRandomNumbers);

// MOSTRA I NUMRI GENERATI SULLO SCHERMO
startContainer.append(startRandomNumbers);

// DOPO 30 SECONDI I NUMERI SPARISCONO e parte il gioco

setTimeout(simonGame, 3000);



function simonGame (){
    // i 5 numeri vengono nascosti
    startContainer.classList.add ("hidden");
    // chiedo all'utente per 5 volte di inserire un numero

    setTimeout(() => {
        const arrayNumUtente = [];

        while (arrayNumUtente.length < 5){
            let userNumber = parseInt(prompt("inserisci uno dei 5 numeri che ti ricordi"));
            if (!arrayNumUtente.includes(userNumber)){
                arrayNumUtente.push(userNumber);
            }
        }
        console.log("i 5 numeri indicati sono: " + arrayNumUtente);

        // VERIFICO SE I NUMERI COMBACIANO CON I 5 RANDOM

        for (let i = 0; i <= 4; i++){
            if (startRandomNumbers.includes(arrayNumUtente[i])){
                indovinati.push(startRandomNumbers[i]);
            } else {
                sbagliati.push(startRandomNumbers[i]);
            }
        }
        console.log("indovinati: " + indovinati);
        console.log("sbagliati: " + sbagliati);
        
        // DICHIARO ALL'UTENTE SE HA VINTO O A PERSO e gli mostro i numeri indovinati o quelli sbagliati
        if (sbagliati.length >= 1){
            console.log("HAI PERSO. HAI DIMENTICATO I NUMERI: " + sbagliati);
        } else {
            console.log("HAI VINTO. Ecco i numeri indovinati: " + indovinati);
        }
    }, 1);
}
    


// ---------------------FUNZIONI---------------------


// FUNZIONE CHE GENERA NUMERO RANDOM IN UN RANGE
function creaNumRandomMinMax(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE CHE CREA UN ARRAY CON NUMERI IN ORDINE CASUALE IN UN RANGE
function creaArrRandomNum(minNum, maxNumm, lunghezza){
    const arrayRandom = [];
    while (arrayRandom.length < lunghezza){
        let numRandom = creaNumRandomMinMax(minNum, maxNumm);
        // SE IL NUMERO NON è PRESENTE NELL'ARRAY LO PUSHO
        if (!arrayRandom.includes(numRandom)){
            arrayRandom.push(numRandom);
        }
    }
    return arrayRandom;
}