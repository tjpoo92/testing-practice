function caesarCipher(string) {
	let arr = [];
	for (let i = 0; i < string.length; i++) {
		let tempChar = string.charCodeAt(i);
		arr.push(tempChar);
	}

	for (let i = 0; i < arr.length; i++) {
		if ((arr[i] > 64 && arr[i] < 78) || (arr[i] > 96 && arr[i] < 110)) {
			arr[i] = arr[i] + 13;
		} else if ((arr[i] > 77 && arr[i] < 91) || (arr[i] > 109 && arr[i] < 123)) {
			arr[i] = arr[i] - 13;
		} else {
			arr[i] = arr[i];
		}
	}
	for (let i = 0; i < arr.length; i++) {
		arr[i] = String.fromCharCode(arr[i]);
	}
	let newString = arr.toString();
	newString = newString.replace(/,/g, "");
	return newString;
}

export { caesarCipher };
