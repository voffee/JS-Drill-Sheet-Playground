

function createRange(start, end) {
    return Array.from(
        { length: end - start + 1 },
        (_, index) => index + start
    );
}

function createRangeWithStep(start, end, step) {
    return Array.from(
        { length: (((end-start)/ 2) + 1) },
        (_, index) => index * step
    );
}

function createCountdown(start, end) {
    return Array.from(
        { length: start - end + 1 }, 
        (_, index) => start - index
    );
}

console.log('Test');