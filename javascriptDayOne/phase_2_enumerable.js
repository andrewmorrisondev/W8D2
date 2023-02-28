const arr = [1, 2, 3, 4]; // * 2 => [2, 4, 6, 8]

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    // function(callback[])
    callback(this[i]);
  }
}

// arr.myEach(ele => console.log(ele));


Array.prototype.myMap = function(callback) {
  let outArr = [];
  for (let i = 0; i < this.length; i++ ) {
    outArr.push(callback(this[i]));
  }
  return outArr;
}

arr.myMap(ele => Math.sqrt(ele));