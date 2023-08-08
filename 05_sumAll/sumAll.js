const sumAll = function (start, end) {
    if (typeof start !== 'number' || typeof end !== 'number' || start < 0 || end < 0) {
        return "ERROR";
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    let totalSum = 0;
    for (let num = start; num <= end; num++) {
        totalSum += num;
    }
    return totalSum;
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
