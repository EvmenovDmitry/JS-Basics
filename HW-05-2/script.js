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


var i = 0;
var sum = 0;

// function sumToOne(num) {

//     if (num > 9) {

//         sum += Number(String(num)[i]);
//         console.log('sum: ', sum);
//         i++;


//         if (i < String(num).length) {
//             sumToOne(num);
//         }
//         console.log('aaa');
//         i = 0;
//         if (num < 9) {
//             console.log('num < 9');
//             sum = 0;
//             i = 0;
//             return num;
//         }
//     }
// }

function test(num) {

    if (num > 9) {

        console.log('op');
        i++;

        if (i < String(num).length) {
            sumToOne(num);
        }
        console.log('aaa');
        i = 0;
        if (num < 9) {
            console.log('num < 9');
            sum = 0;
            i = 0;
            return num;
        }
    }
}




// console.log('result 1:', sumToOne(594));
// console.log('result 2:', sumToOne(123));
// console.log('result 3:', sumToOne(555));
// console.log('result 4:', sumToOne(828));



// let lal = 594;

// console.log(Number(String(lal)[0]) + Number(String(lal)[1]));