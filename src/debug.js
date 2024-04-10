/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  for(let i = arr.length - 1; i >= 0; i--){
    arr.splice(i, 1);
  }
};

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
