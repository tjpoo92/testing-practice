function reverseString(string) {
	let arr = string.split("");
	arr.reverse();
	let newString = arr.toString();
	newString = newString.replace(/,/g, "");
	return newString;
}

export { reverseString };
