'use strict';

var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
	return;
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!$mapHas) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
	return;
}

module.exports = function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};
