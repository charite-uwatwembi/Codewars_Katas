// The objective is to return all pairs of integers from a given array 
//of integers that have a difference of 2.

// The result array should be sorted in ascending order of values.

// Assume there are no duplicate integers in the array.
// The order of the integers in the input array should not matter.
//[1, 2, 3, 4]  should return [[1, 3], [2, 4]]



function twosDifference(input) {
    let result = [];
    input.sort((a, b) => a - b);
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[j] - input[i] === 2) {
                result.push([input[i], input[j]]);
            }
        }
    }
    return result;
}

console.log(twosDifference([1, 2, 3, 4])); // Output: [[1, 3], [2, 4]]
