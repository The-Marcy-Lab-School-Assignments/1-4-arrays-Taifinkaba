/** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */

const addToFrontOrBack = (arr, value, isFront) => {
  isFront ? arr.unshift(value) : arr.push(value);
};

const reverseString = (string) => {
  return string.split('').reverse('').join('');
};

const newArrayFullOf = (value, numOfValue) => {
  const updatedArr =  [];
  for(let i = 0; i < numOfValue; i++){
    updatedArr.push(value);
  }
  return updatedArr;
};

const insertIntoMiddle = (arr, value) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 0, value);
};

const deleteFromMiddle = (arr) => {
  const middle = Math.floor(arr.length / 2);
  arr.splice(middle, 1);
};

const isRightIndex = (arr, value, index) => {
    if(index < 0 || index >= arr.length){
      return false;
    }else{
      return arr[index] === value;
    }
};

const roundAllNumsDown = (arr) => {
  const down = [];
  for(let i = 0; i < arr.length; i++){
    down.push(Math.floor(arr[i]));
  }
  return down;
};
/** FEEDBACK: Great use of map! */
const getAllYCoordinates = (arrOfCoords) => {
  const newArr = arrOfCoords.map((y) => y[1]);
  return newArr;
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
