function analyzeArray(array) {
	const avg =
		array.reduce(function (sum, value) {
			return sum + value;
		}, 0) / array.length;
	const min = array.reduce(function (acc, value) {
		return acc < value ? acc : value;
	});
	const max = array.reduce(function (acc, value) {
		return acc > value ? acc : value;
	});
	const length = array.length;

	return { average: avg, min: min, max: max, length: length };
}

export { analyzeArray };
