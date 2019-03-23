//Object form

const obj = {
  0: {
    x: 7,
    y: 11,
    paths: [23, 1]
  },
  1: {
    x: 16,
    y: 11,
    paths: [0, 4]
  },
  2: {
    x: 7,
    y: 18,
    paths: [3, 7, 23]
  },
  3: {
    x: 7,
    y: 20,
    paths: [2, 4]
  },
  4: {
    x: 16,
    y: 20,
    paths: [5, 3, 1, 18]
  },
  5: {
    x: 16,
    y: 23,
    paths: [16, 6, 4]
  },
  6: {
    x: 11,
    y: 23,
    paths: [8, 5, 25]
  },
  7: {
    x: 4,
    y: 18,
    paths: [22, 8, 2]
  },
  8: {
    x: 4,
    y: 23,
    paths: [9, 7, 6]
  },
  9: {
    x: 4,
    y: 27,
    paths: [10, 8]
  },
  10: {
    x: 1,
    y: 27,
    paths: [24, 9]
  },
  11: {
    x: 1,
    y: 33,
    paths: [24, 12]
  },
  12: {
    x: 4,
    y: 33,
    paths: [11, 13]
  },
  13: {
    x: 4,
    y: 35,
    paths: [12, 14]
  },
  14: {
    x: 11,
    y: 35,
    paths: [15, 13]
  },
  15: {
    x: 11,
    y: 33,
    paths: [14, 25, 16]
  },
  16: {
    x: 16,
    y: 33,
    paths: [15, 5]
  },
  17: {
    x: 21,
    y: 24,
    paths: [18, 19]
  },
  18: {
    x: 21,
    y: 20,
    paths: [4, 17, 21]
  },
  19: {
    x: 30,
    y: 24,
    paths: [17]
  },
  20: {
    x: 30,
    y: 16,
    paths: [21]
  },
  21: {
    x: 21,
    y: 16,
    paths: [20, 18]
  },
  22: {
    x: 4,
    y: 14,
    paths: [7, 23]
  },
  23: {
    x: 7,
    y: 14,
    paths: [22, 0, 2]
  },
  24: {
    x: 1,
    y: 30,
    paths: [11, 10, 25]
  },
  25: {
    x: 4,
    y: 14,
    paths: [15, 24, 6]
  }
}

//Array form

var arr = [];
for (var key in obj) if (obj.hasOwnProperty(key)) arr.push({
  x:obj[key].x,
  y:obj[key].y,
  points:obj[key].points,
  id:parseInt(key)
});

//Exports

module.exports.obj = obj;
module.exports.arr = arr;
