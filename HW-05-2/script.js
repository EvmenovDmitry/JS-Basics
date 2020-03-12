CL = console.log;

console.log('--- task #1 ---');

function someCalc(inputNum) {
    if (String(inputNum).length == 3) {
        return (Number(String(inputNum)[0]) - Number(String(inputNum)[1])) / Number(String(inputNum)[2]);
    } else {
        return false;
    }
};

let a = 952;
let b = 52;

console.log(someCalc(a));
console.log(someCalc(b));


console.log('\n--- task #2 ---');

function someCalc2(inputNum) {
    var a = 0,
        b = 0;
    if (Number(inputNum)) {
        return [Math.pow(inputNum, 2), Math.pow(inputNum, 3)];
    } else {
        return false;
    }
};
console.log(someCalc2(3));


console.log('\n--- task #3 ---');

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(a, b, 'max:', max(a, b));
console.log(a, b, 'min:', min(a, b));


console.log('\n--- task #7 ---');

function pyr(rowsNum, filler) {

    if (filler && filler != ' ') {
        for (var i = 1; i <= rowsNum; i++) {
            console.log(String(filler).repeat(i));
        }

    } else {
        filler = 0;

        for (var i = 1; i <= rowsNum; i++) {
            filler++;
            console.log(String(filler).repeat(i));
        }
    }
}

pyr(3, '☕');
pyr(3, ' ');
pyr(9);


console.log('\n--- task #8 ---');

function fib(limit) {

    var fibArr = [1];
    var n = 1;
    for (var i = 2; n <= limit; i++) {
        fibArr.push(n);
        n = fibArr[i - 1] + fibArr[i - 2];
    }

    return fibArr;
}

console.log(fib(1000));



console.log('\n--- task #9 ---');



function sumToOneDigit(num) {
    num = String(num);

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += +num[i];
    }


    if (sum > 9) {
        sumToOneDigit(sum);
    } else {
        CL(sum);
    }

}

sumToOneDigit(594);
sumToOneDigit(1234);
sumToOneDigit(55555555);
sumToOneDigit(828214);
sumToOneDigit(9);


console.log('\n--- task #10 ---');

let someArr = [322, 123, 546, 16, 218, 32, 8, 36, 12, 87];

function printArr(arr, i = 0) {
    if (i < arr.length) {
        console.log(arr[i]);
        i++;
        printArr(arr, i++);
    }
}

printArr(someArr);