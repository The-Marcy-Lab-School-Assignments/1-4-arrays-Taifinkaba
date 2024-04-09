const addToFrontOrBack = (arr, value, isFront) => {
  isFront === true ? arr.unshift(value)  : arr.push(value);
};
// console.log(addToFrontOrBack([1,2,3,4,5],6,true));

const reverseString = (string) => {
  return string.split('').reverse('').join('');
};
//  console.log(reverseString("Tai"));

const newArrayFullOf = (value, numOfValue) => {
  const updatedArr =  [];
  for(let i = 0; i < numOfValue; i++){
    
  }
};

const insertIntoMiddle = (arr, value) => {
};

const deleteFromMiddle = (arr) => {
};

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
