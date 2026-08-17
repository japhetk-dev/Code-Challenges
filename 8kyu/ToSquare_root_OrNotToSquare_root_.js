function squareOrSquareRoot(array) {
  return array.map(num => {
    const sqrt = Math.sqrt(num);
    return Number.isInteger(sqrt) ? sqrt : num * num;
  });
}
console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1])); 