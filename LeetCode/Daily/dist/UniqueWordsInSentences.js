function uncommonFromSentences(s1, s2) {
    var map = new Map();
    var stringArr = s1.split(" ");
    var stringArr2 = s2.split(" ");
    //update map for stringArr
    for (var i = 0; i < stringArr.length; i += 1) {
        if (!map.get(stringArr[i])) {
            map.set(stringArr[i], 1);
        }
        else {
            map.set(stringArr[i], map.get(stringArr[i]) + 1);
        }
    }
    //update map for stringArr2
    for (var i = 0; i < stringArr2.length; i += 1) {
        if (!map.get(stringArr2[i])) {
            map.set(stringArr2[i], 1);
        }
        else {
            map.set(stringArr2[i], map.get(stringArr2[i]) + 1);
        }
    }
    //now we only push the items to resultant array
    //that has count 1
    var result = [];
    for (var _i = 0, _a = map.keys(); _i < _a.length; _i++) {
        var key = _a[_i];
        if (map.get(key) === 1) {
            result.push(key);
        }
    }
    return result;
}
;
