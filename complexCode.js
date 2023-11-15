// Filename: complexCode.js
// Description: This code demonstrates an implementation of a complex algorithm for calculating the nth Fibonacci number using dynamic programming.

// Function to calculate the nth Fibonacci number using dynamic programming
function fibonacci(n) {
  // Create an array to store previously calculated Fibonacci numbers
  const fibArray = Array(n + 1).fill(0);
  
  // Define the base cases
  fibArray[0] = 0;
  fibArray[1] = 1;
  
  // Calculate the Fibonacci numbers iteratively
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  
  // Return the nth Fibonacci number
  return fibArray[n];
}

// Testing the fibonacci() function
const n = 10; // Change the value of n to any positive integer
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`);