Ciao ragazzi, Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz

Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

Numero minimo di push: 5 (solo parte obbligatoria)

BONUS 1: Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2: Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

Buon lavoro e buon divertimento!

<!-- SCOMPOSIZIONE ESERCIZIO -->

1 - Creiamo un ciclo FOR
    1.1 - Come condizione nel ciclo FOR mettiamo (let i=1; i<=100; i++)
2 - ? Creiamo un ciclo IF all'interno del ciclo FOR (SE x % 3 == 0 && x % 5 == 0)
    2.1 Dobbiamo stampare con il console.log "FizzBuzz"
    2.2 : ALTRIMENTI SE (x % 3 == 0) 
        2.2.1 Dobbiamo stampare con il console.log "Fizz" 
    2.3 ALTRIMENTI SE (x % 5 == 0)
        2.2.2 Dobbiamo stampare con il console.log "Buzz" 
