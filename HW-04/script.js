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

let a = 89;
let b = 11;

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