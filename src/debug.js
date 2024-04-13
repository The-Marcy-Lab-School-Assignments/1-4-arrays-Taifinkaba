/** FEEDBACK: Love that you did it this way, here is an alternate solution: 
 * arr.length = 0 
 * 
 */
/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  for(let i = arr.length - 1; i >= 0; i--){
    arr.splice(i, 1);
  }
};

const getFirstItem = (array) => {
  return array[0];
};

module.exports = {
  clearArr,
  getFirstItem,
};
