const sumOfString = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sumOfString('1,2,3,4,5');

	expect(type).toBe('number');
});

test('Тест. str: "1ds2^@3v4aahk5"', () => {
	const res = sumOfString('1ds2^@3v4aahk5');

	expect(res).toBe(15);
});

test('Тест. str: ""', () => {
	const res = sumOfString('');

	expect(res).toBe(0);
});

test('Тест. str: "@!%sw36hdf67dsf-12fsd!-gs25-2"', () => {
	const res = sumOfString('@!%sw36hdf67dsf-12fsd!-gs25-2');

	expect(res).toBe(28);
});

test('Тест. str: "!1h-84;;6"', () => {
	const res = sumOfString('!1h-84;;6');

	expect(res).toBe(3);
});

test('Тест. str: "-7323-24-4-4!"14!!!";68-"', () => {
	const res = sumOfString('-7323-24-4-4!"14!!!";68-');

	expect(res).toBe(14);
});

test('Тест. str: "РАм933ч-ds-53127-!5@-2-988"', () => {
	const res = sumOfString('РАм933ч-ds-53127-!5@-2-988');

	expect(res).toBe(33);
});

test('Auto: random outcomes', () => {
	let failed = false;

	const getStr = () => {
		let str = '';
		const iterations = getRandomInt(0, 40);

		for (let i = 0; i < iterations; i++) {
			str += String.fromCharCode(getRandomInt(33, 126));
		}

		return str;
	};

	for (let i = 0; i < 100; i++) {
		const str = getStr();

		if (solution(str) !== sumOfString(str)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});