const multiplyString = (s1, s2) => {
  let number = BigInt(s1) * BigInt(s2);
  return number;
};

console.log(multiplyString("5", "3"));
