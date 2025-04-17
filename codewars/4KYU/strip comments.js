function solution(text, markers) {
    return text
      .split('\n')
      .map(line => {
        for (let marker of markers) {
          if (line.includes(marker)) {
            line = line.split(marker)[0];
          }
        }
        return line.trimEnd();
      })
      .join('\n');
  }
  
  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
  console.log(result);
  // Output:
  // apples, pears
  // grapes
  // bananas
  