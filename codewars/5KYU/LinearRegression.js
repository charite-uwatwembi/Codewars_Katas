function costFunctionJ(trainingSet, theta1, theta2) {
    let sum = 0;
    let m = trainingSet.length;
    
    for (let i = 0; i < m; i++) {
      let x = trainingSet[i][0];
      let y = trainingSet[i][1];
      let h = theta1 + theta2 * x;
      sum += Math.pow(h - y, 2);
    }
    
    let result = (1 / (2 * m)) * sum;
    return Math.round(result * 1000) / 1000;  // Rounds to three decimal places without using toFixed
  }

  console.log(costFunctionJ([[1, 2], [2, 4], [3, 6]], 1, 1))  