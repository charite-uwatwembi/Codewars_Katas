// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

// NOTES:

// The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

// I have removed the use of require in the javascript language


function factorial(n) {
    if (n < 0) return null; // Return null for negative numbers
    if (n === 0 || n === 1) return "1"; // Base case: 0! = 1! = 1
    
    let result = "1"; // Start with result as 1
  
    for (let i = 2; i <= n; i++) {
      result = multiplyBigInt(result, i.toString());
    }
  
    return result;
  }
  
  // Helper function to multiply a big number (as string) with a small number
  function multiplyBigInt(numStr, num) {
    let carry = 0;
    let result = "";
    
    for (let i = numStr.length - 1; i >= 0; i--) {
      let digit = parseInt(numStr.charAt(i));
      let product = digit * num + carry;
      result = (product % 10) + result;
      carry = Math.floor(product / 10);
    }
  
    // If there's any carry left, append it
    while (carry > 0) {
      result = (carry % 10) + result;
      carry = Math.floor(carry / 10);
    }
  
    return result;
  }
  