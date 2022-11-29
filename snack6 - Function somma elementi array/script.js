const numsArr = [12, 78, 54, 90, 43, 31, 87];

function calcArr(array) {
  let sum = 0;

  for (let i = 0; i < numsArr.length; i++) {
    sum += numsArr[i];
  }

  return sum;
}

let sumArr = calcArr(numsArr);

console.log(sumArr);
