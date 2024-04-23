function fibnachi(n) {
  let fib;

  if(n > 2)
  fib = fibnachi(n - 1) + fibnachi(n - 2);
  else if(n == 2)
  fib = 1
  else
  fib = 0

  return fib;
}

console.log(fibnachi(5));
