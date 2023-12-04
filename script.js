function fibonacci(num) {
  if (num <= 0) {
    return "Please enter a positive integer.";
  }

  if (num === 1) {
    return [0];
  }

  if (num === 2) {
    return [0, 1];
  }

  let fibSequence = [0, 1];

  for (let i = 2; i < num; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  return fibSequence;
}

module.exports = fibonacci;
