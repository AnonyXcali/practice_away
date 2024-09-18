"use strict";
function findTheLongestSubstring(s) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u'];
    let map = new Map();
    let stringCount = 0;
    let tail = 0;
    function check(i, j) {
        let flag = true;
        for (let key of map.keys()) {
            let count = map.get(key);
            if (count % 2 !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            stringCount = Math.max(i - j, stringCount);
        }
    }
    for (let head = 0; head < s.length; head += 1) {
        let curr = s.charAt(head);
        let isVowel = (char) => vowelArray.includes(char);
        if (isVowel(curr)) {
            //check if doesn't exist in map
            if (!map.get(curr)) {
                if (map.size > 0) {
                    check(head, tail);
                }
                map.set(curr, 1);
                continue;
            }
            else if (map.get(curr) === 2) {
                //update length
                check(head, tail);
                //update tail pos
                while (s.charAt(tail) !== curr) {
                    if (isVowel(s.charAt(tail))) {
                        if (map.get(s.charAt(tail)) > 0) {
                            map.set(s.charAt(tail), map.get(s.charAt(tail)) - 1);
                        }
                        else {
                            map.delete(s.charAt(tail));
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
    let totalVowelCount = 0;
    for (let key of map.keys()) {
        totalVowelCount += map.get(key);
    }
    return stringCount || s.length - totalVowelCount;
}
;
