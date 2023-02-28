const array = [1, 2, 2, 3, 3, 3]

Array.prototype.unique = function() {
    let outArr = [];
    this.forEach((ele) => {
        if (!outArr.includes(ele)) {
            outArr.push(ele);
        }
    })
    return outArr;
}

array.unique();

const twoSumArr = [-2, 2, 1, 3, -5, 5] // [[0, 1], [4, 5]]

Array.prototype.twoSum = function() {
  let pairs = [];
  this.forEach((ele1, i1) => {
    this.forEach((ele2, i2) => {
      if (i2 > i1 && ele1 + ele2 === 0) {
        pairs.push([i1, i2]);
      }
    })
  })
  return pairs;
}

console.log(twoSumArr.twoSum());

