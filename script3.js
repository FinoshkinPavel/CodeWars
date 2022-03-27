function mergeArrays(arr1, arr2) {
    let totalArr = arr1.concat(arr2);
    let filtrTotalArr = totalArr.filter((i, add) => {
        return totalArr.indexOf(i) === add;
    });
    return filtrTotalArr.sort(((a, b) => a - b));
}
console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]))
//mergeArrays([1,2,3,4], [5,6,7,8]) //[1,2,3,4,5,6,7,8]
//mergeArrays([1,3,5,7,9], [10,8,6,4,2]) [1,2,3,4,5,6,7,8,9,10]
//mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]