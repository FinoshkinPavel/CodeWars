function maps(x) {
    let result = x.map(function (i, add, arr) {
        return i * 2;
    });
    return result;
}
console.log(maps([1, 2, 3]));
console.log(maps([4, 1, 1, 1, 4]));
console.log(maps([2, 2, 2, 2, 2, 2]));

//(maps([1, 2, 3]), [2, 4, 6]);
//(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
//(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);

