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
console.log(dashatize(6815));
console.log(dashatize(13579));
console.log(dashatize(2468));
console.log(dashatize(0));
