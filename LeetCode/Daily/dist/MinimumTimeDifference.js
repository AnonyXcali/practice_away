function findMinDifference(timePoints) {
    var totalMinutes = [];
    for (var i = 0; i < timePoints.length; i += 1) {
        var converted = convertToMinutes(timePoints[i]);
        totalMinutes.push(converted || 1440);
    }
    //sort 
    totalMinutes = totalMinutes.sort(function (a, b) { return a - b; });
    console.log(totalMinutes);
    var minTime = Infinity;
    var lastMinTime = 24 * 60 - totalMinutes[totalMinutes.length - 1] + totalMinutes[0];
    var ptr1 = 0;
    var ptr2 = ptr1 + 1;
    while (ptr2 < totalMinutes.length) {
        var timeInstance1 = totalMinutes[ptr1];
        var timeInstance2 = totalMinutes[ptr2];
        minTime = Math.min(Math.abs(timeInstance2 - timeInstance1), minTime);
        ptr1 += 1;
        ptr2 = ptr2 + 1;
    }
    console.log(minTime);
    minTime = Math.min(minTime, lastMinTime);
    return minTime;
}
;
function convertToMinutes(time) {
    var timeSplit = time.split(":");
    var hours = parseInt(timeSplit[0], 10);
    var minutes = parseInt(timeSplit[1], 10);
    return (hours * 60) + minutes;
}
