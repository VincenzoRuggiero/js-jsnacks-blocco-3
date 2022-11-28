// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const array1 = [12, 22, 45, 12];
const array2 = [6];

while (array1.length > array2.length) {
  let num = parseInt(prompt("Inserisci un numero"));

  array2.push(num);
}

console.log(array1, array2);
