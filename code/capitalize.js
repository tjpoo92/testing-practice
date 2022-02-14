function capitalize(string) {
	let letter = string.charAt(0);
	let tempLetter = letter.toUpperCase();
	return string.replace(letter, tempLetter);
}

export { capitalize };
