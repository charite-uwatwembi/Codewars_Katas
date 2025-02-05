// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1


function nextBiggerNumber(n) {
    let digits = n.toString().split('');
  
    // Step 1: Find the pivot (rightmost digit that is smaller than its next digit)
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
    }
  
    // If no pivot is found, return -1 (already the largest permutation)
    if (i < 0) return -1;
  
    // Step 2: Find the smallest digit to the right of the pivot that is larger than the pivot
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }
  
    // Step 3: Swap the pivot with this smallest larger digit
    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    // Step 4: Reverse the digits to the right of the pivot to get the smallest possible number
    let left = digits.slice(0, i + 1);
    let right = digits.slice(i + 1).reverse();
  
    return parseInt(left.concat(right).join(''), 10);
  }
  
  // Test cases
  console.log(nextBiggerNumber(12)); // 21
  console.log(nextBiggerNumber(513)); // 531
  console.log(nextBiggerNumber(2017)); // 2071
  console.log(nextBiggerNumber(9)); // -1
  console.log(nextBiggerNumber(111)); // -1
  console.log(nextBiggerNumber(531)); // -1
  