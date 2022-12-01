const startingList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const secondList = [];
let number;

for (let i = 0; i < startingList.length; i++) {
  number = Math.floor(Math.random() * startingList[i] + 1);
  secondList.push(number);
}
console.log(secondList);
