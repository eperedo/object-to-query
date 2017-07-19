const test = require('tape');
const transform = require('./index');

test('should return an empty string if parameter is not an object', (assert) => {

	const resultWithNull = transform(null);
	const resultWithEmpty = transform('');
	const resultWithUndefined = transform('');

	assert.equal(resultWithNull, '', 'must return an empty string');
	assert.equal(resultWithEmpty, '', 'must return an empty string');
	assert.equal(resultWithUndefined, '', 'must return an empty string');

	assert.end();

});

test('should pass', (assert) => {

	const objectTest = {
		id: 1,
		name: 'Eduardo',
	};

	const result = transform(objectTest);

	assert.equal(result, '&id=1&name=Eduardo', 'should generate a query string with 2 keys');

	assert.end();

});
