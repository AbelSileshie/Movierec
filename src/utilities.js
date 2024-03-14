export function average(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }
  
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
  }
  