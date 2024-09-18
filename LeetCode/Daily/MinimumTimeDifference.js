"use strict";
function findMinDifference(timePoints) {
    let totalMinutes = [];
    for (let i = 0; i < timePoints.length; i += 1) {
        const converted = convertToMinutes(timePoints[i]);
        totalMinutes.push(converted || 1440);
    }
    //sort 
    totalMinutes = totalMinutes.sort((a, b) => a - b);
    console.log(totalMinutes);
    let minTime = Infinity;
    let lastMinTime = 24 * 60 - totalMinutes[totalMinutes.length - 1] + totalMinutes[0];
    let ptr1 = 0;
    let ptr2 = ptr1 + 1;
    while (ptr2 < totalMinutes.length) {
        const timeInstance1 = totalMinutes[ptr1];
        const timeInstance2 = totalMinutes[ptr2];
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
    let timeSplit = time.split(":");
    let hours = parseInt(timeSplit[0], 10);
    let minutes = parseInt(timeSplit[1], 10);
    return (hours * 60) + minutes;
}
