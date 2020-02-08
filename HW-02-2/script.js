console.log('--- task 01 ---');

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num += 1;
num -= 1;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);


console.log('\n--- task 02 ---');

function secToTime(sec_total, show) {

    let h = m = s = s2 = 0;

    s = sec_total % 60;
    s2 = sec_total / 60;
    m = Math.trunc(s2 % 60);
    h = Math.trunc(s2 / 60);

    if (show) {
        console.log(`hours: ${h}\nminutes: ${m}\nseconds: ${s}`);
    } else {
        let arrTime = [h, m, s];
        return arrTime;
    }
}

let secToConvert = 12345;
console.log('seconds to convert:', secToConvert)
console.log(secToTime(secToConvert));
secToTime(secToConvert, 1);


console.log('\n--- task 03 ---');

let someStr = 'abcde';

if (someStr[0] == 'a') {
    console.log('yep');
} else {
    console.log('nope');
}


console.log('\n--- task 04 ---');

let someStr2 = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек.';
console.log(someStr2.slice(47, 60));


console.log('\n--- task 05 ---');

let someStr3 = '729';
console.log(Number(someStr3[0]) + Number(someStr3[1]) + Number(someStr3[2]));


console.log('\n--- task 06 ---');

let someNum = 10;

if (someNum == 10) {
    console.log('true');
} else {
    console.log('false');
}


console.log('\n--- task 07 ---');

let someStr4 = 'test';

if (someStr4 == 'test') {
    console.log('true');
} else {
    console.log('false');
}


console.log('\n--- task 08 ---');

let numA = 3;
let numB = 5;

if (numA <= 1 && numB >= 3) {
    console.log(numA + numB);
} else {
    console.log(numA - numB);
}


console.log('\n--- task 09 ---');

// let admin = 'admen';
// let nimda = 'qwerty';

// let name = prompt('ur name pls');
// let login = prompt('ur login pls');
// let pass = prompt('pass pls');

// if (login != admin || pass != nimda) {
//     console.log(name, 'you entered the wrong username or password');
// } else {
//     console.log('Welcome', name, ' You have successfully entered the site')
// }


console.log('\n--- task 10 ---');

let month = 12;
let season = 0;

if (month == 1 || month == 2 || month == 12) {
    season = 1;
} else if (month > 2 && month < 6) {
    season = 2;
} else if (month > 5 && month < 9) {
    season = 3;
} else if (month > 6 && month < 12) {
    season = 4;
}

console.log(`month: ${month}; season: ${season}`);