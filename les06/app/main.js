//Литеральный
let r0 = /f/i;
console.log(r0.test('Dnipro'));
//Объектный
let r1 = new RegExp('d', 'i');
console.log(r1, r1.test('Dnipro'));
let r2 = /ni/i;
console.log(r2, r2.test('Dnipro'));
//набор символов
let r3 = /[aouie]/i;
console.log(r3, r3.test('Dnipro'));
//наличие цифр
let r4 = /[0123456789]/;
let r5 = /[0-9]/;
let r6 = /\d/;
console.log(r6, r6.test('Dnipro'));
//Наличие букв
let r7 = /[abcdefghijklmnopqrstuvwxyz]/i;
let r8 = /[a-z]/i;
let r9 = /\w/i;//цифробуквенный аналог[a-z0-9]
console.log(r9, r9.test('Dnipro2'));
//Пробельный символ - пробелы, переносы строки, табуляция
let r10 = /\s/;
console.log(r10, r10.test('Dnipro 2'));
//Противоположности
/*
\D - не цифра
\W - не цифробуквенный символ
\S - не пробельный символ
*/
//кириллица
let r11 = /[а-яё]/i;
console.log(r11, r11.test('Днипро 2'));
//Отрицание
let r12 = /[^ёяею]/i;
console.log(r12, r12.test('Днипро 2'));
const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non aliquam officia sint repellendus a, odit
commodi eaque, error corporis consectetur deserunt labore quaerat, suscipit sequi molestias officiis doloribus
possimus?`;

//Повторения. Квантификаторы - 
//{5} - точное значение
//{4, 6} - диапазон
//{,6} - максимальное - ИГНОР
//{5,} - минимальное значение
//{1,} - хотя-бы одно значение -->   +
//{0,1} - может быть, а может не быть -->    ?
//{0,} - не важно сколько -->    *
let r13 = /[a-z]+/ig;
console.log(r13, str.match(r13));
