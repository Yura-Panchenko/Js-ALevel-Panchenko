let task = prompt("Введіть назву завдання");
if (task === "Number: odd") {
    // 1
    // Number: odd
    // За допомогою prompt дізнайтесь число, введене користувачем. За допомогою if перевірте, 
    // чи число коректно перетворено з рядка. У разі помилки виведіть повідомлення Виведіть 
    // парне число чи ні, використовуючи if.

    let num = +prompt('Введіть число');
    if (num) {
        if (!(num % 2)) {
            console.log('Ви ввели парне число:', num);
        } else {
            console.log('Ви ввели не парне число:', num);
        }
    } else {
        let num = +prompt('Спробуйте ще раз ввести число');
        if (num) {
            if (!(num % 2)) {
                console.log('Ви ввели парне число:', num);
            } else {
                console.log('Ви ввели не парне число:', num);
            }
        } else {
            console.log('Йди вчи алфавіт!');
        }
    }
} else if (task === "String: lexics") {
    // 2
    // String: lexics
    // Запитайте у користувача текст і перевірте його на наявність некоректного слова або кількох
    // некоректних слів. Використовуйте метод indexOf (або includes) рядки:
    // "123".indexOf("23") //повертає 1 - позицію підрядка "23" до "123"
    // "abcdef".indexOf("ef") // 4
    // "12345".indexOf("some bad word") // -1 - не знайдено
    // let str = "Росія країна підарів та рабів";

    let str = prompt("Введіть фразу для перевірки");
    const word1 = "росія";
    const word2 = "підар";

    // str.toLowerCase().includes(word2);
    str = str.toLowerCase();
    if (str.includes(word1) || str.includes(word2)) {
        console.log("Погане слово присутнє в цій фразі!!!");
    } else {
        console.log("Вітаю! Поганих слів не знайдено!");
    }
} else if (task === "Boolean") {
    // 3
    // Boolean
    // Напишіть код, який запитує ті чи інші питання з відповіддю "так"/"ні" за допомогою confirm, 
    // і зберігає відповіді в змінних.
    console.log("Boolean");
    let beer;
    let count;
    let sport;
    if (confirm("Ти любиш пиво?")) {
        beer = "Ти любиш пиво?: так";
        if (confirm("Ти багато п'єш пива?")) {
            count = "Ти багато п'єш пива? : так";
        } else {
            count = "Ти багато п'єш пива? : ні";
        }
    } else {
        beer = "Ти любиш пиво?: ні";
        if (confirm("Ти спортсмен?")) {
            sport = "Ти спортсмен? : так";
        } else {
            sport = "Ти спортсмен? : ні";
        }
    }

    console.log(`
    ${beer ? beer : ''} 
    ${count ? count : ''} 
    ${sport ? sport : ''}
    `);
} else if (task === "Comparison: sizes") {
    // 5
    // Comparison: sizes
    // Зробіть переклад переклад з нашої системи розмірів до американської чи будь-якої на вибір. 
    // Використовуйте prompt, умови порівняння та alert.
    // 8 10 12 14 16 18 20 22
    // 36 38 40 42 44 46 48 50

    let size = +prompt("Який ваш розмір по таблиці США?");
    let youSize;

    if (size === 8) {
        youSize = 36;
    } else if (size === 10) {
        youSize = 38;
    } else if (size === 12) {
        youSize = 40;
    } else if (size === 14) {
        youSize = 42;
    } else if (size === 16) {
        youSize = 44;
    } else if (size === 18) {
        youSize = 46;
    } else if (size === 20) {
        youSize = 48;
    } else if (size === 22) {
        youSize = 50;
    } else {
        youSize = "відсутній";
    }
    console.log(`Ваш розмір по Німецькій таблиці = ${youSize}`);
} else if (task === "Ternary") {
    // 6
    // Ternary
    // Запитайте у користувача стать (confirm). Виведіть за допомогою alert "Ви чоловік" або "Ви жінка". 
    // Використовуйте тернарний оператор.

    confirm('Bи жінка?') ? console.log("Привіт подруга!") : console.log("Привіт дружище!");
} else if (task === "Prompt: or") {
    // 8
    // Prompt: or
    // Для завдання Number: age використовуючи АБО || вивести повідомлення про помилку (alert) 
    // якщо користувач не введе вік або натисне скасування (тобто prompt видасть порожній рядок 
    // або null, що інтерпретується як false). 

    prompt("Ваш вік?") || alert("ERROR");
} else if (task === "Confirm: or this days") {
    // 9
    // Confirm: or this days
    // За допомогою цього ж трюку (використання АБО для запуску альтернативи) зробіть примхливого робота, 
    // який у confirm запитує "шопінг?", а у разі відмови - виводити alert "ти - бяка".

    confirm("шопінг?") || alert("ти - бяка");
} else if (task === "Confirm: if this days") {
    // 10
    // Confirm: if this days
    // Зробити те саме за допомогою if.

    if (!confirm("шопінг?")) {
        alert("ти - бяка");
    }
} else if (task === "Default: or") {
    // 11
    // Default: or
    // Попросіть користувача ввести ПІБ в три різні змінні. 
    // Використовуючи АБО || додайте рядки за промовчанням, які будуть зберігатися у внутрішніх 
    // змінних якщо користувач ввів порожній рядок або натиснув "Скасувати". Наприклад, якщо ви на 
    // кроці введення прізвища натиснете Escape, прізвище буде "Іванов"

    let firstName = prompt("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");
    let faterName = prompt("Введіть побатькові");

    console.log(`${firstName || "Іван"} ${lastName || "Іванов"} ${faterName || "Іванович"}`);
} else if (task === "Default: if") {
    // 12
    // Default: if
    // Зробіть те саме за допомогою if та else

    let firstName = prompt("Введіть ваше ім'я");
    let lastName = prompt("Введіть ваше прізвище");
    let faterName = prompt("Введіть побатькові");
    let str = "";

    if (firstName) {
        str += firstName;
        str += " ";
    } else {
        str += "Іван";
        str += " ";
    }

    if (lastName) {
        str += lastName;
        str += " ";
    } else {
        str += "Іванов";
        str += " ";
    }

    if (faterName) {
        str += faterName;
    } else {
        str += "Іванович";
    }

    console.log(str);
} else if (task === "Login and password") {
    // 13
    // Login and password
    // Напишіть код, який запитує логін, перевіряє його на вірність, якщо логін вірний, просить ввести 
    // пароль і перевіряє його. В разі розбіжності логіну чи пароля виводити alert з текстом помилки. 
    // У разі успішного логіну – alert з привітанням. Правильні логін: admin та пароль: qwerty. 
    // Використовуйте вкладені if та else.

    const login = "admin";
    const password = "qwerty";
    let userLogin = prompt("Your login:");
    let userPassword = prompt("Your password:");

    if (userLogin === login && userPassword === password) {
        alert("Вітаю АДМІНА!!!");
    } else {
        alert("Ви не туди попали.");
    }
} else if (task === "Currency exchange") {
    // 14
    // Currency exchange
    // Попросіть користувача ввести валюту (наприклад, usd, eur, інші валюти додати до смаку) за допомогою prompt.
    // Також поцікавтеся купити чи продати він бажає (використовуйте confirm).
    // За допомогою декількох if та тернарного оператора всередині кожного з if задайте змінну rate, 
    // визначальну курс конкретної валюти на купівлю чи продаж. Зверніть увагу на місце оголошення 
    // змінної rate - вона має бути доступна в коді після всіх цих if.
    // Попросіть користувача ввести суму на обмін
    // Порахуйте та виведіть результат шляхом множення або поділу на rate
    // Дайте можливість користувачеві вводити назви валют у будь-якому регістрі (UsD, eUR). 
    // Для цього в if використовуйте toUpperCase (або toLowerCase)

    let money = prompt("Введіть бажану валюту із списку usd, eur, pln").toLowerCase();
    let usd = 38.1264;
    let eur = 41.1212;
    let pln = 9.5107;
    let res;
    if (money === "usd" || money === "eur" || money === "pln") {
        let sum = Number(prompt("Яку суму в обраній валюті Ви хочете обміняти?"));
        if (money === "usd") {
            let aktion = confirm("Хочете купити?");
            res = sum * usd;
            if (aktion) {
                alert(`Вам потрібно для цього ${res}грн`);
            } else {
                alert(`Ви отримаєте ${res}грн`);
            }
        } else if (money === "eur") {
            let aktion = confirm("Хочете купити?");
            res = sum * eur;
            if (aktion) {
                alert(`Вам потрібно для цього ${res}грн`);
            } else {
                alert(`Ви отримаєте ${res}грн`);
            }
        } else if (money === "pln") {
            let aktion = confirm("Хочете купити?");
            res = sum * pln;
            if (aktion) {
                alert(`Вам потрібно для цього ${res}грн`);
            } else {
                alert(`Ви отримаєте ${res}грн`);
            }
        }
    } else {
        alert("Такої валюти в обміннику немає");
    }
} else if (task === "Scissors") {
    // 15
    // Scissors
    // Зробіть гру "камінь-ножиці-папір". Користувач вводить свій варіант через prompt, 
    // програма генерує свій варіант через Math.random() і виводить через alert. 
    // Наступний alert виводить ім'я переможця чи "нічия"

    let user = prompt("Введіть свій варіант камінь-ножиці-папір").toLowerCase();
    let pc;
    let numPc = Math.random();

    if (numPc < 0.33) {
        pc = "камінь";
        alert(pc);
    } else if (0.33 < numPc && numPc < 0.66) {
        pc = "ножиці";
        alert(pc);
    } else if (numPc >= 0.66) {
        pc = "папір";
        alert(pc);
    }

    if (pc === user) {
        alert("Нічия");
    } else if ((pc === "камінь" && user === "ножиці") || (pc === "ножиці" && user === "папір") || (pc === "папір" && user === "камінь")) {
        alert("Ти програв");
    } else if ((pc === "ножиці" && user === "камінь") || (pc === "папір" && user === "ножиці") || (pc === "камінь" && user === "папір")) {
        alert("Ти виграв");
    } else {
        alert("Такого варіанту немає");
    }
} else if (task === "Завдання на чорний пояс") {
    // Завдання на чорний пояс
    // Зробіть гру "камінь-ножиці-папір", як описано вище, користуючись логічними операціями (&&, ||, !), 
    // не використовуючи if. Завдання має бути вирішене одним виразом (окрiм декларування змiнних - 
    // let та const не є виразами)

    let user = prompt("Введіть свій варіант камінь-ножиці-папір").toLowerCase();
    let pc = Math.random();
    console.log(
        ((pc <= 0.33) && (pc = "камінь") && ((user === pc && "нічія") || (user === "папір" && "Виграв") || (user === "ножиці" && "Програв")))
        || ((0.33 < pc && pc < 0.66) && (pc = "ножиці") && ((user === pc && "нічія") || (user === "камінь" && "Виграв") || (user === "папір" && "Програв")))
        || ((pc >= 0.66) && (pc = "папір") && ((user === pc && "нічія") || ((user === "ножиці") && "Виграв") || (user === "камінь") && "Програв"))
    );
}

