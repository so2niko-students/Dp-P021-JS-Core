//function declaration
function clear(name) {
    console.clear();
    console.log(`${name} Консоль очищена`);
}

//function expression
const log = function (info) {
    console.log(info);
}

//function expression --> arrow function
const info = (txt) => {
    console.info(txt);
}

in1.value = 333;

function show() {
    console.log(in1.value);
    in1.style.borderColor = in1.value;
}

btn1.onclick = show;