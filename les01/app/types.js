//Строка - String
let str = 'Dnipro';
console.log(str[2]);

str[2] = '2';//иммутабельность строк
console.log(str);
console.log(str.length);

//Number - Число
let n = .22;
//целые, дробные, Infinity, -Infinity, NaN
console.log(n);
console.log(typeof n);

//Boolean - логический(булев)
let b = true;
let c = false;
console.log(b);
console.log(typeof b);
console.log(Boolean('false'));

//undefined - не определился - Забыл
let u = undefined;
let u1;

//null - Забил
let n1 = null;
console.log(typeof n1);

//Сложный тип данных - ОБъект Object
//Мутабелен, копируется по ссылке
let ob = {
    name: 'Nick',
    value: 22,
    isNext: false,
    count: null,
    element: undefined,
};

ob.innerOb = {
    name: 'In1'
};

let n2 = n;
n = 33;
console.log(n, n2);

// let ob2 = JSON.parse(JSON.stringify(ob));
let ob2 = ob;
ob2.name = 'Tetris';

console.log(ob, ob2);

//Symbol
//BigInt