
// Variable declarations
const arr = ['a', 'b', 'c', 'd', 'e'];
const obj = { apple: 10, bear: 5, cat: 7 };
const items =  [
    { text:'contains target here', value: 4 },
    { text:'no match at all', value: 2 },
    { text:'also has target inside', value: 5 },
    { text:'plain text', value: 3 },
    { text:'TARGET IN CAPS', value: 1 },
];

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

Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});

Object.keys(obj).forEach((key) => {
    console.log(obj[key]);
});

function objectTotal(data) {
    let total = 0;
    Object.values(data).forEach((value) => {
        total = total + value;
    });

    return (total);
}

console.log(objectTotal({ x:1, y: 2, y2: 3}));