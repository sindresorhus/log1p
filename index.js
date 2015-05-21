'use strict';
var numberIsNan = require('number-is-nan');

module.exports = Math.log1p || function (x) {
	if (x < -1 || numberIsNan(x)) {
		return NaN;
	}

	if (x === 0 || x === Infinity) {
		return x;
	}

	if (x === -1) {
		return -Infinity;
	}

	return (1 + x) - 1 === 0 ? x : x * (Math.log(1 + x) / ((1 + x) - 1));
};
