function transform(obj, notInclude = []) {
	if (obj && typeof obj === 'object') {
		const keys = Object.keys(obj);
		const keysToConvert = keys.filter((kf) => {
			return notInclude.indexOf(kf) === -1;
		})
		const qs = keysToConvert.map((key) => {
			const currentKey = obj[key];
			return `&${key}=${currentKey}`;
		});
		return qs.join('');
	} else {
		return '';
	}
}

module.exports = transform;
