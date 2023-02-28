const array = [1, 2, 2, 3, 3, 3]

Array.prototype.unique = function() {
    let outArr = []
    this.forEach((ele) => {
        if (!outArr.includes(ele)) {
            outArr.push(ele);
        }
    })
    return outArr;
}

array.unique();