import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz.js";

describe("fizzbuzz", () => {
    // it("Should be a function", () => {
    //     expect(typeof fizzbuzz).toBe("function");
    // });

    // it("Should throw an error if not a number provided as args", () => {
    //     expect(() => fizzbuzz()).toThrow();
    // });

    // it("Should throw a specific error if not a number provided as args", () => {
    //     expect(() => fizzbuzz()).toThrow("Fizzbuzz recieved a number as parameter");
    // });

    it("Should return the number if not multiple of 3 or 5", () => {
        expect(fizzbuzz(11)).toBe(11);
        // expect(fizzbuzz(10)).toBe(10);
    });

    it("Should return 'fizz' if number is 3", () => {
        expect(fizzbuzz(3)).toBe("fizz");
    });

    it("Should return 'fizz' if number is mutiple of 3", () => {
        expect(fizzbuzz(9)).toBe("fizz");
        expect(fizzbuzz(12)).toBe("fizz");
    });

    it("Should return 'buzz' if number is mutiple of 5", () => {
        expect(fizzbuzz(100)).toBe("buzz");
        expect(fizzbuzz(25)).toBe("buzz");
    });

    it("Should return 'fizzbuzz' if number is mutiple of 3 & 5", () => {
        expect(fizzbuzz(300)).toBe("fizzbuzz");
        expect(fizzbuzz(15)).toBe("fizzbuzz");
        expect(fizzbuzz(45)).toBe("fizzbuzz");
    });
});
