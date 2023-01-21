String.prototype.palindrome = function () {
  const trimmedString = this.toLowerCase().replace(/ /g, '');
  const revertedTrimmedString = trimmedString.split('').reverse().join('');
  console.log(trimmedString, revertedTrimmedString);
  trimmedString === revertedTrimmedString
    ? console.log(true)
    : console.log(false);
};
'Anita lava la tina'.palindrome();
'Dabale arroz a la zorra el abad'.palindrome();
'esto es una prueba'.palindrome();
