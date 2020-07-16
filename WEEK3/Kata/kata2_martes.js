//https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript
function findSum(n) {
    let sum = 0;

    for (var i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
            sum += i;
        }
    }
    return sum;
}

//https://www.codewars.com/kata/5a0d6d8c6975982b5b000383/train/javascript
function lastDayIsFriday(initialYear, endYear) {
    let finalYear = endYear || initialYear
    let yearIni = initialYear;
    let fridays = [];
    const rangeYears = finalYear - initialYear;
    for (let i = 0; i <= rangeYears; i++) {
        for (let j = 1; j <= 12; j++) {
            let lastDay = new Date(initialYear + i, j, 0).getDay(); // 0 - 6
            if (lastDay === 5) {
                fridays.push(lastDay);
            }
        }
    }
    return fridays.length;
}