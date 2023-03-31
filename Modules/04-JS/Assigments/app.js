function sum(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i];
  }
  return sum;
}

// Test cases
console.log(sum([1, 2, 3, 4]) === 10);
console.log(sum([-3, 5, 19, -6]) === 15);

function calculateAge(birthdate) {
  const dob = new Date(birthdate.split("/").reverse().join("-"));
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const month = today.getMonth() - dob.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

console.log(calculateAge("20/7/2002"));
console.log(calculateAge("1/1/1979"));

function factorial(anyNumber) {
  let factorial = 1;
  for (let i = 2; i <= anyNumber; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(factorial(5) === 120);
console.log(factorial(4) === 24);
console.log(factorial(1) === 1);

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(2) === 4);
console.log(tetra(5) === 35);
console.log(tetra(6) === 56);
