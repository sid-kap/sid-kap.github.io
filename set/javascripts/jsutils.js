
/**
 * Finds an object in an array and, if found, removes it.
 */
function removeFromArray(array, obj) {
	var index = array.indexOf(obj);
	if (index !== -1) {
		array.splice(index, 1);
	}

	return array;
}

/**
 * Finds an object in an array and, if found, removes it.
 * PRECONDITION: obj is a JQuery element and has the is() method.
 */
function removeJQueryElementFromArray(array, obj) {
	for (var i in array) {
		if (obj.is(array[i])) {
			array.splice(i, 1);
			return array;
		}
	}
	
	return array;
}

/**
 * Generates a random number in the range [0..range-1].
 */
function randomNumberInRange(range) {
	return Math.floor(Math.random() * range);
}