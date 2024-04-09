const addToFrontOrBack = (arr, value, isFront) => {
  isFront === true ? arr.unshift(value) : arr.push(value);
};
// console.log(addToFrontOrBack([1,2,3,4,5],6,true));

const reverseString = (string) => {
  return string.split('').reverse('').join('');
};
//  console.log(reverseString("Tai"));

const newArrayFullOf = (value, numOfValue) => {
  const updatedArr =  [];
  for(let i = 0; i < numOfValue; i++){
    updatedArr.push(value);

  }
  return updatedArr;
};
// console.log(newArrayFullOf(1,5));

const insertIntoMiddle = (arr, value) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 0, value);
  // return arr;
};
// console.log(insertIntoMiddle([1,2,3],"Tai"));

const deleteFromMiddle = (arr) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 1);
  // return arr;
};
// console.log(deleteFromMiddle(1,2,3));

const isRightIndex = (arr, value, index) => {
};

const roundAllNumsDown = (arr,) => {
};

const getAllYCoordinates = (arrOfCoords) => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
