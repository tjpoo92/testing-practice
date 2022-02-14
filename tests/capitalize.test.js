import { capitalize } from "../code/capitalize.js";

// A capitalize function that takes a string and returns it with the first character capitalized.
it("Capitalize", () => {
	expect(capitalize("hello")).toBe("Hello");
});
