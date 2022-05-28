const reverseString = (word) => {
  const array = word.split('');
  const reverseArray = array.reverse();
  const reversedString = reverseArray.join('');
  return reversedString;
}

export default reverseString;
