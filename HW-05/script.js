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