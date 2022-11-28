// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const numsArr = [];

let i = 0;
while (i < 50) {
  let userNums1 = parseInt(prompt("Inserisci un numero"));
  let userNums2 = parseInt(prompt("Inserisci un numero"));

  sum = userNums1 + userNums2;

  console.log(sum);

  numsArr.push(sum);
}
