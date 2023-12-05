function fibonacci(num) {
  if (num <= 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// Examples
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
