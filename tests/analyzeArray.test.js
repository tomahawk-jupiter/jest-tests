import analyzeArray from '../code/analyzeArray.js';

test('AnalyzeArray', () => {
  expect(analyzeArray([2,1,5,4,3])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
  expect(analyzeArray([21,12,5,4,30,5,2,6,8]).average).toBeCloseTo(10.3, 1);
  expect(analyzeArray([21,12,5,4,30,5,2,6,8]).min).toEqual(2);
  expect(analyzeArray([21,12,5,4,30,5,2,6,8]).max).toEqual(30);
  expect(analyzeArray([21,12,5,4,30,5,2,6,8]).length).toEqual(9);
});
