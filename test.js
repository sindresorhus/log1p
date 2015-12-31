import test from 'ava';
import numberIsNan from 'number-is-nan';
import positiveZero from 'positive-zero';
import negativeZero from 'negative-zero';
import floatEqual from 'float-equal';

Math.log1p = undefined;
const m = require('./');

test(t => {
	t.true(numberIsNan(m(NaN)));
	t.true(numberIsNan(m(-1.000000001)));
	t.true(positiveZero(m(0)));
	t.true(negativeZero(m(-0)));
	t.is(m(Infinity), Infinity);
	t.is(m(-1), -Infinity);
	t.is(m(-1e-17), -1e-17);
	t.is(m(-2e-17), -2e-17);
	t.true(floatEqual(m(5), 1.791759469228055));
	t.true(floatEqual(m(50), 3.9318256327243257));
});
