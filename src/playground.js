// const { clearArr, getFirstItem } = require('./debug');
// const {
//   addToFrontOrBack,
//   reverseString,
//   newArrayFullOf,
//   insertIntoMiddle,
//   deleteFromMiddle,
//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');

let name = "mike";
const changeName = (nameToChange) => {
  nameToChange = "tom";
};
changeName(name);
console.log(name);
const favoriteLocations = ["New York City", "Jersey City"];
const addBostonToFavorites = (locations) => {
  locations.unshift("Boston");
};
addBostonToFavorites(favoriteLocations);
console.log(favoriteLocations);