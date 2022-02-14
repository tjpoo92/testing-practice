import { add, subtract, divide, multiply } from "../code/calculator";

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

it("Addition", () => {
	expect(add(1, 2)).toBe(3);
});

it("Subtract", () => {
	expect(subtract(2, 1)).toBe(1);
});

it("Divide", () => {
	expect(divide(4, 2)).toBe(2);
});

it("Multiply", () => {
	expect(multiply(4, 2)).toBe(8);
});
