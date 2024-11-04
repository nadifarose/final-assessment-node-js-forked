function fibonacci(n) {
  if (n === 0) {
    return [0]; // Base case: Fibonacci of 0 is [0]
  }
  if (n === 1) {
    return [0, 1]; // Base case: Fibonacci of 1 is [0, 1]
  }
  const fibs = fibonacci(n - 1); // Recursive call to get the previous Fibonacci sequence
  fibs.push(fibs[n - 1] + fibs[n - 2]); // Append the next Fibonacci number
  return fibs; // Return the updated Fibonacci sequence
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
