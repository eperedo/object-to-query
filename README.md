# object-to-query [![Build Status](https://travis-ci.org/eperedo/object-to-query.svg?branch=master)](https://travis-ci.org/eperedo/object-to-query)
an small library to convert js objects to querystrings

### Usage

- Install with npm

		npm install object-to-query --save

- Start using is as simple as:

	```javascript

	const transform = require('object-to-query')

	const result = transform({ id: 1, name: 'Eduardo' });

	console.log(result);

	// output &id=1&name=Eduardo

	```

- You can exclude the properties you want

	```javascript

	const transform = require('object-to-query')

	const result = transform({ id: 1, name: 'Eduardo', notThisOne: 'i am a bad property', age: 30 }, ['notThisOne']);

	console.log(result);

	// output &id=1&name=Eduardo&age=30

	```

- I want the question mark as the first symbol in my string!!11UNO

	```javascript

	const transform = require('object-to-query')

	const result = transform({ id: 1, name: 'Eduardo' }, [], true);

	console.log(result);

	// output ?id=1&name=Eduardo

	```


### Development

1. Install dependencies

		npm install

2. Write your code! Yep that's it!

### Testing

1. We are using [tape](https://github.com/substack/tape) because is small and awesome, only run the default test command

		npm test

2. If everything looks green you are fine.

### Code Coverage

1. [Istanbul](https://github.com/gotwarlost/istanbul)
