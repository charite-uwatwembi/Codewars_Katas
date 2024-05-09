function makeMeSlow() {
    // This function is too fast!
    for (let x = 0; x < 1000000; ++x) { }
  
    // Return a promise that resolves after 7 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Make me slow!');
      }, 7000); // 7000 milliseconds = 7 seconds
    });
  }
  
  // Usage
  makeMeSlow().then(message => {
    console.log(message); // This will log 'Make me slow!' after 7 seconds
  });
  