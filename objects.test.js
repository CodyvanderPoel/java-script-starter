const objects = require("./objects.js");

describe("arrayToObject", function() {
    test('[1, 2, 3] becomes { "0": 1, "1": 2, "2": 3 }', function() {
        expect(objects.arrayToObject([1, 2, 3])).toEqual({
            "0": 1,
            "1": 2,
            "2": 3
        });
    });

    test('["test"] becomes { "0": "test" }', function() {
        expect(objects.arrayToObject(["test"])).toEqual({ "0": "test" });
    });

    test("[] becomes {}", function() {
        expect(objects.arrayToObject([])).toEqual({});
    });
});

describe("readInventory", function() {
    test("the empty string should produce an empty inventory", function() {
        expect(objects.readInventory("")).toEqual({});
    });

    test("soft drink example", function() {
        expect(
            objects.readInventory("Coke\t0.40\t1.00\nTab\t0.54\t1.49")
        ).toEqual({
            Coke: { name: "Coke", paid: 0.4, charging: 1.0 },
            Tab: { name: "Tab", paid: 0.54, charging: 1.49 }
        });
    });

    test("chips, pizza, and coke", function() {
        expect(
            objects.readInventory(
                "Chips\t0.5\t1.25\nPizza\t3.00\t5.00\nCoke\t0.4\t1.0"
            )
        ).toEqual({
            Chips: { name: "Chips", paid: 0.5, charging: 1.25 },
            Pizza: { name: "Pizza", paid: 3.0, charging: 5.0 },
            Coke: { name: "Coke", paid: 0.4, charging: 1.0 }
        });
    });
});

describe("isDollarStore", function() {
    test("a store without any items is a dollar store", function() {
        expect(objects.isDollarStore({})).toEqual(true);
    });

    test("a store with items above $1 is not a dollar store", function() {
        expect(
            objects.isDollarStore({
                Regular: { name: "Regular", price: 2.1, quantity: 500 },
                "Mid Grade": { name: "Mid Grade", price: 2.4, quantity: 350 },
                Premium: { name: "Premium", price: 2.7, quantity: 400 }
            })
        ).toEqual(false);
    });

    test("a store with any items above $1 is not a dollar store", function() {
        expect(
            objects.isDollarStore({
                Chips: { name: "Chips", price: 0.75, quantity: 24 },
                Coke: { name: "Coke", price: 0.6, quantity: 12 },
                Car: { name: "Car", price: 6000.0, quantity: 1 }
            })
        ).toEqual(false);
    });

    test("a store with all items <= $1 is a dollar store", function() {
        expect(
            objects.isDollarStore({
                Chips: { name: "Chips", price: 0.75, quantity: 24 },
                Coke: { name: "Coke", price: 0.6, quantity: 12 },
                Can: { name: "Can", price: 0.06, quantity: 1 }
            })
        ).toBe(true);
    });
});

describe("Movie", function() {
    test("has a title, director, genre, and cast list", function() {
        const m = new objects.Movie(
            "some title",
            "a director",
            "summer flick",
            ["some", "actors", "and", "actresses"]
        );
        expect(m.title).toEqual("some title");
        expect(m.director).toEqual("a director");
        expect(m.genre).toEqual("summer flick");
        expect(m.cast).toEqual(["some", "actors", "and", "actresses"]);
    });

    test("can be turned into a human-readable string", function() {
        const m = new objects.Movie(
            "some title",
            "a director",
            "summer flick",
            ["some", "actors", "and", "actresses"]
        );
        expect(m.toString()).toEqual(
            "Title: some title\n" +
                "Director: a director\n" +
                "Genre: summer flick\n" +
                "Cast:\n" +
                "- some\n" +
                "- actors\n" +
                "- and\n" +
                "- actresses"
        );
    });

    test("equals another movie with the same attributes", function() {
        expect(
            new objects.Movie("a", "b", "c", ["d", "e", "f"]).equals(
                new objects.Movie("a", "b", "c", ["d", "e", "f"])
            )
        ).toEqual(true);
    });

    test("doesn't equal another movie with the different attributes", function() {
        expect(
            new objects.Movie("a", "b", "c", ["d", "e", "f"]).equals(
                new objects.Movie("g", "h", "i", ["d", "e", "f"])
            )
        ).toEqual(false);
    });
});

describe("FMDB", function() {
    const movies = [
        new objects.Movie("title1", "dir1", "genre1", ["a1", "a2", "a3"]),
        new objects.Movie("title2", "dir2", "genre1", ["a3", "a2", "a4"]),
        new objects.Movie("title3", "dir1", "genre2", ["a2", "a4"])
    ];
    const fmdb = new objects.FMDB(movies);

    test("has a list of movies", function() {
        expect(fmdb.movies).toEqual(movies);
    });

    describe("searcing by cast member", function() {
        test("a1 was only in title1", function() {
            expect(fmdb.moviesByCastMember("a1")).toEqual([movies[0]]);
        });

        test("a2 was in all 3 titles", function() {
            expect(fmdb.moviesByCastMember("a2")).toEqual(movies);
        });

        test("nate has never been in a movie", function() {
            expect(fmdb.moviesByCastMember("nate")).toEqual([]);
        });
    });

    describe("searching by director", function() {
        test("dir1 directected title1 and title3", function() {
            expect(fmdb.moviesByDirector("dir1")).toEqual([
                movies[0],
                movies[2]
            ]);
        });

        test("dir2 directed title2", function() {
            expect(fmdb.moviesByDirector("dir2")).toEqual([movies[1]]);
        });

        test("nate has never directed a movie", function() {
            expect(fmdb.moviesByDirector("nate")).toEqual([]);
        });
    });
});
