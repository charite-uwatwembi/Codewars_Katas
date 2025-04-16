function arrays(p) {
    const n = p * p + p + 1;
    const result = [];
  
    // Helper to map (x, y) to point ID (1-based)
    const pointId = (x, y) => x * p + y + 1;
  
    // Step 1: Add p * p lines with slope a and intercept b
    for (let a = 0; a < p; a++) {
      for (let b = 0; b < p; b++) {
        const line = [];
        for (let x = 0; x < p; x++) {
          const y = (a * x + b) % p;
          line.push(pointId(x, y));
        }
        line.push(p * p + 1 + a); // point at infinity for slope a
        result.push(line);
      }
    }
  
    // Step 2: Add p vertical lines (x = const)
    for (let x = 0; x < p; x++) {
      const line = [];
      for (let y = 0; y < p; y++) {
        line.push(pointId(x, y));
      }
      line.push(p * p + 1 + p); // point at infinity for vertical lines
      result.push(line);
    }
  
    // Step 3: Add final line: all points at infinity
    const lastLine = [];
    for (let i = 0; i <= p; i++) {
      lastLine.push(p * p + 1 + i);
    }
    result.push(lastLine);
  
    return result;
  }


  console.log(arrays(2));
