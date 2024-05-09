function makeMeSlow() {
    console.log('Function started');
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Function finished');
        resolve('Make me slow!');
      }, 7000); // 7000 milliseconds = 7 seconds
    });
  }
  
  // Usage
  makeMeSlow().then(message => {
    console.log(message); // This should log 'Make me slow!' after 7 seconds
  });
  