// Your task is to write a function that does just what the title suggests (so, fair warning, be aware that you are not getting out of it just throwing a lame bas sorting method there) with a list of integers and the expected number n of smallest elements to return.

// Also:

// the number of elements to be returned cannot be higher than the list length;
// elements can be duplicated;
// in case of duplicates, just return them according to the original order (see third example for more clarity).
// Same examples and more in the test cases:

// Array	N	Expected
// [1, 2, 3, 4, 5]	3	[1, 2, 3]
// [5, 4, 3, 2, 1]	3	[3, 2, 1]
// [1, 2, 3, 4, 1]	3	[1, 2, 1]
// [1, 2, 3, -4, 0]	3	[1, -4, 0]
// [1, 2, 3, 4, 5]	0	[]

function firstNSmallest(array, n){
    const sorted = [...array].sort((a,b)=>a-b).slice(0,n)
    const final = []
    array.forEach(elt => {
        if(final.length < sorted.length && sorted.includes(elt)) {
            final.push(elt)
            sorted.splice(sorted.indexOf(elt),1)
        }
        
    });
    return final
  }


  console.log(firstNSmallest( [1, -1, -2, 7, -10, -2, 4],1))
