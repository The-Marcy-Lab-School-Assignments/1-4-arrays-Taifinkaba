const uppercaseAll = (...word1) => {
    return word1.map(word2 => word2.toUpperCase());
};

const destructureCoordinates = ([x, y]) => {
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
