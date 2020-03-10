function show(msg = 'Hello') {
    console.log(msg);
}

// console.log(setTimeout(show, 10000));
// clearTimeout(целое число - id таймаута) -- для остановки работы таймаута

// const intervalID = setInterval(show, 1000);
// clearInterval(целое число - id интервала)  -- для остановки работы интервала

function timer(t) {
    console.clear();
    console.log(t.sec);
    t.sec++;
}

// setInterval(timer, 1000, { sec: 0 });

function loader(l) {
    console.clear();
    console.log(l.dots[l.counter]);
    l.counter++;
    if (l.counter == l.dots.length) {
        l.counter = 0;
    }
}

setInterval(loader, 1000, { dots: ['>', '˅', '<', '^'], counter: 0 });