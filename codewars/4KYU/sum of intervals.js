function sumIntervals(intervals) {
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    let mergedIntervals = [];
    
    // Merge overlapping intervals
    for (let interval of intervals) {
      // If mergedIntervals is empty or there is no overlap
      if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < interval[0]) {
        mergedIntervals.push(interval);
      } else {
        // There is an overlap, merge the intervals
        mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
      }
    }
  
    // Sum up the lengths of merged intervals
    let totalLength = 0;
    for (let interval of mergedIntervals) {
      totalLength += interval[1] - interval[0];
    }
  
    return totalLength;
  }
  