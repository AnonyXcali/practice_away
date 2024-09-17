function findTheLongestSubstring(s) {
    let vowelArray = ['a', 'e', 'i', 'o', 'u'];
    let map = new Map();
    let stringCount = 0;
    let tail = 0;
    let head = 0;
    for (let i = 0; i < s.length; i += 1) {
        let curr = s.charAt(i);
        let isVowel = (char) => vowelArray.includes(char);
        if (isVowel(curr)) {
            //check if doesn't exist in map
            if (!map.get(curr)) {
                if (map.size) {
                    let flag = true;
                    for (let key of map.keys()) {
                        let count = map.get(key);
                        if (count % 2 !== 0) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        stringCount = Math.max(head - tail, stringCount);
                    }
                }
                map.set(curr, 1);
                continue;
            }
            else if (map.get(curr) === 2) {
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
    return stringCount;
}
;
function main() {
    let str = "leetcodeisgreat";
    let ans = findTheLongestSubstring(str);
    console.log(ans);
}
