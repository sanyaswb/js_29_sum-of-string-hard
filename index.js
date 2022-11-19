function sumOfString(str) {
	const arrStr = str.split('');
	let sum = 0;
	let selector = false;

	for (let i = 0; i < arrStr.length; i++) {

		if (!isNaN(+arrStr[i]) && selector === false) {
			sum += +arrStr[i];
		} else if (arrStr[i] === '-') {
			selector = true;
			continue;
		} else if (!isNaN(+arrStr[i])) {
			sum += (+arrStr[i] * -1);
			selector = false;
			continue;
		} else {
			selector = false;
			continue;
		}
	}

	return sum;
}

module.exports = sumOfString;