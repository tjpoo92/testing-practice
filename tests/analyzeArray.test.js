import { analyzeArray } from "../code/analyzeArray";

it("Analyze Array", () => {
	expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6,
	});
});

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
