let tg = window.Telegram.WebApp; // Получаем объект webapp телеграма
tg.expand(); // Расширяем на все окно

let count = 0; // Счетчик нажатий

function incrementCounter() {
    count++;
    document.getElementById('counter').innerText = count;
}

// Отправка данных в бот
document.getElementById('sendDataButton').addEventListener('click', function() {
    tg.sendData(`Количество нажатий: ${count}`); // Отправляем данные в строковом виде
});

// Отображение информации о пользователе
let usercard = document.getElementById("usercard");
let profName = document.createElement('p');
profName.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name} (${tg.initDataUnsafe.user.username})`;
usercard.appendChild(profName);

let userid = document.createElement('p');
userid.innerText = `ID пользователя: ${tg.initDataUnsafe.user.id}`;
usercard.appendChild(userid);
