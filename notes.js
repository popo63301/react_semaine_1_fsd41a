// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = [1, 2];

// const sum = numbers.reduce((acc, curr) => acc + curr, 7);
const sum = numbers.reduce((acc, curr) => {
  console.log("acc", acc);
  console.log("curr", curr);
  console.log("-----------");
  return acc + curr;
}, 7);

console.log(sum);
