// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains 
//the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.


function nextSmaller(n) {
    let digits = n.toString().split('');
    let i = digits.length - 2;
    
    // Find the rightmost digit which is larger than its next digit
    while (i >= 0 && digits[i] <= digits[i + 1]) {
        i--;
    }
    
    // If no such digit is found, return -1
    if (i === -1) return -1;
    
    // Find the largest digit to the right of 'i' that is smaller than digits[i]
    let j = digits.length - 1;
    while (digits[j] >= digits[i]) {
        j--;
    }
    
    // Swap the found digits
    [digits[i], digits[j]] = [digits[j], digits[i]];
    
    // Sort the part after index 'i' in descending order
    let left = digits.slice(0, i + 1);
    let right = digits.slice(i + 1).sort((a, b) => b - a);
    
    let result = parseInt(left.concat(right).join(''));
    
    // Ensure the number does not have leading zeros
    return result.toString().length === digits.length ? result : -1;
}

// Test cases
console.log(nextSmaller(21));    // 12
console.log(nextSmaller(531));   // 513
console.log(nextSmaller(2071));  // 2017
console.log(nextSmaller(9));     // -1
console.log(nextSmaller(111));   // -1
console.log(nextSmaller(135));   // -1
console.log(nextSmaller(1027));  // -1
