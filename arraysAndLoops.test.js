var ll = require("./arraysAndLoops.js");

describe("lastThree", function() {
    test("lastThree of [1, 2, 3] should be [1, 2, 3]", function() {
        expect(ll.lastThree([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test("lastThree of [1, 2, 3, 4] should be [2, 3, 4]", function() {
        expect(ll.lastThree([1, 2, 3, 4])).toEqual([2, 3, 4]);
    });

    test("lastThree of [] should be []", function() {
        expect(ll.lastThree([])).toEqual([]);
    });

    test("lastThree of [1, 2] should be [1, 2]", function() {
        expect(ll.lastThree([1, 2])).toEqual([1, 2]);
    });

    test("lastThree of [5, 4, 3, 2] should be [4, 3, 2]", function() {
        expect(ll.lastThree([5, 4, 3, 2])).toEqual([4, 3, 2]);
    });
});

describe("sum", function() {
    test("sum of [1, 2, 3] should be 6", function() {
        expect(ll.sum([1, 2, 3])).toEqual(6);
    });

    test("sum of [] should be 0", function() {
        expect(ll.sum([])).toEqual(0);
    });
});

describe("sumOfLonger", function() {
    test("sumOfLonger between [] and [1] should be 1", function() {
        expect(ll.sumOfLonger([], [1])).toEqual(1);
    });

    test("sumOfLonger between [1] and [1] should be 2", function() {
        expect(ll.sumOfLonger([1], [1])).toEqual(2);
    });

    test("sumOfLonger between [2] and [1] should be 3", function() {
        expect(ll.sumOfLonger([2], [1])).toEqual(3);
    });

    test("sumOfLonger between [2, 2] and [1] should be 4", function() {
        expect(ll.sumOfLonger([2, 2], [1])).toEqual(4);
    });

    test("sumOfLonger between [1, 2, 3] and [1] should be 6", function() {
        expect(ll.sumOfLonger([1, 2, 3], [1])).toEqual(6);
    });

    test("sumOfLonger between [1, 2, 3], [1, 2, 3 and 4] should be 10", function() {
        expect(ll.sumOfLonger([1, 2, 3], [1, 2, 3, 4])).toEqual(10);
    });
});

describe("arrayEquals", function() {
    test("[1, 2, 3] equals [1, 2, 3]", function() {
        expect(ll.arrayEquals([1, 2, 3], [1, 2, 3])).toEqual(true);
    });

    test("[] equals []", function() {
        expect(ll.arrayEquals([], [])).toEqual(true);
    });

    test("[1] does not equal [1, 2]", function() {
        expect(ll.arrayEquals([1], [1, 2])).toEqual(false);
    });
});

describe("differenceFromMinimum", function() {
    test("differenceFromMinimum for [260.0, 195.0, 390.0] should be [65.0, 0.0, 195.0]", function() {
        expect(ll.differenceFromMinimum([260.0, 195.0, 390.0])).toEqual([
            65.0,
            0.0,
            195.0
        ]);
    });

    test("differenceFromMinimum for [650.0, 65.0, 2080.0] should be [585.0, 0.0, 2015.0]", function() {
        expect(ll.differenceFromMinimum([650.0, 65.0, 2080.0])).toEqual([
            585.0,
            0.0,
            2015.0
        ]);
    });
});

describe("hashtags", function() {
    test("hashtags('#python is #totes the best.') should be ['#python', '#totes']", function() {
        expect(ll.hashtags("#python is #totes the best.")).toEqual([
            "#python",
            "#totes"
        ]);
    });

    test("hashtags('@nate ... who says #totes') should be ['#totes']", function() {
        expect(ll.hashtags("@nate ... who says #totes")).toEqual(["#totes"]);
    });

    test("hashtags('@SomeFashionStore is having a #FireSale on trendy #Totes') should be ['#FireSale', '#Totes']", function() {
        expect(
            ll.hashtags(
                "@SomeFashionStore is having a #FireSale on trendy #Totes"
            )
        ).toEqual(["#FireSale", "#Totes"]);
    });
});

describe("mentions", function() {
    test("mentions('#python is #totes the best.') should be []", function() {
        expect(ll.mentions("#python is #totes the best.")).toEqual([]);
    });

    test("mentions('@nate ... who says #totes') should be ['@nate']", function() {
        expect(ll.mentions("@nate ... who says #totes")).toEqual(["@nate"]);
    });

    test("mentions('@SomeFashionStore is having a #FireSale on trendy #Totes') should be ['@SomeFashionStore']", function() {
        expect(
            ll.mentions(
                "@SomeFashionStore is having a #FireSale on trendy #Totes"
            )
        ).toEqual(["@SomeFashionStore"]);
    });
});

describe("parseInventoryString", function() {
    test("parseInventoryString('Coke\\t0.40\\t1.00') should be ['Coke', 0.4, 1.0]", function() {
        expect(ll.parseInventoryString("Coke\t0.40\t1.00")).toEqual([
            "Coke",
            0.4,
            1.0
        ]);
    });

    test("parseInventoryString('Tab\\t0.54\\t1.49') should be ['Tab', 0.54, 1.49]", function() {
        expect(ll.parseInventoryString("Tab\t0.54\t1.49")).toEqual([
            "Tab",
            0.54,
            1.49
        ]);
    });

    test("parseInventoryString('Pepsi\\t1\\t1.49') should be ['Pepsi', 1.0, 1.49]", function() {
        expect(ll.parseInventoryString("Pepsi\t1\t1.49")).toEqual([
            "Pepsi",
            1.0,
            1.49
        ]);
    });
});
