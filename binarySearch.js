
/*
Binary search is a technique for very rapidly searching a sorted collection by 
cutting the search space in half at every pass. This is a simple binary search 
program taking in a sorted array and the search target as inputs. 

This program will first  determine the max number of midpoints required. This 
program will return null if the target number is not found.

*/

function maxGuess(arr) {
    for (var b = 0; b < arr.length; b++) {
        if  (Math.pow(2,b) > arr.length) {
            return b
        }
    }
}


function binarySearch(arr, num) {
    var midpoint = Math.floor((arr.length)/2); 
    for (var i = 0; i <= maxGuess(arr); i++) {
        if (num == arr[midpoint]){
            return midpoint
        }
        else if (num < arr[midpoint] ) {
            midpoint = Math.floor(midpoint/2);         
        }
        else {
            midpoint = Math.floor((midpoint + arr.length)/2); 
        }
    }
    return null; 
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

console.log(assertEqual(binarySearch( [1, 3, 16, 22, 31, 33, 34], 31), 4, 'test1'));
console.log(assertEqual(binarySearch( [1, 5, 16, 31, 33, 34, 9999, 58347, 1003442323], 1), 0, 'test2'));
console.log(assertEqual(binarySearch( [1, 3, 16, 22, 31, 33, 34], 1000), null, 'test3'));