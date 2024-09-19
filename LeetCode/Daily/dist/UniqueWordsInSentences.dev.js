"use strict";

function uncommonFromSentences(s1, s2) {
  var map = new Map();
  var stringArr = s1.split(" ");
  var stringArr2 = s2.split(" "); //update map for stringArr

  for (var i = 0; i < stringArr.length; i += 1) {
    if (!map.get(stringArr[i])) {
      map.set(stringArr[i], 1);
    } else {
      map.set(stringArr[i], map.get(stringArr[i]) + 1);
    }
  } //update map for stringArr2


  for (var _i = 0; _i < stringArr2.length; _i += 1) {
    if (!map.get(stringArr2[_i])) {
      map.set(stringArr2[_i], 1);
    } else {
      map.set(stringArr2[_i], map.get(stringArr2[_i]) + 1);
    }
  } //now we only push the items to resultant array
  //that has count 1


  var result = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      if (map.get(key) === 1) {
        result.push(key);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
}

;