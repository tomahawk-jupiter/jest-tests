const analyzeArray = (array) => {
  const length = array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const average = array.reduce((a, b) => a + b, 0) / length;

  return { average, min, max, length};
}

export default analyzeArray;
