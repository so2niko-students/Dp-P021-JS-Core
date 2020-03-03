// getExp();
const getExp = (currentNumb) => {
    const item1 = currentNumb.slice(0, 3);
    const item2 = currentNumb.slice(3, 6);

    separateExt(item1, item2);
};
// getExp2();
// function getExp2(currentNumb, item1, item2) {
//     item1 = currentNumb.substr(0, 3);
//     item2 = currentNumb.substr(3, 6);

//     separateExt(item1, item2);
// };

const separateExt = (item1, item2) => {
    let arr1 = [],
        arr2 = [];

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    item1.split('').forEach(item => arr1.push(parseInt(item)));
    item2.split('').forEach(item => arr2.push(parseInt(item)));

    if (arr1.reduce(reducer) === arr2.reduce(reducer)) {
        alert('YES');
    }
    else {
        alert('NO');
    }
};

while (true) {

    const ticketNumber = prompt('Write a ticket number to equal 6 numbers');

    if (currentNumb.length == 6) {

        getExp(currentNumb);

        break;
    }
}
