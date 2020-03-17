function generateCircle(){
    const d = document.createElement('DIV');
    d.addEventListener('click', handlerClick);
    d.innerText = 10;
    d.style.backgroundColor = `rgba(${getRandom()},${getRandom()},${getRandom()},.3)`;
    return d;
}

function getRandom(min = 0, max = 255){
    return Math.floor(Math.random() * (max - min) + min + 1);//0.378475
}

function addCircle(){
    chain.appendChild(generateCircle());
    // console.dir(chain);
}

function handlerClick(){
    let counter = +this.innerText;
    counter += elementRobbery(this.previousElementSibling);
    counter += elementRobbery(this.nextElementSibling);
    this.innerText = counter;
}

function elementRobbery(el){
    if(el){
        const c = el.innerText;
        if(c > 1){
            el.innerText = c - 1;
        }else{
            chain.removeChild(el);
        }
        return 1;
    }

    return 0;    
}

document.querySelector('.btn-add-circle').addEventListener('click', addCircle);

const chain = document.querySelector('.chain');