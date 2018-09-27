// (Array) -> Object
// Takes an array and returns and object where each key is the index of the
// array and each value is the value.
// Example: [1, 2, 3] -> { "0": 1, "1": 2, "2": 3 }
function arrayToObject(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}

// (String) -> Object
// Return a dictionary of  inventory items encoded in the provided string.
// An Item is an object with 3 keys:
//     - 'name'
//     - 'paid' - price we paid
//     - 'charging' - price we're charging
// The provided string seperates each item with a newline and each piece of an
// item with a tab.
function readInventory(inventoryStr) {
    var str = inventoryStr.split("\n");
    var obj = {};
    if (inventoryStr.length > 0) {
        for (var i = 0; i < str.length; i++) {
            var inv = str[i].split("\t");
            var item = inv[0];
            var pay = Number(inv[1]);
            var charge = Number(inv[2]);
            obj[item] = {
                name: item,
                paid: pay,
                charging: charge
            };
        }
    } else {
        return obj;
    }
    return obj;
}

// (Object) -> Bool
// Takes input in the same format as the output of "readInventory" and returns
// true if there are no items that cost more than $1.
function isDollarStore(inventory) {
    for (let i of Object.keys(inventory)) {
        if (inventory[i].price > 1) {
            return false;
        }
    }
    return true;
}

function Movie(title, director, genre, cast) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.cast = cast;
}

Movie.prototype.toString = function() {
    return (
        "Title: " +
        this.title +
        "\n" +
        "Director: " +
        this.director +
        "\n" +
        "Genre: " +
        this.genre +
        "\n" +
        "Cast:\n- " +
        this.cast.join("\n- ")
    );
};
Movie.prototype.equals = function(otherMovie) {
    var ll = require("./arraysAndLoops.js");
    if (
        this.title === otherMovie.title &&
        this.director === otherMovie.director &&
        this.genre === otherMovie.genre &&
        ll.arrayEquals(this.cast, otherMovie.cast) === true
    ) {
        return true;
    } else {
        return false;
    }
};

function FMDB(movies) {
    
}

exports.arrayToObject = arrayToObject;
exports.readInventory = readInventory;
exports.isDollarStore = isDollarStore;
exports.Movie = Movie;
exports.FMDB = FMDB;
