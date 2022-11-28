const numeri = [1, 2, 3, 4];
const lettere = ["A", "B", "C", "D"];

const mix = [];

for (let i = 0; i < numeri.length; i++) {
  mix.push(numeri[i]);
  mix.push(lettere[i]);
}

console.log(mix);
