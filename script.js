// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **Consigli del giorno:**
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// -fare funzione numero random
// -ciclo per 5 volte creando un array e stampare in pagina
// -timer 5 secondi e prompt
// -verifica se sono nell'arrey

const mexNumeri = document.getElementById("numeri");
let arrayNum = [];

// creo array numeri random
for (let i = 0; i < 5; i++) {
  arrayNum.push(numRandom(1, 100));
}

// stampo i numeri
console.log(arrayNum);
mexNumeri.innerHTML = arrayNum ;




// funzioni

// numero random
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}