export class Users{
    constructor(){
        this.dom = {
            inp : document.querySelector('.inp-count'),
            btn : document.querySelector('.btn-count'),
            table : document.querySelector('.table-users'),
            btnCountryUp : document.querySelector('.btn-country-up'),
            btnCountryDown : document.querySelector('.btn-country-down')
        };
        this.link = 'https://randomuser.me/api/?results='

        // this.dom.btn.addEventListener('click', this.addUsers.bind(this));
        
        // this.dom.btn.addEventListener('click', ()=> this.addUsers());
        
        this.dom.btn.addEventListener('click', this.addUsers);
        this.dom.btnCountryUp.addEventListener('click', () => this.sortCountry());
        this.dom.btnCountryDown.addEventListener('click', () => this.sortCountry(false));
    }

    addUsers = () => {
        
        fetch(`${this.link}${this.dom.inp.value}`)
            .then(r => r.json())
            .then(d => {
                console.log(d);
                this.data = d.results;
                this.renderUsers(d.results);
            });
    }

    renderUsers(arr){
        const users = arr.map(us => {
            return `<tr>
                <td>${us.login.username}</td>
                <td>${us.email}</td>
                <td>${us.login.password}</td>
                <td>${us.location.country}</td>
                <td>${us.dob.age}</td>
            </tr>`
        });

        this.dom.table.innerHTML = users.join('');
    }

    sortCountry(isUp = true){
        const one = isUp? 1: -1;
        this.data.sort((a, b) => {
            return a.location.country > b.location.country? one: -1 * one;
        });

        this.renderUsers(this.data);
    }

}