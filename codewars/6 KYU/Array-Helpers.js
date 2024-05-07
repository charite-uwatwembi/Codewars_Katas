// This kata is designed to test your ability to extend the functionality of built-in classes. In this case,
// we want you to extend the built-in Array class with the following methods: 
//square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

class arrayHelpers {
    constructor(arr){
        this.arr= arr.slice()
    }
    getIt(){
        return `This is a copy of the original array :[${this.arr}]`
    }
    square(){
        return this.arr.map(x=>x*x)
    }
    cube(){
        return this.arr.map(x=> x * x * x)
    }
    average(){
        return this.arr.reduce((a,b)=>a + b)/this.arr.length
    }
    sum(){
        return this.arr.reduce((a,b)=>a + b)
    }
    even(){
        return this.arr.filter(x => x % 2 === 0)
    }
    odd(){
        return this.arr.filter(x => x % 2 !== 0)
    }
}
let arr2 = new arrayHelpers([1,2,3])
console.log(arr2.getIt())
console.log(arr2.square())
console.log(arr2.cube())
console.log(arr2.average())
console.log(arr2.sum())
console.log(arr2.even())
console.log(arr2.odd())


// Extend the Array class with new methods
//The Object.assign method is used to extend the Array.prototype object with new methods.
// Each method defined in the object passed to Object.assign becomes a new method available on all arrays.
Object.assign(Array.prototype, {
    square() {
        return this.map(x => x * x);
    },
    cube() {
        return this.map(x => x * x * x);
    },
    average() {
        if (this.length === 0) return NaN;
        return this.reduce((a, b) => a + b) / this.length;
    },
    sum() {
        return this.reduce((a, b) => a + b);
    },
    even() {
        return this.filter(x => x % 2 === 0);
    },
    odd() {
        return this.filter(x => x % 2 !== 0);
    }
});



let arr1 = [1, 2, 3];
console.log(arr1.square());
console.log(arr1.cube());
console.log(arr1.average());
console.log(arr1.sum());
console.log(arr1.even());
console.log(arr1.odd());


