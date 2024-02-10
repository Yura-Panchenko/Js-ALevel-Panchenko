{
    // 1) assign: evaluation
    var a = (5);
    var b, c;

    b = ((a) * (5)); // вирази ми можемо брати в дужки
    b = (c = ((b) / 2));
}
//===========================
{
    // 2) Number: age
    // За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.

    let year = +prompt("Скільки Вам років?", "");
    let currentYear = new Date().getFullYear();
    alert(`Ви народилися в ${currentYear - year} році.`);
}
//===========================
{
    // 3) Number: temperature
    // За допомогою prompt запитати у користувача температуру в градусах Цельсія та перевести їх у Фаренгейти та/або навпаки.
    // Формула перевода Фаренгейта (°F) в Цельсий (°C) и наоборот Цельсия (°C) в Фаренгейт (°F):
    // (Фаренгейт — 32) : 1,8 = Цельсий Пример: (50°F - 32) : 1,8 = 10°C
    // Цельсий х 1,8 + 32 = Фаренгейт Пример: 10°C x 1,8 + 32 = 50°F

    const coefficient = 1.8;
    const offsets = 32;
    let сelsius = +prompt("Скількі градусув Целсьсія Вам потрібно конвертувати в градуси Фаренгейта?");

    if (сelsius) {
        let resultF = сelsius * coefficient + offsets;
        console.log('Температура в градусах Фаренгейта', resultF);
    } else {
        let far = +prompt("Скількі градусув Фаренгейта Вам потрібно конвертувати в градуси Целсьсія?");
        let resultC = (far - offsets) / coefficient;
        console.log('Температура в градусах Сельсія', resultC);
    }
}
//===========================

{
    //3 Number: divide
    // Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.

    let numFirst = +prompt("First number enter");
    let numSecond = +prompt("Second number enter");
    let res;

    res = Math.floor(numFirst / numSecond);
    console.log("Результат ділення націло = ", res);
}
//===========================

{
    //4) Number: currency
    // Напишіть код, який обчислює обмін валют за курсом, заданим за допомогою константи const rate = КУРС ВАЛЮТИ Вважайте значення в одній валюті за допомогою 'prompt', після чого помножіть/поділіть це число на 'rate'. Виведіть результат, використовуючи alert. Обмежте кількість знаків після коми двома (нас не хвилюють дрібні частини центів/копійок)
    const rate = 37.6;
    let res = 0;
    let money = +prompt("Введіть суму в гривні яку ви хочете обміняти на долари");

    res = (money / rate).toFixed(2);
    alert("Сума в доларах буде = " + res + "$");
}
//===========================

{
    // 5) Number: RGB
    // За допомогою prompt організуйте введення трьох констант red, green, blue у десятковій системі. Створіть із них CSS-колір у форматі #RRGGBB використовуючи шістнадцяткову систему числення. Значення менше 16ти поки що можна не враховувати.

    let red = (+prompt("Введіть значення червоного кольору від 16 до 255")).toString(16);
    let green = (+prompt("Введіть значення зеленого кольору від 16 до 255")).toString(16);
    let blue = (+prompt("Введіть значення синього кольору від 16 до 255")).toString(16);
    let elPage = document.createElement('div');
    elPage.style.width = "100%";
    elPage.style.height = "100px";
    elPage.style.background = `#${red + green + blue}`;
    elPage.innerHTML = `color = #${red + green + blue}`;
    document.body.append(elPage);
}
//===========================

{
    // Number: flats
    // Зробіть калькулятор, який дозволить вам виходячи з інформації про кількість поверхів у будинку 
    // та кількість квартир на поверсі знаходити під'їзд та поверх певної квартири за її номером. 
    // Наприклад для 9поверхового будинку по 4 квартири на поверх 81 квартира знаходиться на 3-му поверсі 
    // третього під'їзду. Користувач повинен вводити за допомогою prompt кiлькiсть поверхiв, кiлькiсть 
    // квартир на поверсi та номер квартири. Код повинен видавати пiд'їзд та поверх по номеру квартири.
    let floor = +prompt('Яка кількість поверхів у будинку?');
    let rooms = +prompt('Яка кількість квартир на поверсі?');
    let numberRoom = +prompt('Вкажіть номер квартири');
    let entranceRooms = rooms * floor;
    //let etage = Math.ceil(numberRoom / rooms);
    let col = Math.ceil(numberRoom / entranceRooms);
    // let qq = etage % floor ? etage % floor : floor;
    const qq = Math.ceil((numberRoom % entranceRooms) / rooms);
    console.log("Під'їзд : ", col);
    console.log("Поверх: ", qq);
}