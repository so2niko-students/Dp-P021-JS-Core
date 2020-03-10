const arr = [1, 3, 6, 99, 67, 34, 22, 8];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i++]);
// }

// for (let el of arr) {
//     console.log(el);
// }

//Неостановимый
// arr.forEach((el, i, lArr) => console.log(i, el));

// const info = arr.every((el, i, lArr) => {
//     if (i < 3) {
//         console.log(i, el);
//         return true;
//     }

//     return false;
// });
// console.log(info);

// const info = arr.some((el, i, lArr) => {
//     if (i < 3) {
//         console.log(i, el);
//         return false;
//     }

//     return true;
// });


//Возвращает элемент массива или undefined, если не нашел
// console.log(arr.find((el) => el % 2 === 0));

//Вернет новый массив
// const newArr = arr.map(el => el / 2);
// console.log(arr, newArr);


//Возвращет отфильтрованный массив(<= исходному массиву)
// console.log(arr, arr.filter((el) => el % 2 === 0));


const users = [
    {
        name: 'User 1',
        age: 23
    },
    {
        name: 'John',
        age: 33
    },
    {
        name: 'Jane',
        age: 43
    }
];

//Возвращает нечто
console.log(users.reduce((pr, el) => {
    console.log(`${pr} + ${el}`);
    // return pr + el.age;
    pr.push(el.age);
    return pr;
}, []));