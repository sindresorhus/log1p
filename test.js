'use strict';
var test = require('ava');
var numberIsNan = require('number-is-nan');
var positiveZero = require('positive-zero');
var negativeZero = require('negative-zero');
Math.log1p = undefined;
var log1p = require('./');

function epsilon(a, b, E) {
	return Math.abs(a - b) <= (E ? E : 1e-11);
};

test(function (t) {
	t.assert(numberIsNan(log1p(NaN)));
	t.assert(numberIsNan(log1p(-1.000000001)));
	t.assert(positiveZero(log1p(0)));
	t.assert(negativeZero(log1p(-0)));
	t.assert(log1p(Infinity) === Infinity);
	t.assert(log1p(-1) === -Infinity);
	t.assert(log1p(-1e-17) === -1e-17);
	t.assert(log1p(-2e-17) === -2e-17);
	t.assert(epsilon(log1p(5), 1.791759469228055));
	t.assert(epsilon(log1p(50), 3.9318256327243257));
	t.end();
});
