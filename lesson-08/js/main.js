let task = prompt("Введіть назву завдання");
if (task === "blocks") {
    let a = 10
    {
        let b = 20
        {
            let c = 30 // c = 30
            //які тут будуть значення змінних a, b, c, d

            b++
            a *= 10
            //d = undefined
            console.log('a = 100 => ', a);
            console.log('b = 21 => ', b);
            console.log('c = 30 => ', c);
            //console.log('d = undefined => ', d);
        }
        {
            let c = 50
            //які тут будуть значення змінних a, b, c, d
            b += 500
            console.log('a = 100 => ', a);
            console.log('b = 521 => ', b);
            console.log('c = 50 => ', c);
            //d = undefined
            //console.log('d = undefined => ', d)
        }
        {
            const a = 100500
            const d = "value"
            //які тут будуть значення змінних a, b, c, d
            console.log('a = 100500 => ', a);
            console.log('b = 521 => ', b);
            //c = undefined;
            // console.log('c = undefined => ', c);
            console.log('d = "value" => ', d)
            {
                let a = -50
                b = 1000
                //які тут будуть значення змінних a, b, c, d
                console.log('a = -50 => ', a);
                console.log('b = 1000 => ', b);
                //c = undefined;
                // console.log('c = undefined => ', c);
                console.log('d = "value" => ', d)
            }
            //які тут будуть значення змінних a, b, c, d
            console.log('a = 100500 => ', a);
            console.log('b = 1000 => ', b);
            //c = undefined;
            // console.log('c = undefined => ', c);
            console.log('d = "value" => ', d)
        }
        //які тут будуть значення змінних a, b, c, d
        console.log('a = 100 => ', a);
        console.log('b = 1000 => ', b);
        //c = undefined;
        // console.log('c = undefined => ', c);
        //d = undefined;
        // console.log('d = "value" => ', d)
    }
    //які тут будуть значення змінних a, b, c, d
    console.log('a = 100 => ', a);
    // console.log('b = undefined => ', b);
    // console.log('c = undefined => ', c);
    //console.log('d = undefined => ', d);
} else if (task === "comparison if") {
    // Розберіть приклад
    // Додайте умову негативного віку на приклад вище. Розставте недостатні (але синтаксично необов'язкові) фігурні дужки. Викиньте зайве з поточного коду
    var age = + prompt("Скільки вам років?", "");
    if (age < 0) {
        alert("ембріон");
    }
    else if (age < 18) {
        alert("школяр");
    }
    else if (age > 18 && age < 30) {
        alert("молодь");
    }
    else if (age > 30 && age < 45) {
        alert("зрілість");
    }
    else if (age > 45 && age < 60) {
        alert("захід сонця");
    }
    else if (age > 60) {
        alert("як пенсія?");
    }
    else {
        alert("чи кіборг, чи KERNESS");
    }
    // 18, 30, 45, 60 - це буде кіборг, бо ці значення не попадають в жодну умову крім else
    // я не знайшов куді добавити і де прибрати фігурні дужки
} else if (task === "switch: sizes") {
    // Зробіть завдання Comparison: sizes використовуючи switch
    let size = +prompt("Який ваш розмір по таблиці Німецькій?");
    let youSize;
    switch (size) {
        case 8:
            youSize = 36;
            break;
        case 10:
            youSize = 38;
            break;
        case 12:
            youSize = 40;
            break;
        case 14:
            youSize = 42;
            break;
        case 16:
            youSize = 44;
            break;
        case 18:
            youSize = 46;
            break;
        case 20:
            youSize = 48;
            break;
        case 22:
            youSize = 50;
            break;
        default:
            youSize = "відсутній";
    }
    console.log(`Ваш розмір по Німецькій таблиці = ${youSize}`);
} else if (task === "switch: if") {
    // Перепишіть приклад нижче, використовуючи if.
    let color = prompt("Введіть колір", "");
    // switch (color) {
    //     case "red": document.write("<div style='background-color: red;'>червоний</div>");
    //     case "black": document.write("<div style='background-color: black; color: white;'>чорний</div>");
    //         break;
    //     case "blue": document.write("<div style='background-color: blue;'>синій</div>");
    //     case "green": document.write("<div style='background-color: green;'>зелений</div>");
    //         break;
    //     default: document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    // }

    if (color === "red") {
        document.write("<div style='background-color: red;'>червоний</div>");
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if ("black") {
        document.write("<div style='background-color: black; color: white;'>чорний</div>");
    } else if ("blue") {
        document.write("<div style='background-color: blue;'>синій</div>");
        document.write("<div style='background-color: green;'>зелений</div>");
    } else if ("green") {
        document.write("<div style='background-color: green;'>зелений</div>");
    } else {
        document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
    }
} else if (task === "noswitch") {
    // Напишіть функцію noSwitch, яка приймає об'єкт зі значеннями-функціями, ключ для об'єкта та запускає одну з функцій з об'єкта якщо ключ знайдений, інакше - запускає default:
    const obj = {
        воду: () => console.log('Найздоровіший вибір!'),
        чай: () => console.log('Смачна та корисна штука. Не перестарайтеся з цукром'),
        пиво: () => console.log('Добре влітку, та в міру'),
        віскі: () => console.log('Та ви, батечку, естет! Не забудьте лід і сигару'),
        default: () => console.log('шото я не зрозумів')
    }
    const noSwitch = (key, cases, defaultKey = 'default') => {
        //перевірка наявності key в cases
        //якщо є - дістати значення по ключу. це буде функція. Запустити її
        //якщо немає - витягти з об'єкта cases значення по ключу, ім'я якого лежить у змінній defaultKey. Запустити
        //Нехай функція noSwitch повертає те, що повертає одна з функцій з об'єкта про всяк випадок

        // switch (key) {
        //     case "воду":
        //         cases[key]();
        //         break;
        //     case "чай":
        //         cases[key]();
        //         break;
        //     case "пиво":
        //         cases[key]();
        //         break;
        //     case "віскі":
        //         cases[key]();
        //         break;
        //     default:
        //         cases[defaultKey]();
        //         break;
        // }
        for (const el in cases) {
            if (el == key) {
                return cases[el]();
            }
        }

        cases[defaultKey]();
    }
    let drink = prompt("Що ви п'єте?");
    noSwitch(drink, obj);
} else if (task === "closure calc") {
    // Напишіть всередині анонімної функції, переданої в then(data =>):
    // цикл, що перебирає курси;
    // на кожній ітерації створюється кнопка(document.createElement)
    // текст кнопки - назва валюти(innerHTML або innerText)
    // Призначте обробник події на цій кнопці(onclick = () => {.....}).Функція - обробник має бути написана прямо в тілі циклу
    // Обробник повинен запитувати суму використовуючи prompt і конвертувати цю суму з валюти, написаної на кнопці в USD
    // Знайдіть замикання.Для доступу до валют з data.rates використовуйте[], .тут не допоможе.Кнопки додавайте в спеціальний контейнер(div наприклад), створений в HTML, або, на крайній край, в body
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const listButton = document.createElement('ul');
            document.body.append(listButton);
            for (const key in data.rates) {
                const li = document.createElement('li');
                const button = document.createElement('button');
                const boxRes = document.createElement('p');
                button.innerText = key;
                li.append(button);
                button.onclick = () => {
                    const sum = +prompt('Скільки долярів хочеш отримати?');
                    const res = sum * data.rates[key];
                    boxRes.innerText = `Тобі потрібно ${res} ${key}`;
                    li.append(boxRes);
                }
                document.querySelector('ul').append(li);
            }
        })
} else if (task === "closure calc 2") {
    // Створіть HTML файл з:
    // <select id='from'> - вихідна валюта
    // <select id='to'> - валюта в яку відбувається обмін
    // <div id='rate'> - кроскурс між валютами
    // <input type='number' id='amount' /> - сума у вихідній валюті
    // <div id='result'> - сума у валюті, в яку хочемо поміняти
    // Використовуючи заготівлю з попереднього завдання, наповніть select-и тегами option з назвами валют, використовуючи цикл
    // document.createElement
    // innerText для option
    // from.append або to.append
    // За межами циклу призначте обробники onchange для елементів select та oninput для елемента input, використовуючи їх id. За цими подіями оновлюйте текст у div#rate та div#result
    wrap.style.display = "block";
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
            const from = document.getElementById('from');
            const to = document.getElementById('to');
            const rate = document.getElementById('rate');
            const amount = document.getElementById('amount');
            const result = document.getElementById('result');
            for (const key in data.rates) {
                const fromOption = document.createElement('option');
                const toOption = document.createElement('option');
                fromOption.setAttribute('value', data.rates[key]);
                toOption.setAttribute('value', data.rates[key]);
                fromOption.innerText = key;
                toOption.innerText = key;
                from.append(fromOption);
                to.append(toOption);
            };
            rate.innerHTML = from.value / to.value;
            function chenge(el) {
                let val = el.value;
                return val;
            }
            function resultFunc() {
                result.innerText = amount.value / to.value * from.value;
            }
            let valFrom = from.onchange = () => {
                rate.innerHTML = chenge(from) / to.value;
                resultFunc();
            };
            let valTo = to.onchange = () => {
                rate.innerHTML = from.value / chenge(to);
                resultFunc();
            };
            let res = amount.onchange = () => {
                resultFunc();
            }
        })
} else if (task === "countries and cities") {
    wrap2.style.display = "block";
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
        .then(data => {
            const countries = document.getElementById('countries');
            const cities = document.getElementById('cities');

            for (let country in data) {
                const option = document.createElement('option');
                option.setAttribute('value', country);
                option.innerText = country;
                countries.append(option);
            }
            let countryEl = countries.value;
            for (let citiesEl in data) {
                if (citiesEl == countryEl) {
                    for (let sity of data[citiesEl]) {
                        const option = document.createElement('option');
                        option.setAttribute('value', sity);
                        option.innerText = sity;
                        cities.append(option);
                    }
                }
            }
            let sityes = countries.onchange = () => {
                let countryEl = countries.value;
                cities.innerText = '';
                for (let country in data) {
                    if (country == countryEl) {
                        for (let sity of data[country]) {
                            const option = document.createElement('option');
                            option.setAttribute('value', sity);
                            option.innerText = sity;
                            cities.append(option);
                        }
                    }
                }
            }
        })
}
{

}
