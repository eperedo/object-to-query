function transform(obj, notInclude = [], includeQuestionMark = false) {
	if (obj && typeof obj === 'object') {
		const keys = Object.keys(obj);
		const keysToConvert = keys.filter(kf => notInclude.indexOf(kf) === -1);
		const qs = keysToConvert.map((key) => {
			const currentKey = obj[key];
			return `&${key}=${currentKey}`;
		});
		return includeQuestionMark ? qs.join('').replace('&', '?') : qs.join('');
	}
	return '';
}

module.exports = transform;
