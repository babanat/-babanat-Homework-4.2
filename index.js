const number = 369;
const numberToString = number.toString();
const stringToArray = numberToString.split('').map(Number)
const allSame = stringToArray.every(element => element === stringToArray[0])
const duplicates = stringToArray.some((number, index) => stringToArray.indexOf(number) !== index);
console.log(`Has same numbers: ${allSame}
Has duplicates: ${duplicates}`);