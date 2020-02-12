console.log('--- task 01 ---');

let someArr = [1, 2, 3, 4, 5];
for (var i = 0; i < someArr.length; i++) {
    console.log(someArr[i]);
}


console.log('\n--- task 02 ---');

someArr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for (var i = 0; i < someArr.length; i++) {
    if (someArr[i] < -3 && someArr[i] > -10) {
        console.log(someArr[i]);
    }
}


console.log('\n--- task 03 ---');

let newArr = [];
let a = 23;
let b = 57;
for (var i = a; i <= b; i++) {
    newArr.push(i);
}
console.log('/for/', newArr);


newArr = [];
var i = a;
while (i <= 57) {
    newArr.push(i);
    i++;
}
console.log('/while/', newArr);


let sum = 0;
for (var i = 0; i < newArr.length; i++) {
    sum += newArr[i];
}
console.log('/sum/ :', sum);


console.log('\n--- task 04 ---');

let strArr = ['10', '20', '30', '50', '235', '3000'];

for (var i = 0; i < strArr.length; i++) {
    if (strArr[i][0] == '1' || strArr[i][0] == '2' || strArr[i][0] == '5') {
        console.log(strArr[i]);
    }
}


console.log('\n--- task 05 ---');

let bold = 'font-weight: bold; color: red;';
let daysArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
for (var i = 0; i < daysArr.length; i++) {
    if (i <= 5 - 1) {
        console.log(daysArr[i]);
    } else {
        console.log('%c%s', bold, daysArr[i]);
    }
}


console.log('\n--- task 06 ---');

daysArr.push('hoba');
console.log(daysArr[daysArr.length - 1]);


console.log('\n--- task 07 ---');

let promArr = ['12', 'false', 'Текст', '4', '2', '-5', '0'];
// let promArr = [];
// let item;
// while (item != '') {
//     item = prompt('please enter anything');
//     promArr.push(item);
// }
console.log(promArr);

let numArr = [];
var temp;
for (var i = 0; i < promArr.length; i++) {
    if (!isNaN(promArr[i])) {
        promArr[i] = Number(promArr[i]);
        numArr.push(promArr[i])
    }
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

console.log(numArr.sort(compareNumeric));


console.log('\n--- task 08 ---');

console.log('/orig/', promArr);
console.log('/reverse/', promArr.reverse());

console.log('\n/orig/', promArr.reverse());

var tempArr = [];
var i = 0;
while (i < promArr.length + i) {
    tempArr.push(promArr.pop());
    i++
}
promArr = tempArr;
console.log('/rev. while/', promArr);


console.log('\n--- task 09 ---');

let moreArr = [5, 9, 21, , , 9, 78, , , , 6];
var count = 0;
console.log(moreArr);
for (var i = 0; i < moreArr.length; i++) {
    if (moreArr[i] == null) count++;
}
console.log(count);


console.log('\n--- task 10 ---');