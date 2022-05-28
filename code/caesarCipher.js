const caesarCipher = (string) => {
  const stringToArray = string.split('');
  const charcodeArray = stringToArray.map(i => i.charCodeAt());
  const cipherArray = charcodeArray.map(i => {
    if (i >= 65 && i <= 90) {
      // Deal with uppercase letters
      if ( i >= 78) {
         return String.fromCharCode(i - 13);
      } else if (i < 78) {
        return String.fromCharCode(i + 13);
      }
    } else if (i >= 97 && i <= 122) {
      // Deal with lowercase letters
      if ( i >= 110) {
         return String.fromCharCode(i - 13);
      } else if (i < 110) {
        return String.fromCharCode(i + 13);
      }
    } else {
      // Keep non letter characters the same
      return String.fromCharCode(i);
    }
  });
  return cipherArray.join('');
}
export default caesarCipher;
