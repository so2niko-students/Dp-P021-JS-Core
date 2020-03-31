export class Search{
    constructor(func){
        this.dom = {
            inp : document.querySelector('.inp-search'),
            btn : document.querySelector('.btn-search')
        }
        this.searchFunc = func;

        this.dom.btn.addEventListener('click', this.searchHandler);
    }

    searchHandler = () => {
        this.searchFunc(this.dom.inp.value);
    }
}