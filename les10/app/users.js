export class Users{
    constructor(){
        this.dom = {
            inp : document.querySelector('.inp-count'),
            btn : document.querySelector('.btn-count'),
            table : document.querySelector('.table-users'),
            btnsSort : document.querySelectorAll('.btn-sort')
        };
        this.link = 'https://randomuser.me/api/?results=';

        // this.dom.btn.addEventListener('click', this.addUsers.bind(this));
        
        // this.dom.btn.addEventListener('click', ()=> this.addUsers());
        
        this.dom.btn.addEventListener('click', this.addUsers);

        this.dom.btnsSort.forEach(btn => {
            btn.addEventListener('click', () => this.sortArr(btn.dataset.isUp === 'true', btn.dataset.type));
        });

    }

    addUsers = () => {
        
        fetch(`${this.link}${this.dom.inp.value}`)
            .then(r => r.json())
            .then(d => {
                console.log(d);
                this.data = d.results.map(el=>{
                    return {
                        username : el.login.username,
                        email : el.email,
                        password : el.login.password,
                        country : el.location.country,
                        age : el.dob.age
                    };
                });
                this.renderUsers(this.data);
            });
    }

    renderUsers(arr){
        const users = arr.map(us => {
            return `<tr>
                <td>${us.username}</td>
                <td>${us.email}</td>
                <td>${us.password}</td>
                <td>${us.country}</td>
                <td>${us.age}</td>
            </tr>`;
        });

        this.dom.table.innerHTML = users.join('');
    }

    sortArr(isUp = true, sortName = 'country'){
        const one = isUp? 1: -1;
        this.data.sort((a, b) => {
            return a[sortName] > b[sortName]? one: -1 * one;
        });

        this.renderUsers(this.data);
    }

    searchHandler = (str = '') => {
        let sArr = [];
        if(str === ''){
            sArr = this.data;
        }else{
            const sReg = new RegExp(str, 'i');
            sArr = this.data.filter(user => sReg.test(Object.values(user).join('')));
        }



        this.renderUsers(sArr);
    }

}