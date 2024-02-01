// let meter = +prompt('Середня відстань пройдена за день в метрах:');
// let count = +prompt('Кількість днів які треба обрахувати:');
// let summMeter = meter * count;
// alert('Відстань пройдена за ' + count + ' днів = ' + summMeter + ' м.');

const credentials = {
    login: 'admin',
    password: 'qwerty'
}

const loginForm = document.querySelector('.login-form');
const user = document.getElementById('user');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

function login(e) {
    e.preventDefault();
    console.log('login = ', user.value);
    console.log('password = ', password.value);

    if (user.value === credentials.login && password.value === credentials.password) {
        const messege = document.createElement('div');
        messege.style.borderColor = 'green';
        messege.style.borderWidth = '2px';
        messege.style.borderStyle = 'solid';
        messege.style.padding = '10px 15px';
        messege.innerText = 'Вдалої роботи';
        loginForm.appendChild(messege);
    } else {
        const messege = document.createElement('div');
        messege.style.borderColor = 'red';
        messege.style.borderWidth = '2px';
        messege.style.borderStyle = 'solid';
        messege.style.padding = '10px 15px';
        messege.innerText = 'Ви не авторізовані';
        loginForm.appendChild(messege);
    }
}
submit.addEventListener('click', login);