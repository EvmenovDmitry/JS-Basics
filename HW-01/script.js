// task #1
let str = 'Привет';
let sum = 123;
let num = 15.8;
let flag = true
let txt = 'true'

console.log('--- task #1 ---')

console.log(str, '=', typeof str);
console.log(sum, '=', typeof sum);
console.log(num, '=', typeof num);
console.log(flag, '=', typeof flag);
console.log(txt, '=', typeof txt);

console.log('\n--- task #2 ---')

let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18;

a1 = 5 % 3;
a2 = 3 % 5;
a3 = 5 + '3';
a4 = '5' - 3;
a5 = 75 + 'кг';
a6 = 785 * 653;
a7 = 100 / 25;
a8 = 0 * 0;
a9 = 0 / 2;
a10 = 89 / 0;
a11 = 98 + 2;
a12 = 5 - 98;
a13 = (8 + 56 * 4) / 5;
a14 = (9 - 12) * 7 / (5 + 2);
a15 = +"123";
a16 = 1 || 0;
a17 = false || true;
a18 = true > 0;

console.log('a1 =', a1, '=', typeof a1);
console.log('a2 =', a2, '=', typeof a2);
console.log('a3 =', a3, '=', typeof a3);
console.log('a4 =', a4, '=', typeof a4);
console.log('a5 =', a5, '=', typeof a5);
console.log('a6 =', a6, '=', typeof a6);
console.log('a7 =', a7, '=', typeof a7);
console.log('a8 =', a8, '=', typeof a8);
console.log('a9 =', a9, '=', typeof a9);
console.log('a10 =', a10, '=', typeof a10);
console.log('a11 =', a11, '=', typeof a11);
console.log('a12 =', a12, '=', typeof a12);
console.log('a13 =', a13, '=', typeof a13);
console.log('a14 =', a14, '=', typeof a14);
console.log('a15 =', a15, '=', typeof a15);
console.log('a16 =', a16, '=', typeof a16);
console.log('a17 =', a17, '=', typeof a17);
console.log('a18 =', a18, '=', typeof a18);

console.log('\n--- task #3 ---')

let width = 10;
let height = 23;
let SPryam = width * height;

console.log(`Rectangle area:
width = ${width} cm
height = ${height} cm
area = ${SPryam} cm^2`);

console.log('\n--- task #4 ---')

let cylHeight = 10;
let cylDiameter = a7;
let VCilindra = Math.PI * Math.pow((cylDiameter / 2), 2) * cylHeight;

console.log(`Cylinder volume:
height = ${cylHeight} cm
diameter = ${cylDiameter} cm
volume = ${VCilindra.toFixed(2)} cm^3`);

console.log('\n--- task #5 ---');

let r = 5;
let SKruga = Math.PI * Math.pow(r, 2);

console.log(`Area of a circle:
radius = ${r} cm
area = ${SKruga.toFixed(2)} cm^2`);

console.log('\n--- task #6 ---');

let trBaseA = 5;
let trBaseB = 7;
let trHeight = 10;
let STrap = 0.5 * ((trBaseA + trBaseB) * trHeight);

console.log(`Area of a trapeze:
base A = ${trBaseA} cm
base B = ${trBaseB} cm
height = ${trHeight} cm
area = ${STrap} cm^2`);

console.log('\n--- task #7 ---');

let S = 2000000;
let p = 10;
let years = 5;
let Pereplata = (S - (S / (years * 12)) * (p / 100) / 12);

console.log(Pereplata.toFixed(2));

console.log('\n--- task #8 ---');

let a = 8;
let b = 3;

console.log('the equation #1');
console.log(`a + 2 (x - b) = 16`);

console.log('the equation #2');
console.log(`b (x + 15) = a + 6x;`);

console.log('the equation #3');
console.log(`x + 2x + ax + bx = 23780.`);

console.log('\n--- task #9 ---');

console.log(`Бывало, спит у ног собака,
костер занявшийся гудит,
и женщина из полумрака
глазами зыбкими глядит.


Потом под пихтою приляжет
на куртку рыжую мою
и мне, задумчивая, скажет:


"А ну-ка, спой!.."- и я пою.`);

console.log('\n--- task #10 ---');

let str1 = 'индо земля зашаталась под ногами-и вырос,';
let str2 = 'и заревел он голосом диким…';
let str3 = 'блеснула молния и ударил гром,';
let str4 = 'а так какое-то чудище, страшное и мохнатое,';
let str5 = 'как будто из-под земли, перед купцом:';
let str6 = 'Он подошёл и сорвал аленький цветочек.';
let str7 = 'зверь не зверь, человек не человек,';
let str8 = 'В ту же минуту, безо всяких туч,';

let text = str6 + '\n' + str8 + '\n' + str3 + '\n' + str1 + '\n' + str5 + '\n' + str7 + '\n' + str4 + '\n' + str2;
console.log(text);