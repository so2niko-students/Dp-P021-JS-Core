
let answer1 = +prompt("'2'+'2'*'2', если 2 - string?");
let answer2 = prompt("Имя нашего лектора по JS?");
let answer3 = +prompt("tg45° = ?");
let rate = 0;
switch (true) {
    case (answer1 == 24): {
        rate += 3
        break;
    }
    case (answer1 == 44): {
        rate += 0
        break;
    }
    case (answer1 == 6): {
        rate += 0
        break;
    }
    default: {
        break;
    }
}
switch (true) {
    case (answer2 == 'Николай'): {
        rate += 3
        break;
    }
    case (answer2 == 'Ник'): {
        rate += 2
        break;
    }
    case (answer2 == 'Коля'): {
        rate += 1
        break;
    }
    default: {
        break;
    }
}
switch (answer3) {
    case 1: {
        rate += 3
        break;
    }
    case 0: {
        rate += 0
        break;
    }
    case 0.5: {
        rate += 0
        break;
    }
    default: {
        break;
    }
}
if (rate < 5) {
    alert(`${rate} балла из 9 возможных... Ну ты, конечно, мда...`)
} else alert(`${rate} Баллов из 9 возможных! Неплохо!`);
