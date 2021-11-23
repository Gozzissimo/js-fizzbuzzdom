// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100.

// MILESTONE 1
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// MILESTONE 2
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

// MILESTONE 3
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

// note personali:
// Trovare una logica che mi indichi evidenzi quali numeri sono divisibili per 3, per 5 e per tutti e due.
// Io direi di prendere quei numeri che divisi per 3,5 o tutti e due mi diano resto 0.

// costante fissa
const container = document.querySelector('.container');

// calcolo
for (let i = 1; i <= 100; i++) {

    const div = document.createElement('div');
    div.classList.add('box');

    if (i % 3 == 0 && i % 5 == 0) {
        // console.log('fizzbuzz');
        div.classList.add('fizzbuzz');
        div.innerHTML = ('fizzbuzz');

    } else if (i % 5 == 0) {
        // console.log('buzz');
        div.classList.add('buzz');
        div.innerHTML = ('buzz');

    } else if (i % 3 == 0) {
        // console.log('fizz');
        div.classList.add('fizz');
        div.innerHTML = ('fizz');

    } else {
        // console.log(i);
        div.innerHTML = (i);
    }

    container.append(div);
}