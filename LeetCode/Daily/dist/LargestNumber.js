function largestNumber(nums) {
    if (nums.length === 1)
        return "" + nums[0];
    var sort = function (x, y) {
        var combiOne = "" + x + y;
        var combiTwo = "" + y + x;
        if (combiOne > combiTwo) {
            return -1;
        }
        else if (combiTwo > combiOne) {
            return 1;
        }
        return 0;
    };
    nums = nums.sort(sort);
    if (nums[0] === 0)
        return "0";
    return nums.join("");
}
;
