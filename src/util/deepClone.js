function isObject (obj) {
	return typeof obj === 'object'
}

function isArray (array) {
	return Object.prototype.toString.call(array) === '[object Array]'
}

function deepClone (obj) {
	if (!isObject(obj)) {
		return obj
	}
	var clone = isArray(obj) ? [] : {}
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			var value = obj[key]
			if (isObject(value)) {
				clone[key] = deepClone(value)
			} else {
				clone[key] = value
			}
		}
	}
	return clone
}

export default deepClone
