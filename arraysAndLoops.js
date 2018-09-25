// (Array) -> Array
// Returns an array whose members are the last three members of the
// input array. If the array has less than 3 members returns the array.
function lastThree(arr) {
    if (arr.length > 3) {
        for (var i = 0; i < arr.length; i++) {
            return arr.slice(1);
        }
    } else {
        return arr;
    }
}

// (Array[Number]) -> Number
// Returns the sum of all members of the array.
function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// (Array[Number], Array[Number]) -> Number
// Returns the sum of the longer Array.
// If both Arrays are the same length, returns the sum of both Arrays.
// HINT: Use the sum function you wrote above.
function sumOfLonger(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return sum(arr1);
    } else if (arr1.length < arr2.length) {
        return sum(arr2);
    } else {
        return sum(arr1) + sum(arr2);
    }
}

// (Array, Array) -> Bool
// Returns true if the two arrays are identical (contain the same elements
// in the same order).
function arrayEquals(arr1, arr2) {
    if (arr1.length == 0 && arr2.length == 0) {
        return true;
    } else if (arr1.length === arr2.length) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                return true;
            } else {
                return false;
                break;
            }
        }
    } else {
        return false;
    }
}

// (Array[Number]) -> Array[Number]
// Returns the difference between each cost and the minimum cost.
//
// For example, if our options were [1, 3, 3, 2, 5].
// The minimum cost would be 1, and the differences from that
// minimum would be [0, 2, 2, 1, 4]
function differenceFromMinimum(costs) {
    var min = costs[1];
    for (var i = 0; i < costs.length; i++) {
        if (costs[i] < min[1]) {
            min = costs[i];
        }
    }
    for (var i = 0; i < costs.length; i++) {
        costs[i] -= min;
    }
    return costs;
}

// (String) -> Array[String]
// Returns the hashtags used in the provided tweet.
function hashtags(tweet) {
    var string = tweet.split(" ");
    var hash = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i].startsWith("#")) {
            hash.push(string[i]);
        }
    }
    return hash;
}

// (String) -> Array[String]
// Returns the mentions used in the provided tweet.
// HINT: Can you make a utility function that works for both hashtags
// and mentions?
function mentions(tweet) {
    var string = tweet.split(" ");
    var hash = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i].startsWith("@")) {
            hash.push(string[i]);
        }
    }
    return hash;
}

// (String) -> Array[String, Float, Float]
// Return an inventory item encoded in the provided string.
// An Item is a array of 3 elements:
//     - name
//     - price we paid
//     - price we're charging    return pieces;
// The provided string seperates each of these pieces with a tab.
function parseInventoryString(invStr) {
    var pieces = invStr.split("\t");
    var arr = [];
    for (var i = 0; i < pieces.length; i++) {
        arr[0] = pieces[0];
        arr[1] = Number(pieces[1]);
        arr[2] = Number(pieces[2]);
    }
    return arr;
}

exports.lastThree = lastThree;
exports.sum = sum;
exports.sumOfLonger = sumOfLonger;
exports.differenceFromMinimum = differenceFromMinimum;
exports.arrayEquals = arrayEquals;
exports.hashtags = hashtags;
exports.mentions = mentions;
exports.parseInventoryString = parseInventoryString;
