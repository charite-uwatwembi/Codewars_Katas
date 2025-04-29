// Given positive integers a and b as strings, evaluate a / b and return the quotient and the remainder as strings in the form [quotient, remainder].

// a and b can be very large (at the order of 10^150 to 10^200)
// As usual, your result should not have leading 0s
// require is disabled in JavaScript. Do it yourself ;-)

function divideStrings(a, b) {
    if (b === "0") throw new Error("Division by zero");
  
    function compare(x, y) {
      if (x.length !== y.length) return x.length - y.length;
      return x.localeCompare(y);
    }
  
    function subtract(x, y) {
      let res = '';
      let carry = 0;
      x = x.split('').reverse();
      y = y.padStart(x.length, '0').split('').reverse();
  
      for (let i = 0; i < x.length; i++) {
        let digit = parseInt(x[i]) - parseInt(y[i]) - carry;
        if (digit < 0) {
          digit += 10;
          carry = 1;
        } else {
          carry = 0;
        }
        res = digit.toString() + res;
      }
      return res.replace(/^0+/, '') || '0';
    }
  
    function multiply(y, digit) {
      let res = '';
      let carry = 0;
      digit = parseInt(digit);
      y = y.split('').reverse();
  
      for (let i = 0; i < y.length; i++) {
        let product = parseInt(y[i]) * digit + carry;
        res = (product % 10).toString() + res;
        carry = Math.floor(product / 10);
      }
  
      if (carry > 0) res = carry.toString() + res;
      return res.replace(/^0+/, '') || '0';
    }
  
    let quotient = '';
    let remainder = '';
  
    for (let i = 0; i < a.length; i++) {
      remainder += a[i];
      remainder = remainder.replace(/^0+/, '') || '0';
  
      // Try digits 9 to 0
      let qDigit = 0;
      for (let d = 9; d >= 0; d--) {
        let prod = multiply(b, d.toString());
        if (compare(remainder, prod) >= 0) {
          qDigit = d;
          remainder = subtract(remainder, prod);
          break;
        }
      }
  
      quotient += qDigit.toString();
    }
  
    quotient = quotient.replace(/^0+/, '') || '0';
    remainder = remainder.replace(/^0+/, '') || '0';
  
    return [quotient, remainder];
  }
  
  
  // Example usage:
  console.log(divideStrings("123456789123456789123456789", "123456789")); 
  // Output: ['1000000001000000001', '0']
  