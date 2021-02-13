module.exports = function toReadable(number) {
	const specials = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	const dozens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

	num = String(number);

	if (num < 20) {
		return `${specials[num]}`;
	} else if (num >= 20 && num < 100 && num[1] == 0) {
		return `${dozens[num / 10]}`;
	} else if (num > 20 && num < 100 && num[1] != 0) {
		return `${dozens[num[0]]} ${specials[num[1]]}`;
	} else if (num >= 100 && num[1] == 0 && num[2] == 0) {
		return `${specials[num[0]]} hundred`;
	}	else if (num > 100 && num[1] == 0) {
		return `${specials[num[0]]} hundred ${specials[num[2]]}`;
	} else if (num > 100 && num[1] == 1) {
		return `${specials[num[0]]} hundred ${specials[num - num[0] * 100]}`;
	}	else if (num >= 120 && num[2] == 0) {
		return `${specials[num[0]]} hundred ${dozens[num[1]]}`;
	}	else if (num > 120 && num[2] != 0) {
		return `${specials[num[0]]} hundred ${dozens[num[1]]} ${specials[num[2]]}`;
	}
}