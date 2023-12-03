/*  Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. 
*/

// VARIABILI PREIMPOSTATE
    // ARRAY'S
const startRandomNumbers = [];
const numeriIndovinati = [];
const numeriSbagliati = [];
    // HTML ELEMENTS
const startContainer = document.getElementById("container");
const finishContainer = document.getElementById("numbers");

// GENERA 5 NUMERI RANDOM DA PUSHARE IN UN ARRAY
creaArrRandomNum(1, 100, 5);
startRandomNumbers.push(creaArrRandomNum(1, 100, 5));
console.log("I 5 numeri iniziali sono: " + startRandomNumbers);

// MOSTRA I NUMRI GENERATI SULLO SCHERMO
startContainer.append(startRandomNumbers);

// DOPO 30 SECONDI I NUMERI SPARISCONO e parte il gioco
    // i 5 numeri vengono nascosti
    // creo array vuoto dove l'user inserisce i numeri che ricorda
    // chiedo all'utente per 5 volte di inserire un numero
    // VERIFICO SE I NUMERI COMBACIANO CON I 5 RANDOM
        // SE COMBACIANO LOG HAI INDOVINATO NUMERO e PUSH NELL'ARRAY INDOVINATI
        // SE NON COMBACIANO PUSH NELL'ARRAY DEI NUMERI SBAGLIATI

    // DICHIARO ALL'UTENTE SE HA VINTO O A PERSO e gli mostro i numeri indovinati o quelli sbagliati





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