// In this example you have to validate if a user input string is alphanumeric. 
//The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / or underscore

function alphanumeric(string){
    //your code here
    if (string === "") {
        return false;
    }
    let validate = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}|:<>?";
    for (let i = 0; i < string.length; i++) {
        if (!validate.includes(string[i])) {
            return false;
        }
    }
    return true;

  }
  console.log(alphanumeric("1"))
  console.log(alphanumeric(""))
  console.log(alphanumeric("charite"))
  console.log(alphanumeric("char1t3"))
  console.log(alphanumeric("ch@r!t3"))