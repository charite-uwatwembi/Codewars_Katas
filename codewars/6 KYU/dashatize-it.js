function dashatize(num) {
    let arr = num.toString();
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { 
            
            if (i > 0 && result[result.length - 1] !== '-') {
                result.push('-');
            }
            result.push(arr[i]);
            if (i < arr.length - 1 && arr[i + 1] % 2 !== 0) {
                result.push('-');
            }
        } else {
            result.push(arr[i]);
        }
    }

    return result.join('');
}


console.log(dashatize(274));  
console.log(dashatize(6815));  // Output: '68-1-5'
console.log(dashatize(13579));  // Output: '1-3-5-7-9'
console.log(dashatize(2468));  // Output: '2468'
console.log(dashatize(0));  // Output: '0'
