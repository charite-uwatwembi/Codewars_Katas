// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// function alphabetPosition(text) {
//     let newOne = text.split('')
//     let result = []
//     for(let i=0;i<newOne.length;i++){
//         let letter = newOne[i].toLocaleLowerCase()//convert to lower case
//         if(letter >='a' && letter<='z'){//check if it is a letter
//         let position= letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1//convert letter to number
//         result.push(position)
//     }
//     }
//     return result.join(',')
//   }

function alphabetPosition (text)
{
    return [...text].map(el => 'abcdefghijklmnopqrstuvwxyz'.indexOf(el) != -1 ? 'abcdefghijklmnopqrstuvwxyz'.indexOf(el) + 1 : el).join``

}  console.log(alphabetPosition("abc"));
  console.log(alphabetPosition("n+bk$&;{"));