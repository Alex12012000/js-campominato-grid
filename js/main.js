/* 
L'utente indica un livello di difficoltà (con un prompt) in base al quale decidiamo il range di numeri possibili del gioco:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito attraverso dei prompt l'utente inserisce un numero alla volta finche il gioco non è finito:
se il numero è presente nella lista dei numeri generati, abbiamo calpestato una bomba, il gioco finisce con un messaggio di errore
Altrimenti il gioco va avanti a meno di aver raggiunto il numero massimo di tentativi possibili. In questo caso il gioco finisce con un messaggio di vittoria.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha scelto un numero che non era una bomba.
*/

// Chiedo la difficoltà all'utente
const userDifficulty  = prompt('Scegli il livello di difficoltà tra 1 - 2 - 3');
// Difficoltà
let maxNumbers = 0;
// Array bombe


// Definisco la difficoltà in base alla scelta fatta dall'utente 
if(userDifficulty === '1') {
    maxNumbers = 100;
} else if (userDifficulty === '2') {
    maxNumbers = 81;
} else if (userDifficulty === '3') {
    maxNumbers = 49;
}

// Variabile che racchiude l'array con le bombe generate
let bomb = bombGenerator(16, 1, maxNumbers);
console.log(bomb)


// ------------------------
//      FUNZIONI
// -----------------------

// Funzione che genera 16 bombe da un minimo di 1 fino ad un massimo indicato dalla difficoltà scelta dall'utente

function bombGenerator (bombNumb, max, min) {

    // array di bombe
    let bombs = [];

    // finche il numero di bombe nell'array è minore del numero massimo di bombe da generare, continua a generare numeri random
    // che verranno pushati all'interno dell'array di bombe
    while (bombs.length < bombNumb) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        
        // se il numero non è incluso nell'array di bombe lo inserisco, altrimenti continuo a chiedere un numero
        if(!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
        }
    }

    // Ritorna un array
    return bombs;
}
