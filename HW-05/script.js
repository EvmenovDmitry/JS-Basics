console.log('--- task #1 ---');

function infoBlock() {

    let groupID = 'FE101';
    let studentName = 'Евменов Дмитрий Андреевич';

    let strFill = '*';
    let strLine_1 = 'Домашняя работа: "Функции"';
    let strLine_2 = 'Выполнил: студент гр.' + groupID;
    let strLine_3 = studentName;
    let arrInfoBlock = [strLine_1, strLine_2, strLine_3];

    let strMax = 0;

    //находим самую длинную строку
    for (var i = 0; i < arrInfoBlock.length; i++) {
        if (arrInfoBlock[i].length > strMax) {
            strMax = arrInfoBlock[i].length;
        }
    }

    //подгоняем длину всех строк заполняя пробелами
    for (var i = 0; i < arrInfoBlock.length; i++) {
        while (arrInfoBlock[i].length < strMax) {
            arrInfoBlock[i] = arrInfoBlock[i] + ' ';
        }
    }

    //добавили в начале и конце по одной "*" учитывая отступы до текста
    for (var i = 0; i < arrInfoBlock.length; i++) {
        arrInfoBlock[i] = '* ' + arrInfoBlock[i] + ' *';
    }

    //сделали строку-филлер нужной длинны и добавили ее в начало и конец массива
    strFill = strFill.repeat(strMax + 4);
    arrInfoBlock.unshift(strFill);
    arrInfoBlock.push(strFill);

    //вывод
    for (var i = 0; i < arrInfoBlock.length; i++) {
        console.log(arrInfoBlock[i]);
    }

}

infoBlock();


console.log('\n--- task #2 ---');


function triangle(rowsTriangle) {

    let fillThisRow = 1;
    let spaceThisRow = 0;

    //узнаём общую ширину треугольника
    let lastRowLen = rowsTriangle * 2 - 1;

    for (var i = 0; i < rowsTriangle; i++) {
        //узнаём кол-во пробелов до и после "х"
        spaceThisRow = (lastRowLen - fillThisRow) / 2;

        console.log(' '.repeat(spaceThisRow) + 'x'.repeat(fillThisRow) + ' '.repeat(spaceThisRow));

        fillThisRow += 2;
    }
}

triangle(3);
triangle(6);
triangle(12);

console.log('--- --- --- --- --- --- --- ---');

function triangleRev(rowsTriangle) {

    let spaceThisRow = 0;

    //узнаём общую ширину треугольника
    let lastRowLen = rowsTriangle * 2 - 1;

    let fillThisRow = lastRowLen;

    for (var i = lastRowLen + 1; i > rowsTriangle; i--) {
        //узнаём кол-во пробелов до и после "х"
        spaceThisRow = (lastRowLen - fillThisRow) / 2;

        console.log(' '.repeat(spaceThisRow) + 'x'.repeat(fillThisRow) + ' '.repeat(spaceThisRow));

        fillThisRow -= 2;
    }
}

triangleRev(12);
triangleRev(6);
triangleRev(3);


console.log('\n--- task #3 ---');

let allowStr = ['@', '_', '-', '.'];

let emailStr = 'al-al.al_@gmail.com';

console.log('s'.charCodeAt());

console.log(emailStr.length);

//считаем кол-во '@'
var counter = 0;
for (i = 0; i <= emailStr.length; i++) {
    if (emailStr[i] == '@') {
        counter++;
        console.log(counter);
    }
}

if (counter == 1) {
    console.log('@ success');

    //проверка на латинские и допустимые символы
    for (i = 0; i <= emailStr.length; i++) {
        if ((emailStr[i].charCodeAt() >= 65 && emailStr[i].charCodeAt() <= 90) ||
            (emailStr[i].charCodeAt() >= 97 && emailStr[i].charCodeAt() <= 122)) {
            console.log(emailStr[i], 'correct');
        } else {
            console.log(emailStr[i], 'incorrect');
            break
        }
    }
} else {
    console.log('@ error');
}