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


var counter = 0;
var error;
let allowStr = ['@', '_', '-', '.'];
let emailStr = 'al-123al.al@gmail.com';


//считаем кол-во '@'
for (i = 0; i <= emailStr.length; i++) {
    if (emailStr[i] == '@') {
        counter++;
    }
}

if (counter == 1) {
    for (var n = 0; n < emailStr.length; n++) {



        //проверка на латинские, допустимые символы и цифры
        if (isFinite(Number(emailStr[n])) ||
            (emailStr[n].charCodeAt() >= 65 && emailStr[n].charCodeAt() <= 90) ||
            (emailStr[n].charCodeAt() >= 97 && emailStr[n].charCodeAt() <= 122) ||
            (emailStr[n] == '@' || emailStr[n] == '_' || emailStr[n] == '-' || emailStr[n] == '.')) {

            //узнаем, цифра ли это, и стоит ли она в начале или конце
            if (isFinite(Number(emailStr[n]))) {
                if (emailStr[n] == emailStr[0] || emailStr[n] == emailStr.slice(-1)) {
                    error = emailStr[n] + ' :start/end num error';
                }
            }

            //проверяем повторяемость спец-символов:
            //перебираем строку
            for (var i = 0; i < emailStr.length; i++) {

                //сравниваем с массивом с символами
                for (var ii = 0; ii < allowStr.length; ii++) {
                    if (emailStr[i] == allowStr[ii] && !error) {

                        //проверяем, стоят ли спец-символы в начале или конце
                        if ((emailStr[i] == allowStr[ii]) && (emailStr[i] == emailStr[0] || emailStr[i] == emailStr.slice(-1))) {
                            error = emailStr[i] + ' :start/end char error';
                        }

                        //проверяем на совпадение со следующим символом
                        for (var iii = 0; iii < allowStr.length; iii++) {
                            if (emailStr[i + 1] == allowStr[iii]) {
                                error = emailStr[i] + emailStr[i + 1] + ' :repeat error';
                            }
                        }
                    }
                }
            }

        } else {
            error = emailStr[n] + ' :lang/char error';
            break;
        }
    }

} else {
    error = '@ :error';
}

if (!error) {
    console.log(emailStr, 'IS VALID');
} else {
    console.log(error);
}