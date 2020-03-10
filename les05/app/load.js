//HTTP запросы
function load(url = '/data/data.txt') {
    //Создаем объект AJAX
    const aja = new XMLHttpRequest();

    //Настроить реагирование на получения данных 
    aja.onload = function () {
        console.log(JSON.parse(this.responseText));
        showUser(JSON.parse(this.responseText).results[0]);
    }

    //Настройка отправки данных
    aja.open('GET', url);

    //Отправка запроса
    aja.send();
}

function showUser(user) {
    root.innerHTML = `<img src='${user.picture.large}'><div><h1>${user.name.first} ${user.name.last}</h1></div>`
}

btn.onclick = () => load('https://randomuser.me/api/');