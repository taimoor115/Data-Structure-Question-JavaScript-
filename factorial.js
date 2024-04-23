function factorial(n) {
  fact = 1;

  if (n > 1) {
    fact = factorial(n - 1) * n;
  }
  return fact;
}
console.log(factorial(4));

function fibnachi(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibnachi(n - 2) + fibnachi(n - 1);
  }
}

console.log(fibnachi(34));
