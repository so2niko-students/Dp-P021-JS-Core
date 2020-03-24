export class Ball{
    // width = 100;
    // height = 100;
    top = 0;
    constructor(){
        this.width = this.rand();
        this.height = this.width;
        this.left = this.rand(0, 100);
        this.fallingSpeed = this.rand(0, 10);
        this.createBall();
    }

    createBall(){
        this.div = document.createElement('div');
        this.div.classList.add('ball');
        this.div.style.width = this.width + 'px';
        this.div.style.height = this.height + 'px';
        this.div.style.left = this.left + 'vw';
        this.div.style.backgroundColor = `rgba(${this.rand(0,255)},${this.rand(0,255)},${this.rand(0,255)}, .5)`;
        document.body.appendChild(this.div);
    }

    rand(min = 50, max = 150){
        return Math.floor(Math.random() * (max - min) + min  + 1);
    }
}