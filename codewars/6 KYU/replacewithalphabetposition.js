// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let newOne = text.split('')
    let result = []
    for(let i=0;i<newOne.length;i++){
        let letter = newOne[i].toLocaleLowerCase()
        if(letter >='a' && letter<='z'){
        let position= letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1
        result.push(position)
    }
    }
    return result.join(',')
  }
  console.log(alphabetPosition("aBc"));