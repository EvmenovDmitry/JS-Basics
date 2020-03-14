CL = console.log;

CL('--- task #1 ---');

CL('raw: aaa@bbb@ccc')
CL('out:', 'aaa@bbb@ccc'.replace(/@/g, '!'));


CL('\n--- task #2 ---');

let date = '2025-12-31';

function reverseDate(date, delim, glue) {
    return date.split(delim).reverse().join(glue);
}

CL(reverseDate(date, '-', '/'))


CL('\n--- task #3 ---');

var someStr = 'я учу JavaScript!';

CL(someStr.slice(2, 5));
CL(someStr.slice(6, -1));

CL(someStr.substring(5, 2));
CL(someStr.substring(16, 6));

CL(someStr.substr(2, 3));
CL(someStr.substr(-11, 10));


CL('\n--- task #4 ---');

var someArr = [4, 2, 5, 19, 13, 0, 10];

function someMathFN(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }

    return Math.sqrt(sum);
}

CL(someMathFN(someArr));


CL('\n--- task #5 ---');

function abc(a, b) {
    return Math.abs(a - b);
}

CL(abc(3, 5));
CL(abc(6, 1));


CL('\n--- task #6 ---');

function dateNowFormat() {
    let dateNow = new Date();

    let full = [
        dateNow.getHours(),
        dateNow.getMinutes(),
        dateNow.getSeconds(),
        dateNow.getDay(),
        dateNow.getMonth() + 1,
        dateNow.getFullYear()
    ];

    for (var i = 0; i < full.length; i++) {
        if (String(full[i]).length == 1) {
            full[i] = '0' + full[i];
        }
    }

    let time = [full[0], full[1], full[2]];
    let date = [full[3], full[4], full[5]];

    return time.join(':') + ' ' + date.join('.');
}

CL(dateNowFormat());


CL('\n--- task #7 ---');

var someStr = 'aa aba abba abbba abca abea';

CL(someStr.match(/ab+a/g));