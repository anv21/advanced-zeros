module.exports = function getZerosCount(number, base) {
  let dividers = {};

  let i = 2;
  while (i <= base) {
    if (base % i === 0) {
      if (dividers[i] === undefined) {
        dividers[i] = 0;
      }
      dividers[i] += 1;
      base = Math.round(base / i);
    } else {
      i += 1;
    }
  }

  const solutions = Object.keys(dividers).map((d) => {
    let r = 0;
    let n = number;
    while(n >= 1) {
      n = Math.floor(n / d);
      r += n;
    }
    return Math.floor(r / dividers[d]);
  });

  return Math.min(...solutions);
};