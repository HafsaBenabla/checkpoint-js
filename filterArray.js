function filterArray(arr) {
    result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push(arr[i]);
        }
    }
    return result
}
console.log(filterArray([2, 8, 6, 5, 0, 3, 1]));