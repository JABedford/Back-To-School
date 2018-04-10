// What is the outcome of this code?


let n = 8;

function functionOne() {
  let n = 9;

  function functionTwo() {
    let n = 10;
    console.log(n);  // First log
  }

  functionTwo();

  console.log(n);  // Second log
}

functionOne();

console.log(n);  // Third log


// Answer - 10,9,8
