// (Number, Number) -> Number
// Returns the sum of a and b.
function add(a, b) {
    return a + b;
}

// (Number) -> Number
// Returns x multiplied by 2.
function double(x) {
    return x * 2;
}

// (Number, Number, Number) -> Number
// Returns the product of x, y, and z.
function multThree(x, y, z) {
    return x * y * z;
}

// (Int, Int, Int) -> Int
// Returns the total earnings provided the number of A, B, and C class seats sold.
// important information:
//     Class A seats cost $15.
//     Class B seats cost $12.
//     Class C seats cost $9.
function earnings(a, b, c) {
    return a * 15 + b * 12 + c * 9;
}

// (Bool, Bool) -> Bool
// Returns true if both x and y are true.
function both(x, y) {
    if (x && y) {
        return true;
    } else {
        return false;
    }
}

// (Int, Bool) -> String
// Returns 'walk' if the user should walk
// and 'drive' if the user should drive to their destination.
// The user should walk if it is nice weather
// and the distance is a quarter mile or less.
function walkOrDrive(miles, isNiceWeather) {
    if (miles <= 0.25 && isNiceWeather === true) {
        return "walk";
    } else {
        return "drive";
    }
}

// (Int, Number) -> String
// Return 'Densely Populated' if the land density is greater than 100,
// otherwise retuurn 'Sparsely Populated'.
function howPopulated(population, landArea) {
    var landDensity = population / landArea;
    if (landDensity > 100) {
        return "Densely Populated";
    } else {
        return "Sparsely Populated";
    }
}

// (Int) -> String
// Return the appropriate number of stars for the users score.
// Example: '***' means 3 stars.
// 1 stars for scores less than 1000 points
// 2 stars for scores less than 5000 points
// 3 stars for scores less than 8000 points
// 4 stars for scores less than 10000 points
// 5 stars for anything 10000+
function goldStars(points) {
    if (points < 1000) {
        return "*";
    } else if (points < 5000) {
        return "**";
    } else if (points < 8000) {
        return "***";
    } else if (points < 10000) {
        return "****";
    } else {
        return "*****";
    }
}

// (String) -> Int
// Returns the number of points for the corresponding
// scoring action in American football.
// An extra point kick is worth 1 point.
// An extra point conversion is worth 2 points.
// A safety is worth 2 points.
// A field goal is worth 3 points.
// A touchdown is worth 6 points.
function howManyPoints(scoringAction) {
    if (scoringAction === "extra kick") {
        return 1;
    } else if (scoringAction === "extra conv") {
        return 2;
    } else if (scoringAction === "safety") {
        return 2;
    } else if (scoringAction === "fg") {
        return 3;
    } else if (scoringAction === "td") {
        return 6;
    }
}

exports.add = add;
exports.double = double;
exports.multThree = multThree;
exports.both = both;
exports.walkOrDrive = walkOrDrive;
exports.howPopulated = howPopulated;
exports.goldStars = goldStars;
exports.howManyPoints = howManyPoints;
exports.earnings = earnings;
