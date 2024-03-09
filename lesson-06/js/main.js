let task = prompt("Введіть назву завдання");
if (task === "Literals") {
    // Знайдіть кілька навколишніх об'єктів реального світу та створіть відповідні 
    // об'єкти Javascript. Наприклад:
    const cat = {
        color: 'black',
        weight: 5,
        breed: 'Дворовий кіт',
        owner: true
    }
} else if (task === "Literals expand") {
    // Дайте можливість користувачеві додати будь-які дві властивості до цих об'єктів 
    // з будь-якими значеннями. Забезпечте введення назви ключа і значення 
    // через prompt прямо в літералі об'єкта {}

    let key1 = prompt('Enter Key 1');
    let value1 = prompt('Enter value 1');
    let key2 = prompt('Enter Key 2');
    let value2 = prompt('Enter value 2');
    const auto = {
        model: 'BMW',
        color: 'Black',
        fuel: 'disel',
    };
    auto[key1] = value1;
    auto[key2] = value2;
    console.log(auto);
} else if (task === "Literals copy") {
    // Нехай користувач введе ще одну властивість змінну. 
    // Вставте цю змінну в новий об'єкт. Скопіюйте об'єкт із попереднього 
    // завдання на новий об'єкт.
    let key1 = prompt('Enter Key 1');
    let value1 = prompt('Enter value 1');
    let key2 = prompt('Enter Key 2');
    let value2 = prompt('Enter value 2');
    let copy = confirm('Copy obj');
    const auto = {
        model: 'BMW',
        color: 'Black',
        fuel: 'disel',
        copy
    };
    auto[key1] = value1;
    auto[key2] = value2;

    let newAuto = {}
    if (auto.copy) {
        newAuto = { ...auto }
    }
    console.log(auto);
    console.log(newAuto);
} else if (task === "Html tree") {
    // <body>
    //     <div>
    //         <span>Enter a data please:</span>
    //         <br />
    //         <input type='text' id='name'>
    //         <input type='text' id='surname'>
    //     </div>
    //     <div>
    //         <button id='ok'>OK</button>
    //         <button id='cancel'>Cancel</button>
    //     </div>
    // </body>
    // Зробіть декларативну JSON-структуру для тегів вище, у якій:
    // кожен тэг буде об'єктом
    // ім'я тега буде полем tagName
    // Вкладені теги будуть у полі children
    // Набір аттрибутів тега буде в полі attrs.
    const html = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        tagContent: 'Enter a data please:'
                    }, {
                        tagName: 'br'
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'name'
                            }
                        ]
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'surname'
                            }
                        ]
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        tagContent: 'OK',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'ok'
                            }
                        ]
                    }, {
                        tagName: 'button',
                        tagContent: 'Cancel',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'cancel'
                            }
                        ]
                    }
                ]
            }
        ]
    }
    console.log('Button 2 = ', html.children[1].children[1].tagContent);
    console.log('Input 2 id = ', html.children[0].children[3].attrs[1].attrName);
} else if (task === "Parent") {
    // Додайте кожному об'єкту тега з попереднього завдання зв'язок з батьком, 
    // використовуючи властивість parent та присвоєння
    alert('Не зрозумів щопотрібно зробити (');
    const html = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        tagContent: 'Enter a data please:'
                    }, {
                        tagName: 'br'
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'name'
                            }
                        ]
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'surname'
                            }
                        ]
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        tagContent: 'OK',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'ok'
                            }
                        ]
                    }, {
                        tagName: 'button',
                        tagContent: 'Cancel',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'cancel'
                            }
                        ]
                    }
                ]
            }
        ]
    }
} else if (task === "Change OK") {
    const html = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        tagContent: 'Enter a data please:'
                    }, {
                        tagName: 'br'
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'name'
                            }
                        ]
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'surname'
                            }
                        ]
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        tagContent: 'OK',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'ok'
                            }
                        ]
                    }, {
                        tagName: 'button',
                        tagContent: 'Cancel',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'cancel'
                            }
                        ]
                    }
                ]
            }
        ]
    }
    html.children[1].children[1].attrs[prompt('Додайте атрибут до кнопки')] = prompt('Введіть значення атрибуту');
} else if (task === "Destructure") {
    // Використовуючи деструктуризацію структури із завдання HTML Tree:
    // Виведіть значення тексту у тезі span,
    // Виведіть значення тексту в другій кнопці та
    // Виведіть значення атрибуту id у другому input.
    const html = {
        tagName: 'body',
        children: [
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'span',
                        tagContent: 'Enter a data please:'
                    }, {
                        tagName: 'br'
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'name'
                            }
                        ]
                    }, {
                        tagName: 'input',
                        attrs: [
                            {
                                attrName: 'type',
                                attrValue: 'text'
                            }, {
                                attrName: 'id',
                                attrValue: 'surname'
                            }
                        ]
                    }
                ]
            },
            {
                tagName: 'div',
                children: [
                    {
                        tagName: 'button',
                        tagContent: 'OK',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'ok'
                            }
                        ]
                    }, {
                        tagName: 'button',
                        tagContent: 'Cancel',
                        attrs: [
                            {
                                attrName: 'id',
                                attrValue: 'cancel'
                            }
                        ]
                    }
                ]
            }
        ]
    }
    const { children: [
        { children: [
            { tagContent: spanText },
            { },
            { },
            { attrs: [
                { },
                { attrValue: idValue }
            ] }
        ] },
        { children: [
            { },
            { tagContent: buttonText }
        ] }
    ] } = html;

    console.log(spanText);
    console.log(buttonText);
    console.log(idValue);
} else if (task === "Destruct array") {
    // let arr = [1, 2, 3, 4, 5, "a", "b", "c"]
    // напишіть код, який використовуючи деструктуризацію покладе:
    // парні числа в змінні even1, even2,
    // непарні в odd1, odd2, odd3,
    // Літери в окремий масив
    let arr = [1, 2, 3, 4, 5, "a", "b", "c"];
    let newArr = [];
    let arr1 = [];
    let i = 1;
    let k = 1;

    for (let el of arr) {
        if (!(el % 2) && (typeof (el) === 'number')) {
            arr1.push(`even${i}`);
            i++;
        } else if (typeof (el) !== 'number') {
            newArr.push(el);
        } else {
            arr1.push(`odd${k}`);
            k++;
        }
    }
    console.log(newArr);
    console.log(arr1);
    console.log('як з цього деструктуризацію зробити, не можу догнати (');
    // хіба що руами прописати

    let [odd1, even1, odd2, even2, odd3, ...charel] = arr;
    console.log(charel);
} else if (task === "Destruct string") {
    // let arr = [1, "abc"]
    // напишіть код, який використовуючи деструктуризацію покладе:
    // Число в змінну number
    // літеру a в змінну s1
    // літеру b у змінну s2
    // літеру c у змінну s3
    let arr = [1, "abc"];
    let [number, [s1, s2, s3]] = arr;
    console.log(number);
    console.log(s1);
    console.log(s2);
    console.log(s3);
} else if (task === "Destruct 2") {
    // let obj = {name: 'Ivan',
    // surname: 'Petrov',
    // children: [{name: 'Maria'}, {name: 'Nikolay'}]}
    // вийміть використовуючи деструктуризацію імена дітей у змінні name1 та name2
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [
            { name: 'Maria' },
            { name: 'Nikolay' }
        ]
    }
    let { children: [name1, name2] } = obj;
    console.log(name1);
    console.log(name2);
} else if (task === "Destruct 3") {
    // let arr = [1,2,3,4, 5,6,7,10]
    // вийміть використовуючи деструктуризацію об'єктів два перші елементи та довжину масиву в змінні a, b та length
    let arr = [1, 2, 3, 4, 5, 6, 7, 10];
    let [a, b] = arr;
    let { length } = arr;
    console.log(a);
    console.log(b);
    console.log(length);
} else if (task === "Copy delete") {
    // Зробіть копію одного з об'єктів із завдання Literals без ключа, який введе користувач, з використанням деструктурiзацiї та rest, без використання оператору delete.
    const cat = {
        color: 'black',
        weight: 5,
        breed: 'Дворовий кіт',
        owner: true
    }

    let el = prompt('color, weight, breed, owner');
    const { [el]: delet, ...newcat } = cat;
    console.log('newcat = ', newcat);
} else if (task === "Currency real rate") {
    // Нижче наведено код, який завантажує актуальну інформацію про курси валют. Скопіюйте посилання з нього вставте в браузер заради інтересу. Реалізуйте калькулятор обміну валют таким чином:
    // Користувач вводить вхідну валюту
    // Користувач вводить валюту, в яку відбувається конвертація
    // Користувач вводить суму у вхідній валюті
    // Користувач бачить результат конвертації
    //     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
    //      .then(data => {
    //             //ця функція запускається коли дані завантажуються.
    //             //Інший код працює РАНIШЕ.
    //             //тільки тут є змінна data з завантаженими даними
    //             console.log(data) // Вивчіть структуру, що отримується з сервера в консолі
    //          })
    // Врахуйте, що користувач може ввести якусь дичину або назву валют у неправильному регістрі
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними

            let money1 = data.rates[prompt('Вхідна валюта').toUpperCase()];
            let money2 = data.rates[prompt('Валюта в яку відбувається конвертація').toUpperCase()];
            let sum = Number(prompt('Сума у вхідній валюті'));
            let result;
            if (money1 && money2 && sum) {
                result = (sum * money2) / money1;
                console.log(result);
            } else {
                console.log('Невірний ввід даних');
            }
        })
} else if (task === "Currency drop down") {
    // Зробіть список, що випадає, з назвами всіх валют, використовуючи код з минулого завдання і накопичення HTML-тегів у рядковій змінній. Для списків, що випадають, в HTML передбачені теги <select> і <option>
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними

            let obj = data.rates;
            let str = '<select>';
            for (const key in obj) {
                str += `<option value="${key}">${key}</option>`
            }
            str += '</select>';
            document.write(str);
        })
} else if (task === "Currency table") {
    // Зробіть двовимірну таблицю з курсами між усіма можливими парами валют на кшталт таблиці Піфагора, використовуючи код із завдання Currency real rate:
    // Використовуйте тільки один запит на сервер. Використовуйте розрахунок кроскурсу для обчислення курсу між будь-якою парою валют
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            //ця функція запускається коли дані завантажуються.
            //Інший код працює РАНIШЕ.
            //тільки тут є змінна data з завантаженими даними

            let obj = data.rates;
            let str = '<table style="width:100%; border: 1px solid #000;">';
            str += '<thead><tr><th style="border: 1px solid #000;"></th>';
            for (const key in obj) {
                str += `<th style="border: 1px solid #000;">${key}</th>`;
            }
            str += '</tr></thead><tbody>';
            for (const key0 in obj) {
                str += `<tr><td style="border: 1px solid #000;">${key0}</td>`;
                for (const key1 in obj) {
                    if (key0 === key1) {
                        str += `<td style="border: 1px solid #000;">1</td>`;
                    } else {
                        str += `<td style="border: 1px solid #000;">${(obj[key0] / obj[key1]).toFixed(2)}</td>`;
                    }
                }
                str += '</tr>';
            }
            str += '</tbody></table>';
            document.write(str);
        })
} else if (task === "Form") {
    // Напишіть код, який будь-якого об'єкта створює форму HTML. Наприклад для такого об'єкту
    // const car = {
    //       "Name":"chevrolet chevelle malibu",
    //       "Cylinders":8,
    //       "Displacement":307,
    //       "Horsepower":130,
    //       "Weight_in_lbs":3504,
    //       "Origin":"USA",
    //       "in_production": false
    // }
    // На екрані має з'явитись форма з 7 рядків, з назвами полів, взятими з ключів та полями введення відповідних типів. значеннями полів введення мають бути значення об'єкта.
    const car = {
        "Name": "chevrolet chevelle malibu",
        "Cylinders": 8,
        "Displacement": 307,
        "Horsepower": 130,
        "Weight_in_lbs": 3504,
        "Origin": "USA",
        "in_production": true
    }

    let str = '<form>';
    for (key in car) {
        if (typeof (car[key]) === 'string') {
            str += `<p><label>${key}: <input type="text" value="${car[key]}"/></label></p>`;
        } else if (typeof (car[key]) === 'number') {
            str += `<p><label>${key}: <input type="number" value="${car[key]}"/></label></p>`;
        } else if (typeof (car[key]) === 'boolean') {
            str += `<p><label>${key}: <input type="checkbox" ${car[key] ? 'checked' : ''} /></label></p>`;
        }
    }
    str += '</form>';
    document.write(str);
} else if (task === "Table") {
    const persons = [
        {
            name: 'Марія',
            fatherName: 'Іванівна',
            surname: 'Іванова',
            sex: 'female'
        },
        {
            name: 'Миколай',
            fatherName: 'Іванович',
            surname: 'Іванов',
            age: 15
        },
        {
            name: 'Петро',
            fatherName: 'Іванович',
            surname: 'Іванов',
            married: true
        },
    ];

    const title = [];
    for (const user of persons) {
        for (const key in user) {
            if (!title.includes(key)) {
                title.push(key);
            }
        }
    }
    let str = '<table border="1"><thead><tr>';
    for (const col of title) {
        str += `<th>${col}</th>`;
    }
    str += '</tr></thead><tbody>';
    for (const user of persons) {
        str += `<tr>`;
        for (const key of title) {
            str += `<td>${(user[key]) ? user[key] : ''}</td>`;
        }
        str += `</tr>`;
    }

    str += '</tbody></table>';
    document.write(str);
}
{
    const persons = [
        {
            "Name": "chevrolet chevelle malibu",
            "Cylinders": 8,
            "Displacement": 307,
            "Horsepower": 130,
            "Weight_in_lbs": 3504,
            "Origin": "USA"
        },
        {
            "Name": "buick skylark 320",
            "Miles_per_Gallon": 15,
            "Cylinders": 8,
            "Displacement": 350,
            "Horsepower": 165,
            "Weight_in_lbs": 3693,
            "Acceleration": 11.5,
            "Year": "1970-01-01",
        },
        {
            "Miles_per_Gallon": 18,
            "Cylinders": 8,
            "Displacement": 318,
            "Horsepower": 150,
            "Weight_in_lbs": 3436,
            "Year": "1970-01-01",
            "Origin": "USA"
        },
        {
            "Name": "amc rebel sst",
            "Miles_per_Gallon": 16,
            "Cylinders": 8,
            "Displacement": 304,
            "Horsepower": 150,
            "Year": "1970-01-01",
            "Origin": "USA"
        }
    ];

    const title = [];
    for (const user of persons) {
        for (const key in user) {
            if (!title.includes(key)) {
                title.push(key);
            }
        }
    }
    let str = '<table border="1"><thead><tr>';
    for (const col of title) {
        str += `<th>${col}</th>`;
    }
    str += '</tr></thead><tbody>';
    for (const user of persons) {
        str += `<tr>`;
        for (const key of title) {
            str += `<td>${(user[key]) ? user[key] : ''}</td>`;
        }
        str += `</tr>`;
    }

    str += '</tbody></table>';
    document.write(str);
}

