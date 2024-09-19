"use strict";

function findTheLongestSubstring(s) {
  var vowelArray = ['a', 'e', 'i', 'o', 'u'];
  var map = new Map();
  var stringCount = 0;
  var tail = 0;
  var head = 0;

  for (var i = 0; i < s.length; i += 1) {
    var curr = s.charAt(i);

    var isVowel = function isVowel(_char) {
      return vowelArray.includes(_char);
    };

    if (isVowel(curr)) {
      //check if doesn't exist in map
      if (!map.get(curr)) {
        if (map.size) {
          var flag = true;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = map.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var key = _step.value;
              var count = map.get(key);

              if (count % 2 !== 0) {
                flag = false;
                break;
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

          if (flag) {
            stringCount = Math.max(head - tail, stringCount);
          }
        }

        map.set(curr, 1);
        continue;
      } else if (map.get(curr) === 2) {
        while (s.charAt(tail) !== curr) {
          if (isVowel(s.charAt(tail))) {
            if (map.get(s.charAt(tail)) > 0) {
              map.set(s.charAt(tail), map.get(s.charAt(tail)) - 1);
            } else {
              map["delete"](s.charAt(tail));
            }
          }

          tail += 1;
        }

        tail += 1;
        continue;
      }

      map.set(curr, map.get(curr) + 1);
    }
  }

  return stringCount;
}

;

function main() {
  var str = "leetcodeisgreat";
  var ans = findTheLongestSubstring(str);
  console.log(ans);
}