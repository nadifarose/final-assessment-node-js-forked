function factorial(n) {
  if (n === 0 || n === 1) {
    return 1; // Base case: factorial of 0 or 1 is 1
  }
  return n * factorial(n - 1); // Recursive call
}

// Jangan hapus kode di bawah ini!
export default factorial;
