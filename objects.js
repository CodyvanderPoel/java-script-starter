// (Array) -> Object
// Takes an array and returns and object where each key is the index of the
// array and each value is the value.
// Example: [1, 2, 3] -> { "0": 1, "1": 2, "2": 3 }
function arrayToObject(arr) {
    var dict = {};
    for (var i = 0; i < arr.length; i++) {
        dict[i] = arr[i];
    }
    return dict;
}

// (String) -> Object
// Return a dictionary of  inventory items encoded in the provided string.
// An Item is an object with 3 keys:
//     - 'name'
//     - 'paid' - price we paid
//     - 'charging' - price we're charging
// The provided string seperates each item with a newline and each piece of an
// item with a tab.
function readInventory(inventoryStr) {}

// (Object) -> Bool
// Takes input in the same format as the output of "readInventory" and returns
// true if there are no items that cost more than $1.
function isDollarStore(inventory) {}

function Movie(title, director, genre, cast) {}

function FMDB(movies) {}

exports.arrayToObject = arrayToObject;
exports.readInventory = readInventory;
exports.isDollarStore = isDollarStore;
exports.Movie = Movie;
exports.FMDB = FMDB;
