var createCounter = function (init) {
  let present = init;
  function increment() {
    return ++present;
  }

  function decrement() {
    return --present;
  }

  function reset() {
    return (present = init);
  }

  return { increment, decrement, reset };
};
