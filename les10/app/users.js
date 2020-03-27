export class Users{
    constructor(){
        this.dom = {
            inp : document.querySelector('.inp-count'),
            btn : document.querySelector('.btn-count'),
            table : document.querySelector('.table-users')
        };
        this.link = 'https://randomuser.me/api/?results='

        // this.dom.btn.addEventListener('click', this.addUsers.bind(this));
        
        // this.dom.btn.addEventListener('click', ()=> this.addUsers());
        
        this.dom.btn.addEventListener('click', this.addUsers);
    }

    addUsers = () => {
        
        fetch(`${this.link}${this.dom.inp.value}`)
            .then(r => r.json())
            .then(d => {
                console.log(d);
                this.renderUsers(d.results);
            });
    }

    renderUsers(arr){
        const users = arr.map(us => {
            return `<tr>
                <td>${us.login.username}</td>
                <td>${us.email}</td>
                <td>${us.login.password}</td>
            </tr>`
        });

        this.dom.table.innerHTML = users.join('');
    }

}