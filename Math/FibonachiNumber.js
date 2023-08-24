// Recursive
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

console.log(fib(8));

// Iterative

function fibNumber(n) {
  let arr = new Array(n + 1);
  if(n <= 1) {
    return n;
  } else {
    arr[0] = 0;
    arr[1] = 1;

    for(let i = 2; i <= n; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
  }
}

console.log(fibNumber(2));
