const test = require('tape');
const transform = require('./index');

test('should pass', (assert) => {

	const objectTest = {
		id: 1,
		name: 'Eduardo',
	};

	const result = transform(objectTest);

	assert.ok(result, 'must return an string');

	assert.end();

});
