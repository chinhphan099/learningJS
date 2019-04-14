var math = {
  add: function(a, b) {
    return a + b;
  },
  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a + b;
    })
  }
};

module.exports = math;
