
/*
This linear search searches for the index of a given target in an array. 
This will return -1 if not found. While simple to understand, it is very inefficient.
*/



function linearSearch(arr, num) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == num) {
            return i; 
        }
    }
    return -1; 
}

// Tests

function assertEqual(actual, expected, testName) {
    if (actual == expected) {
        return (testName + " passed!")
    }
    else {
        return (testName + " failed.")
    }
}

console.log(assertEqual(linearSearch( [1, 3, 16, 22, 31, 33, 34], 31), 4, 'test1'));
console.log(assertEqual(linearSearch( [1, 5, 16, 31, 33, 34, 9999, 58347, 1003442323], 1), 0, 'test2'));
console.log(assertEqual(linearSearch( [1, 3, 16, 22, 31, 33, 34], 1000), -1, 'test3'));