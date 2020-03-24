import {Ball} from '/components/Ball.js';
//      / - корневой каталог сервера    ./ - текущая папка   ../ - на уровень выше от текущей папки

let name = 'James Bond';

const arr = Array(10).fill(1).map(()=>new Ball());
console.log(arr);

function moveBall(){
    this.top += this.fallingSpeed;
    this.div.style.top = this.top + 'px';
}

// setInterval(()=>arr.forEach(b=>moveBall.call(b)), 1000);
setInterval(function(){
    arr.forEach(function(b){
        moveBall.call(b);
    });
}, 1000);