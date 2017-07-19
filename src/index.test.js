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

test('should return a query string', (assert) => {

	const objectTest = {
		id: 1,
		name: 'Eduardo',
	};

	const result = transform(objectTest);

	assert.equal(result, '&id=1&name=Eduardo', 'should generate a query string with 2 keys');

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
