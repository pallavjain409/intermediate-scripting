const absolute = function(value) {
  return Math.abs(value);
};

Array.prototype.bubbleSort = function(comp = (a, b) => a - b) {
  let arr = this;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (comp(arr[i], arr[i + 1]) > 0) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
};

const sortByAbsoluteValue = function(arr) {
  if (!arr.length) {
    return;
  }
  arr.bubbleSort((a, b) => {
    if (absolute(a) == absolute(b)) {
      return a - b;
    } else {
      return absolute(a) - absolute(b);
    }
  });

  return arr;
};


// if we use simple predefined sort method code would look like this

const sortByAbsoluteValue2 = function(arr) {
    if (!arr.length) {
      return;
    }
    arr.sort((a, b) => {
      if (absolute(a) == absolute(b)) {
        return a - b;
      } else {
        return absolute(a) - absolute(b);
      }
    });
  
    return arr;
  };
  
  let arr = [0, -2, 2, -4, -1, -2]; // [ 0, -1, -2, -2, 2, -4 ]
  console.log(sortByAbsoluteValue2(arr));
