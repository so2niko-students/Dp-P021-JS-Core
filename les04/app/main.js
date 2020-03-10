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

function showInfo(text, author) {
    console.log(this);
    console.log(`
${author}: ${text}    
Name: ${this.name}
age :${this.age}
________________`);
}

// users[0].show = showInfo;
// users[0].show();
users.forEach(u => showInfo.apply(u, ['hi, guys', 'Admin']));
// showInfo.apply(users[0]);

let oldestArray = [1, 8, 2, 10];

function twoOldestAges(arr) {
    arr.sort((a, b) => a - b);
    return arr.slice(-2);
}

console.log(twoOldestAges(oldestArray));
