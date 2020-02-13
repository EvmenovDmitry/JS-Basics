console.log('--- task 01 ---');

function outNum(start, end) {

    if (isFinite(start) && isFinite(end)) {

        let outputArr = [];

        if (start < end) {
            for (var i = start; i <= end; i++) {
                outputArr.push(i);
            }
            return outputArr;

        } else if (start > end) {
            for (var i = start; i >= end; i--) {
                outputArr.push(i);
            }
            return outputArr;

        } else {
            return start;
        }

    } else {
        return 'ERROR: invalid values :c'
    }
}

console.log(outNum(1, 50));
console.log(outNum(10, 10));
console.log(outNum(35, 8));
console.log(outNum('abc', 'lol'));


console.log('\n--- task 02 ---');

var a = 89;
var b = 11;

var i = a;
while (i >= b) {
    document.write(i, '<br />')
    i--;
}

console.log(`look in the browser window.
(from ${a} to ${b})`);


console.log('\n--- task 03 ---');

a = 0;
for (i = 0; i <= 100; i++) {
    a += i;
}
console.log(a);


console.log('\n--- task 04 ---');

var n = 0;

for (var i = 1; i <= 5; i++) {
    for (var i2 = 0; i2 < i; i2++) {
        n++;
    }
    console.log(i + ': ' + n);
}


console.log('\n--- task 05 ---');

//(for) way #1
var someArr = [];
for (var i = 8; i <= 56; i += 2) {
    someArr.push(i);
}
console.log(someArr);

//(for) way #2
var someArr = [];
for (var i = 8; i <= 56; i++) {
    if ((i % 2) == 0) {
        someArr.push(i);
    }
}
console.log(someArr);

//(while) way #1
var someArr = [];
var i = 8;
while (i <= 56) {
    someArr.push(i);
    i += 2;
}
console.log(someArr);

//(while) way #2
var someArr = [];
var i = 8;
while (i <= 56) {
    if ((i % 2) == 0) {
        someArr.push(i);
    }
    i++;
}
console.log(someArr);


console.log('\n--- task 06 ---');

var c = 0;
for (var a = 2; a <= 10; a++) {
    for (var b = 2; b <= 10; b++) {
        c = a * b;
        console.log(`${a} * ${b} = ${c}`);
    }
    console.log('---------------');
}


console.log('\n--- task 07 ---');

var n = 1000;
let num = 0;

while (n > 50) {
    n /= 2;
    console.log(n);
    num++;
}
console.log('iterations: ' + num);


// console.log('\n--- task 08 ---');
// console.log('уже делал что-то подобное');



console.log('\n--- task 09 ---');

let someStr = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
someStr = someStr.split(' ');
console.log(someStr);

for (var i = 0; i < someStr.length; i++) {
    someStr.push(Number(someStr.shift(someStr)));
}
console.log(someStr);
console.log(Math.max.apply(null, someStr));


console.log('\n--- task 10 ---');

var n = 123456789;
let count = 0;
let sum = 0;

for (var i = 0; i < String(n).length; i++) {
    console.log('a.', String(n)[i]);
    count++;
    sum = sum + Number(String(n)[i]);
}

console.log('b.', count);
console.log('c.', sum);
console.log('d.', ((String(n).split('')).reverse().join('')));