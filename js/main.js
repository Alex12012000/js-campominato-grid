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
let userDifficulty;
// Difficoltà di base
let maxNumbers = 0;

// Definisco la difficoltà in base alla scelta fatta dall'utente 
// Chiedo all'utente la difficoltà finche non inserisce un numero corretto
while(userDifficulty < 1 || userDifficulty > 3 || isNaN(userDifficulty)){

    userDifficulty = parseInt(prompt('Scegli il livello di difficoltà tra 1 - 2 - 3'));

    if(userDifficulty === 1) {
        maxNumbers = 100;
    } else if (userDifficulty === 2) {
        maxNumbers = 81;
    } else if (userDifficulty === 3) {
        maxNumbers = 49;
    } else {
        alert('Inserisci un numero corretto');
    }
}

// Tentativi dell'utente
let maxAttempts = maxNumbers - 16;
// Variabile che racchiude l'array con le bombe generate
let bomb = bombGenerator(16, 1, maxNumbers);


// Numeri inseriti dall'utente
let userInputArray = [];
// finche l'utente inserisce un numero che non è presente nell'array di bombe
// continua a chiedere un numero finche non arriva al numero massimo di tentativi
// se l'utente inserisce un numero che è presente all'interno dell'array bombe, l'utente perde
let game = true;
while(game) {

    let userInput = parseInt(prompt('Dimmi un numero'));
    
    // se l'utente inserisce un numero diverso da quello inserito precedentemente il gioco continua
    // altrimenti continua a chidere un numero diverso
    if (userInput < 1 || userInput > maxNumbers) {
        alert ('Numero non corretto');
    } else if (!userInputArray.includes(userInput) && !bomb.includes(userInput)) {
        userInputArray.push(userInput);
    }
    // se l'utente inserisce un numero che si trova anche all'interno dell'array di bombe, il gioco finisce
    // Se l'utente inserisce un numero diverso dal numero delle bombe per il numero di tentativi totali, l'utente vince
    // Alert di vittoria + punteggio
    if(bomb.includes(userInput)) {
        game = false;
        alert('hai perso');
        alert ('l tuo punteggio è ' + userInputArray.length);
    } else if(userInputArray.length === maxAttempts) {
        game = false;
        alert('Hai vinto');
        alert ('l tuo punteggio è ' + userInputArray.length);
    }

}
// PRINT
console.log(userInputArray);
console.log(bomb);


// ------------------------
//      FUNZIONI
// -----------------------

// Funzione che genera 16 bombe con un numero che va da un minimo di 1 fino ad un massimo indicato dalla difficoltà scelta dall'utente

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
