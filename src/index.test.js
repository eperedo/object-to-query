const test = require('tape');
const transform = require('./index');

test('should return an empty string if parameter is not an object', (assert) => {
	const resultWithNull = transform(null);
	const resultWithEmpty = transform('');
	const resultWithUndefined = transform(undefined);

	const message = 'must return an empty string';
	const expect = '';

	assert.equal(resultWithNull, expect, message);
	assert.equal(resultWithEmpty, expect, message);
	assert.equal(resultWithUndefined, expect, message);

	assert.end();
});

test('should return a query string', (assert) => {
	const objectTest = {
		id: 1,
		name: 'Eduardo',
	};

	const actual = transform(objectTest);
	const expect = '&id=1&name=Eduardo';
	const message = 'should generate a query string with 2 keys';

	assert.equal(actual, expect, message);

	assert.end();
});

test('should return a query string without the marked as not included', (assert) => {
	const objectTest = {
		id: 1,
		name: 'Eduardo',
		notThisOne: 'i am a bad property',
		age: 30,
	};

	const actual = transform(objectTest, ['notThisOne']);
	const message = 'property notThisOne must not be included in the query string';
	const expect = '&id=1&name=Eduardo&age=30';

	assert.equal(actual, expect, message);

	assert.end();
});

test('should include the question mark in the first key', (assert) => {
	const objectTest = {
		id: 1,
		name: 'Eduardo',
		age: 30,
	};

	const actual = transform(objectTest, [], true);
	const message = 'query string must contain the question mark at the start';
	const expect = '?id=1&name=Eduardo&age=30';

	assert.equal(actual, expect, message);

	assert.end();
});
