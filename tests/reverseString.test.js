import { reverseString } from "../code/reverseString";

//A reverseString function that takes a string and returns it reversed.
it("Reverse String", () => {
	expect(reverseString("hello")).toBe("olleh");
});
