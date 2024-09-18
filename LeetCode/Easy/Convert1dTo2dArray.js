"use strict";
function construct2DArray(original, m, n) {
    if (original.length !== m * n)
        return [];
    let start = 0;
    let row = 1;
    let end = (row * n) - 1;
    let result = [];
    while (row <= m) {
        let innerArr = [];
        for (let i = start; i <= end; i += 1) {
            innerArr.push(original[i]);
        }
        start += n;
        row += 1;
        end = (row * n) - 1;
        result.push(innerArr);
    }
    return result;
}
;
