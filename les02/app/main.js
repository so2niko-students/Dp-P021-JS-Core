if (5 > 3) {
    //
} else {
    //
}

if (3 == 3) {

}

// if (3 > 5)
//     alert('3 > 5');
//     console.log('постоянно');

if (4 == 0) {

} else if (4 == 1) {

} else if (4 > 3) {

}

//Оператор множественного выбора
let a = 15;
// switch (a) {
//     case 0:
//     case 1:
//     case 2: {
//         console.log('a < 3');
//         break;
//     }
//     case 4:
//     case 5:
//     case 3: {
//         console.log('>= 3');
//         break;
//     }
//     default: {
//         console.log('Ничего не подошло');
//     }
// }
a = 24;
// switch (true) {
//     case a < 0: {
//         console.log('Холодно');
//         break;
//     }
//     case a >= 0 && a < 15: {
//         console.log("Прохладно");
//         break;
//     }
//     case a >= 15 && a < 25: {
//         console.log("Тепло");
//         break;
//     }
//     case a >= 25: {
//         console.log("Жарко");
//         break;
//     }
// }

//LOOPS
let i = 0, j = 6;
for (; i < 10 && j < 100; i++ , j -= 2) {
    console.log(i, j);
}

i = 100;
// while (i--) {
//     console.log(i);
// }
// for (; i--;) {
//     console.log(i);
// }
let loop = false;

magic:
console.log('Hello');
loop = !loop;

while (typeof 'hello' == 'number') {
    i -= 3;
    if (i == 40) {
        continue;
    }
    console.log(i);
    if (i <= 0) {
        break;
    }
}

//Arrays
console.log(Array.isArray([23, 23]));
// Как создавать массивы
const arr1 = [];//литеральный метод
const arr2 = [22, 33, 'dog'];
arr1[44] = 'Сорок четвертый';//Мутабельны
console.log(arr1);

let arr3 = arr1;
arr3[11] = 'Hello';
console.log(arr3);
console.log([2] == [2]);
console.log(arr3 == arr1);

const arr4 = new Array();//объектный
console.log(arr4);
const arr5 = new Array(555);
console.log(arr5.fill(5));
const arr6 = [];
arr6.length = 100;
console.log(arr6.fill(6));

arr3[-11] = 'минус один';
arr3[1.3] = 'минус один';
arr3['London'] = 'a capital';
console.log(arr3);