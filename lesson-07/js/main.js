let task = prompt("Введіть назву завдання");
if (task === "Temperature") {
    // Оформіть Temperature як функцію, яку параметром передається температура в 
    // одній системі, а повертається до іншої. Жодних prompt та console.log 
    // у коді бути не повинно, якщо ви хочете надалі користуватися цією функцією 
    // будь-де в коді зручно. Чи потрібен блок коду функції для вирішення цього завдання?
    function temperature(сelsius) {
        const coefficient = 1.8;
        const offsets = 32;
        return сelsius * coefficient + offsets;
    }
    const temperature1 = (сelsius) => сelsius * 1.8 + 32;
} else if (task === "RGB") {
    // Оформіть Number: RGB як функцію, яку параметрами передаються 
    // три числа (r, g, b) => . Функція повинна повертати рядок у нотації #RRGGBB. 
    // Використовуючи умови або тернарний оператор Досягніть що б у результаті 
    // завжди було 7 символів, навіть коли значення кольору менше 15ти. 
    // Чи потрібний блок коду цієї функції?
    function grb(r, g, b) {
        let str = '';
        // let elPage = document.createElement('div');
        // elPage.innerHTML = `color = #${String(r).padStart(2, '0') + String(g).padStart(2, '0') + String(b).padStart(2, '0')}`;
        // document.body.append(elPage);
        str = `#${String(r).padStart(2, '0') + String(g).padStart(2, '0') + String(b).padStart(2, '0')}`;
        return str;
    }
    console.log(grb(5, 4, 5));
} else if (task === "Flats") {
    // Оформіть Number: flats як функцію. Продумайте достатню кількість параметрів для 
    // розв'язання задачі. Функція повинна повертати об'єкт виду {entrance, floor}, 
    // де entrance - номер падiка, floor - номер поверху, на якому знаходиться квартира.
    function fast(floor, rooms, numberRoom) {
        const apartment = {};
        let entranceRooms = rooms * floor;
        let entrance = Math.ceil(numberRoom / entranceRooms);
        const etage = Math.ceil((numberRoom % entranceRooms) / rooms);
        apartment[entrance] = etage;
        console.log(apartment);
    }
    fast(2, 4, 12);
} else if (task === "Credentials") {
    // Оформіть завдання String: credentials як функцію без параметрів. 
    // Використовуйте функцію capitalize із домашнього завдання з масивів. 
    // Функція повинна містити виклики prompt та повертати об'єкт виду 
    // {name, surname, fatherName, fullName}
    function capitalize() {
        let firstName = prompt("Ваше ім'я:").trim();
        let lastName = prompt("Ваше прізвіще:").trim();
        let fatheName = prompt("По батькові:").trim();
        const person = {};
        person.firstName = firstName[0].toUpperCase() + firstName.toLowerCase().slice(1);
        person.lastName = lastName[0].toUpperCase() + lastName.toLowerCase().slice(1);
        person.fatheName = fatheName[0].toUpperCase() + fatheName.toLowerCase().slice(1);
        person.fullName = `${firstName[0].toUpperCase() + firstName.toLowerCase().slice(1)} ${lastName[0].toUpperCase() + lastName.toLowerCase().slice(1)} ${fatheName[0].toUpperCase() + fatheName.toLowerCase().slice(1)}`;
        return person;
    }
    capitalize();
} else if (task === "New line") {
    const newLine = (str) => { str.split("\\n").join("\n") };

    // function newLine(str) {
    //     return str.split("\\n").join("\n");
    // }
    console.log(newLine(prompt(`Введіть рядок, для переводу строки використовуйте \\n`)));
} else if (task === "Prompt OR") {
    // Оформіть завдання Prompt: OR як функцію, яка приймає рядок для prompt 
    // та значення за замовчуванням. Функція повинна повертати введений 
    // текст або значення за замовчуванням у разі відмови користувача вводити щось. 
    // Використовуйте функцію без блоку коду (функція одного виразу)

    const promptOr = (str = prompt("Ваш вік?"), defaultText = "text") => str || defaultText;
} else if (task === "Login And Password") {
    // Оформіть завдання Login And Password як функцію, яка приймає два 
    // параметри - правильний логін та пароль і повертає true якщо 
    // логін та пароль введені користувачами вірні, або false якщо 
    // користувач не зміг. Функція повинна містити в собі виклики prompt 
    // для введення логіну та пароля користувачем.
    function login(userLogin = prompt("Your login:"), userPassword = prompt("Your password:")) {
        const login = "admin";
        const password = "qwerty";

        if (userLogin === login && userPassword === password) {
            alert("Вітаю АДМІНА!!!");
        } else {
            alert("Ви не туди попали.");
        }
    }
    login();
} else if (task === "For Table") {
    // Оформіть завдання For Multiply Table як функцію, 
    // яка приймає будь-який масив з масивами, а повертає рядок HTML з тегом 
    // <table> і всякими tr та td.
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16],
    ];
    function table(arr) {
        let str = "<table style='border: 1px solid #000; width:100%;'>";
        let i = 0;
        for (const currency of arr) {
            if (!(i % 2)) {
                str += `<tr style="background:#ccc;">`;
            } else {
                str += `<tr>`;
            }
            for (const item of currency) {
                str += `<td style='border: 1px solid #000;'>${item}</td>`;
            }
            str += `</tr>`;
            i++;
        }
        str += "</table>";
        return document.write(str);
    }
} else if (task === "Filter Lexics") {
    // Оформіть завдання Filter Lexics як функцію, яка приймає будь-який рядок 
    // для перевірки та масив некоректних слів (['бляха', 'муха', "пляшка", "шабля"], 
    // наприклад). Функція повинна повертати рядок без цих некоректних слів.
    function lexics(str, arr) {
        let strArr = str.split(' ');
        const newArr = strArr.filter(el => !(arr.includes(el)));
        return newArr.join(' ');
    }
    console.log(lexics("одного разу лох розпочав війну", ['qwer', 'разу', 'війну']));
} else if (task === "Currency Table") {
    // Оформіть завдання Currency Table як функцію без параметрів, 
    // яка складає отримані дані у внутрішній двовимірний масив, 
    // після чого відображає його використовуючи функцію із завдання For Table

    function currencyTable() {
        const arr = [];
        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
            .then(data => {
                //ця функція запускається коли дані завантажуються.
                //Інший код працює РАНIШЕ.
                //тільки тут є змінна data з завантаженими даними

                let obj = data.rates;

                for (const key in obj) {
                    let arrEl = [];
                    arrEl.push(key);
                    arrEl.push(obj[key]);
                    arr.push(arrEl);
                }

            })
        return arr;
    }
    const newEl = currencyTable();
    console.log(typeof (newEl));
    console.log('newEl = ', newEl);
    // console.log('newEl = ', newEl[0][0]);
    function table(arr) {
        let str = "<table style='border: 1px solid #000; width:100%;'>";
        let i = 0;
        console.log('arr = ', arr);
        for (const currency of arr) {
            console.log('currency = ', currency);
            if (!(i % 2)) {
                str += `<tr style="background:#ccc;">`;
            } else {
                str += `<tr>`;
            }
            for (const item of currency) {
                str += `<td style='border: 1px solid #000;'>${item}</td>`;
            }
            str += `</tr>`;
            i++;
        }
        str += "</table>";
        return document.write(str);
    }
    table(newEl)
} else if (task === "Form") {
    // Оформіть завдання Form як функцію, яка приймає будь-який об'єкт як 
    // параметр та створює форму на екрані.
    function formLogin(obj) {
        let str = '<form>';
        for (key in obj) {
            if (typeof (obj[key]) === 'string') {
                str += `<p><label>${key}: <input type="text" value="${obj[key]}"/></label></p>`;
            } else if (typeof (obj[key]) === 'number') {
                str += `<p><label>${key}: <input type="number" value="${obj[key]}"/></label></p>`;
            } else if (typeof (obj[key]) === 'boolean') {
                str += `<p><label>${key}: <input type="checkbox" ${obj[key] ? 'checked' : ''} /></label></p>`;
            }
        }
        str += '</form>';
        document.write(str);
    }
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": true
    }

    formLogin(car);
} else if (task === "Array of objects sort") {
    // Зробіть узагальнену функцію сортування масиву з об'єктами
    // var persons = [
    //     {name: "Іван", age: 17},
    //     {name: "Марія", age: 35},
    //     {name: "Олексій", age: 73},
    //     {name: "Яків", age: 12},
    // ]
    // sort(persons, "age"); //сортує за віком за зростанням
    // sort(persons, "name", false); //сортує на ім'я за спаданням
    // Функція дозволяє відсортувати будь-який набір даних по імені поля (другий параметр). Третім параметром іде необов'язковий 'Boolean', який у разі true робить сортування за зростанням, у разі false - за спаданням. За замовчуванням (без третього параметра) відбувається сортування за зростанням.
    var persons = [
        { name: "Іван", age: 17, children: 4 },
        { name: "Марія", age: 35, children: 6 },
        { name: "Олексій", age: 73, children: 3 },
        { name: "Яків", age: 12, children: 1 },
    ]
    function sortArr(arr, param, sort = true) {
        arr.sort((a, b) => {
            return a[param] - b[param];
        })
        if (!sort) {
            return arr.reverse();
        } else {
            return arr;
        }
    }
    console.log(sortArr(persons, 'age', false));
} else if (task === "Table") {
    // Оформіть завдання Table як функцію, яка приймає такі параметри:
    // будь-який масив об'єктів для відображення
    // поле, яким сортувати
    // порядок сортування (зменшення/зростання)
    // Перед відображенням:
    // скопіюйте вихідний масив, щоб сортування не змінило оригінал;
    // відсортуйте за допомогою функції попереднього завдання
    // Відображення візьміть із завдання Table
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female',
            age: 23
        },
        {
            name: 'Борис',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 21
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true,
            age: 15
        },
    ];

    function sortArr(arr, param, sort = true) {
        arr.sort((a, b) => {
            return a[param] - b[param];
        })
        if (!sort) {
            return arr.reverse();
        } else {
            return arr;
        }
    };

    function table(arr, param, sort) {
        const personsNew = [...arr];
        const title = [];
        for (const user of personsNew) {
            for (const key in user) {
                if (!title.includes(key)) {
                    title.push(key);
                }
            }
        }

        sortArr(personsNew, param, sort);

        let str = '<table border="1"><thead><tr>';
        for (const col of title) {
            str += `<th>${col}</th>`;
        }
        str += '</tr></thead><tbody>';
        for (const user of personsNew) {
            str += `<tr>`;
            for (const key of title) {
                str += `<td>${(user[key]) ? user[key] : ''}</td>`;
            }
            str += `</tr>`;
        }

        str += '</tbody></table>';
        document.write(str);
    };

    table(persons, 'age', false);
} else if (task === "Divide") {
    //Зробіть калькулятор для розрахунку поділу націло двох чисел.Використовуйте Math.floor або альтернативи.

    const calcResult = () => {
        //console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
        if (secondNumber.value == 0) {
            return divisionResult.innerHTML = "На нуль ділити не можна!";
        }
        divisionResult.innerHTML = Math.floor(firstNumber.value / secondNumber.value);
        // divisionResult.innerHTML = "Текст у <code>div</code> змінено за допомогою <strong>Javascript</strong><br/>" + Math.random()
    }

    firstNumber.oninput = secondNumber.oninput = calcResult
} else if (task === "Calc Func") {
    // Згадайте перше ДЗ з Javascript, в якому ви робили всякі розрахунки використовуючи код на Javascript. Оформіть це як функцію:
    // знайдіть усі вхідні дані, зробіть їх параметри
    // знайдіть змінну з результатом розрахунків і зробіть так, щоб ваша функція повертала цей результат.
    // Якщо результатів декілька, створіть об'єкт із цих результатів та поверніть його.
    const arr = [];
    const calcFunc = function (distans, days) {
        const obj = {};
        let meter = distans;
        let count = days;
        let summMeter = meter * count;
        obj.meter = meter;
        obj.days = count;
        obj.summMeter = summMeter;
        arr.push(obj);

        // return 'Відстань пройдена за ' + count + ' днів = ' + summMeter + ' м.';
        return arr;
    }
    calcFunc(100, 5);
} else if (task === "Calc Live") {
    // Використовуючи приклад із завдання Divide та функцію з Calc Func зробіть кілька полів введення в HTML, змінюючи які ви отримуватимете результат калькуляції в якомусь div.
    const arr = [];
    const calcResult = () => {
        if (distance.value && days.value) {
            calcFunc(distance.value, days.value);
            distance.value = '';
            days.value = '';
        }
    }
    const calcFunc = function (distans, days) {
        const obj = {};
        let meter = distans;
        let count = days;
        let summMeter = meter * count;
        obj.meter = meter;
        obj.days = count;
        obj.summMeter = summMeter;
        arr.push(obj);
        let str = '<table border="1" style="width:100%; margin-top:15px;"><thead><tr>';
        const header = [];
        for (const el of arr) {
            for (const key in el) {
                if (!header.includes(key)) {
                    header.push(key);
                }
            }
        }
        for (const title of header) {
            str += `<th>${title}</th>`;
        }
        str += `</tr></thead><tbody>`;
        console.log('header = ', header);
        for (const el of arr) {
            str += `<tr>`;
            for (const key in el) {
                str += `<td>${el[key]}</td>`;
            }
            str += `</tr>`;
        }
        str += `</tbody></table>`;
        result.innerHTML = str;
        return arr;
    }

    distance.oninput = days.oninput = calcResult;
}
{

}
