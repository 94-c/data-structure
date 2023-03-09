function addUpToFirst(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log('addUpToFirst : ' + addUpToFirst(2000));

function addUpToSecond(n) {
    return n * (n + 1) / 2;
}

console.log('addUpToSecond : ' + addUpToSecond(2000));

function countUpAndDown(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
    for (var j = n - 1; j >= 0; j--) {
        console.log(j);
    }
}

console.log('countUpAndDown : ' + countUpAndDown(2));

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
        }
    }
}

console.log('printAllPairs : ' + printAllPairs(2));


function numberOfHalves(n) {
    var count = 0;
    while (n > 1) {
        n /= 2;
        count++;
    }
    return count;
}

console.log('numberOfHalves : ' + numberOfHalves(2));

function totalNumberOfHalves(n) {
    var total = 0;
    for (var i = 0; i < n; i++) {
        total += numberOfHalves(n);
    }
    return total;
}

console.log('totalNumberOfHalves : ' + totalNumberOfHalves(2));

function logAllBinaries(n) {
    var count = 0;
    var lastNum = "1".repeat(n);
    while (count.toString(2) !== lastNum) {
        count++;
    }
}

console.log('logAllBinaries : ' + logAllBinaries(2));