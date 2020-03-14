CL = console.log;

CL('--- task #1 ---');

CL('raw: aaa@bbb@ccc')
CL('out:', 'aaa@bbb@ccc'.replace(/@/g, '!'));


CL('--- task #2 ---');

let date = '2025-12-31';

function reverseDate(date, delim, glue) {
    return date.split(delim).reverse().join(glue);
}

CL(reverseDate(date, '-', '/'))