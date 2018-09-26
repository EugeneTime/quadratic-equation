module.exports = function solveEquation(equation) {
  // for exapmle: 2 * x^2 - 10 * x + 12
  const parseEquation = equation.split(' ');
  const a = parseEquation[0]; // 2
  const b = parseEquation[3] + parseEquation[4]; // 10
  const c = parseEquation[7] + parseEquation[8]; // 12
  
  const d = b * b - 4 * a * c; // 4;
  
  const xOne = Math.round((-b + Math.sqrt(d)) / (2 * a)); // 2
  const xTwo = Math.round((-b - Math.sqrt(d)) / (2 * a)); // 3
  
  const solutions = [xOne, xTwo];
  return solutions.sort((xOne, xTwo) => xOne - xTwo);
}