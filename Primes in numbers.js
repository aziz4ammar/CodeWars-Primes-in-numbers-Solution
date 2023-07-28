function primeFactors(n) {
    let result = '';
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor === 0) {
        let count = 0;
        while (n % divisor === 0) {
          n /= divisor;
          count++;
        }
        result += `(${divisor}${count > 1 ? `**${count}` : ''})`;
      }
  
      divisor++;
    }
  
    return result;
  }
  