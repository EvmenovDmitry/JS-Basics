console.log('--- task 01 ---');

let name = 'Dmitry';
let age = 25;
let city = 'Minsk';
let phone = '+375291234567';
let email = 'some.mail@gmail.com';
let company = 'Olymp Media';

console.log(`My name is ${name}.
I am ${age} years old.
I live in ${city} and work for the company ${company}.
My contact details:
tel.: ${phone}
email: ${email}`);


console.log('\n--- task 02 ---');

let thisYear = new Date().getFullYear();
let yearOfBirth = thisYear - age;
console.log(name, 'was born in', yearOfBirth, '(+/-1)');


console.log('\n--- task 03 ---');

let str6a = '147363';
let str6b = '123456';

function sum36(str_6) {
    a = Number(str_6[0]) + Number(str_6[1]) + Number(str_6[2]);
    b = Number(str_6[3]) + Number(str_6[4]) + Number(str_6[5]);
    if (a == b) {
        return 'Yep';
    } else {
        return 'Nope';
    }
}

console.log(`string of digits: ${str6a}
sum of digits ${str6a.substring(0, 3)} == sum of digits ${str6a.substring(3, 6)}?
ANSWER: ${sum36(str6a)}`);

console.log(`string of digits: ${str6b}
sum of digits ${str6b.substring(0, 3)} == sum of digits ${str6b.substring(3, 6)}?
ANSWER: ${sum36(str6b)}`);


console.log('\n--- task 04 ---');

let num1 = 1;
let num2 = 0;
let num3 = -3;

if (num1 > 0) {
    console.log('True');
} else {
    console.log("False");
}

if (num2 > 0) {
    console.log('True');
} else {
    console.log("False");
}

if (num3 > 0) {
    console.log('True');
} else {
    console.log("False");
}


console.log('\n--- task 05 ---');

let numA = 10;
let numB = 2;
let sum = 0;

console.log(`a = ${numA} b = ${numB}
+ ${sum = numA + numB}
- ${numA - numB}
/ ${numA / numB}
* ${numA * numB}`);

if ((numA + numB) > 1) {
    console.log(Math.pow(sum, 2));
}


console.log('\n--- task 06 ---');

if ((numA > 2 && numA < 11) || (numB >= 6 && numB < 14)) {
    console.log('yep');
} else {
    console.log('nope');
}


console.log('\n--- task 07 ---');

let n = 33;

if (n >= 0 && n <= 15) {
    console.log('first quarter of an hour');
} else if (n > 15 && n <= 30) {
    console.log('second quarter of an hour');
} else if (n > 30 && n <= 45) {
    console.log('third quarter of an hour');
} else if (n > 45 && n <= 59) {
    console.log('fourth quarter of an hour');
} else {
    console.log('error');
}


console.log('\n--- task 08 ---');

let day = 9;

if (day >= 1 && day <= 10) {
    console.log('first decade of the month');
} else if (day > 10 && day <= 20) {
    console.log('second decade of the month');
} else if (day > 20 && day <= 31) {
    console.log('third decade of the month');
} else {
    console.log('error');
}


console.log('\n--- task 09 ---');

let days = 725;

console.log('DAYS:', days);

if (days > 0) {

    if (days < 365) {
        console.log('less than one year');
    } else {
        console.log((days / 365).toFixed(2), 'year(s)')
    }

    if (days < 31) {
        console.log('less than one month');
    } else {
        console.log((days / 31).toFixed(2), 'month(s)')
    }

    if (days < 7) {
        console.log('less than one week');
    } else {
        console.log((days / 7).toFixed(2), 'week(s)')
    }

    console.log(days * 24, 'hours');
    console.log(days * 1440, 'seconds');
} else {
    console.log('error')
}


console.log('\n--- task 10 ---');
let day2 = 0;
let month = 0;

if (days > 365) {
    day2 = days % 365;
} else {
    day2 = days;
}

if (day2 >= 1 && day2 <= 31) {
    month = 1;
} else if (day2 >= 31 && day2 <= 59) {
    month = 2;
} else if (day2 >= 59 && day2 <= 90) {
    month = 3;
} else if (day2 >= 90 && day2 <= 120) {
    month = 4;
} else if (day2 >= 120 && day2 <= 151) {
    month = 5;
} else if (day2 >= 151 && day2 <= 181) {
    month = 6;
} else if (day2 >= 181 && day2 <= 212) {
    month = 7;
} else if (day2 >= 212 && day2 <= 243) {
    month = 8;
} else if (day2 >= 243 && day2 <= 273) {
    month = 9;
} else if (day2 >= 273 && day2 <= 304) {
    month = 10;
} else if (day2 >= 304 && day2 <= 334) {
    month = 11;
} else if (day2 >= 334 && day2 <= 365) {
    month = 12;
}
console.log(month);

switch (month) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    case 6:
        console.log('June')
        break;
    case 7:
        console.log('July')
        break;
    case 8:
        console.log('August')
        break;
    case 9:
        console.log('September')
        break;
    case 10:
        console.log('October')
        break;
    case 11:
        console.log('November')
        break;
    case 12:
        console.log('December')
        break;
    default:
        console.log('error');
}