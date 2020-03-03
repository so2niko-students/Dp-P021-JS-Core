
let score = 0;
let questionPrompts = [
    'Какого цвета яблоки? \n(a) Зеленые \n (b) Синие \n (c) Коричневые',
    'Сколько дней в неделе? \n(a) Три \n (b) Пять \n (c) Семь',
    'Кто обитает на дне океана? \n(a) Чудище болотное \n (b) SpongeBob SquarePants \n (c) Собака Баскервилей'
]
let answers = ['a', 'c', 'b'];
for (let i = 0; i in questionPrompts; i++) {
    let ans = prompt(questionPrompts[i]);
    if (ans == answers[i]) {
        score += 2;
    }
}
// for (const iterator of questionPrompts) {
//     console.log(iterator);
// }

alert(`Вы набрали ${score} очков`);
