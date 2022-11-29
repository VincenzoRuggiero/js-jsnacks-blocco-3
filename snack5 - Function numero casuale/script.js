function numeroCasuale(numMax, numMin) {
  const numero = Math.floor(Math.random() * (numMax - numMin + 1) + numMin);

  return numero;
}

console.log(numeroCasuale(120, 10));
