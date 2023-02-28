const arr = [4, 9, 16, 25]; // * 2 => [2, 3, 4, 5]

Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

// arr.myEach(ele => console.log(ele));


Array.prototype.myMap = function(callback) {
  let outArr = [];
  this.myEach(ele => outArr.push(callback(ele)));
  return outArr;
  // for (let i = 0; i < this.length; i++ ) {
    //   outArr.push(callback(this[i]));
    // }
  
  // return outArr.push(callback(arr.myEach))

}

// arr.myMap(ele => console.log(Math.sqrt(ele)));

Array.prototype.myReduce = function(callback, initVal) {
  let arr = this;

  if (initVal === undefined) {
    initVal = arr[0];
    arr = arr.slice[1];
  }
  let result = initVal;
  arr.myEach(ele => result = callback(result, ele));
  return result;
}

arr.myReduce(function(acc, el) {
  return acc + el;
}, 5);
