/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/


let num1 = parseInt(prompt("Inserisci il primo numero:"))
let num2 = parseInt(prompt("Inserisci il secondo numero:"))


let somma = crazySum(num1,num2)
    
function crazySum(numero1, numero2) {
    if(numero1 !== numero2) {
    return numero1 + numero2
    } else {
         return numero1 * 3
    }
}

console.log(somma + " è il risultato finale")


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let num3 = parseInt(prompt("Inserisci il numero:"))

let risultato = boundary(num3)


function boundary(numero1) {
    
    //if((num3 > 20) && (num3 <= 100) || (num3 === 400)) {
        //return true ;
    //} return false
    
     return (num3 > 20) && (num3 <= 100) || (num3 === 400)
}

console.log("La condizione è " + risultato )

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let messaggio = "EPICODE"


let testo = reverseString(messaggio)
function reverseString(stringa) {
    let splitString = stringa.split("") //per separare => E P I C O D E
    let reverseArray = splitString.reverse() // per invertire => E D O C I P E 
    let joinArray = reverseArray.join("") // per unire => EDOCIPE
    return joinArray;
}
console.log(messaggio)
console.log(testo)


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let testo2 = "rendi maiuscola ogni lettera iniziale"
let pascalCase = upperFirst(testo2)
console.log(testo2)
console.log(pascalCase)
function upperFirst(str) {
    let words = str.split(" ")
    let upperWords = []
    for (let i of words) {
    let wordUpper = i.charAt(0).toUpperCase() + i.slice(1)
    upperWords.push(wordUpper)
    }
    return upperWords.join(" ")
}


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

//let num4 = parseInt(prompt("Inserisci il numero"))


let random = giveMeRandom()
console.log("Hai pescato: " + random)

function giveMeRandom(n) {
    return Math.floor(Math.random(n) * 10)
}


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let l1 = parseInt(prompt("Inserisci la lunghezza del primo lato:"))
let l2 = parseInt(prompt("Inserisci la lunghezza del secondo lato:"))

let areaRettangolo = area(l1, l2)
console.log("L'area del rettangolo: " + areaRettangolo)

function area(num1, num2) {
    return num1 * num2
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/
/*
let numA = parseInt(prompt("Inserisci numero:"))

let differenza = crazyDiff(numA)
console.log("Il risultato di questa differenza è: " + differenza)

function crazyDiff(n) {
    let risultato = Math.abs(n - 19)

    if (risultato > 19) {
        return risultato * 3
    } return risultato
}
*/
/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/ 
/*
function codify(str) {

}
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
