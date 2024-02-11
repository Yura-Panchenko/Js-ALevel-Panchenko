{
    // 1
    // String: greeting
    // Запитайте у користувача ім'я та привітайте його за допомогою alert.

    let name = prompt("Як Вас звати?");
    alert(`Добрий день ${name}!`);
}

{
    // 2
    // String: gopni4ek
    // Попросіть користувача ввести рядок через 'prompt'. 
    // Використовуючи split та join зробіть що б після будь-якої коми слід було слово блін, .
    // Метод split розбиває рядок на кілька рядків, використовуючи переданий роздільник і повертає масив:

    let str = prompt('Введіть рядок, щоб були присутні коми');
    console.log(str.split(",").join(", блін "));
}

{
    // 3
    // String: capitalize
    // Перетворіть рядок, введений користувачем, таким чином, щоб перша літера ставала великою, а решта - маленькими:

    let str = "cANBerRa";
    let result;
    result = (str[0].toUpperCase()) + (str.toLowerCase().slice(1));
    console.log(result) //Canberra
}

{
    // 4
    // String: word count
    // Порахуйте кількість слів у рядку. 
    // Використовуйте розбиття за пробілами. 
    // Довжина масиву називається так само, як і довжина рядка.

    let row = prompt("Введіть рядок");
    console.log(row.split(' ').length);
}

{
    // 5
    // String: credentials
    // Запитайте у користувача ПІБ, використовуючи prompt тричі. 
    // Викиньте зайві пробiли, використовуючи .trim
    // Використовуючи String: capitalize зробіть так, 
    // щоб кожне слово у ПІБ було з великої літери, а решта - маленькі
    // Об'єднайте ці три рядки в один змінний fullName і виведіть кудись 
    // (alert, console.log). Не забудьте пробiли між словами.

    let lastName = prompt("Ваше прізвіще:").trim();
    let firstName = prompt("Ваше ім'я:").trim();
    let fatheName = prompt("По батькові:").trim();
    lastName = lastName[0].toUpperCase() + lastName.toLowerCase().slice(1);
    firstName = firstName[0].toUpperCase() + firstName.toLowerCase().slice(1);
    fatheName = fatheName[0].toUpperCase() + fatheName.toLowerCase().slice(1);
    let fullName = `${lastName} ${firstName} ${fatheName}`;
    console.log(fullName);
}

{
    // 6
    // String: beer
    // Не використовуючи.replace замініть слово пиво у рядку на слово чай

    let str = "Було жарко. Василь пив пиво вприкуску з креветками";
    let result;
    result = str.split("пиво").join("чай");
    console.log(result) //"Було жарко. Василь пив чай уприкуску з креветками"
}

{
    // 7
    // String: no tag
    // Знайдіть у рядку HTML тег. Видаліть, тобто виріжте його - створіть інший рядок,
    // в якому будуть всі символи до тега і після нього Тег може бути будь-яким. 
    // split і join не використовуйте, натомість використовуйте indexOf і slice. .replace не використовуйте

    let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
    let result;
    result = str.slice(0, str.indexOf("<")) + str.slice((str.indexOf("/>") + 3));
    console.log(result) //якийсь текст, в якому є один тег і всяке інше
}

{
    //8
    // String: big tag
    // На основі попереднього завдання зробіть тег великими літерами. replace, split і join не використовуйте, натомість використовуйте indexOf і slice,
    let str = "якийсь текст у якому є один тег <br /> і всяке інше";
    let result;
    result = str.slice(0, str.indexOf("<")) + str.slice(str.indexOf("<"), (str.indexOf("/>") + 3)).toUpperCase() + str.slice((str.indexOf("/>") + 3));
    console.log(result); //якийсь текст, в якому є один тег <BR /> і всяке інше
}

{
    //9
    // String: new line
    // Попросіть користувача ввести рядок черезprompt. prompt не дозволяє вводити рядкові рядки. 
    // Дамо користувачеві таку можливість - Користувач може вводити \n як маркер нового рядка.
    // Використовуючи split та join зробіть цей рядок воістину багаторядковим і виведіть в 
    // консоль або через alert.

    let str = prompt(`Введіть рядок, для переводу строки використовуйте \\n`);
    let result;
    result = str.split("\\n").join("\n");
    console.log(result);
}

{
    //10
    // String: youtube
    // Нехай користувач введе будь-який текст із посиланням на youtube. 
    // Використовуючи регулярний вираз вийміть із посилання ідентифікатор видосу і створіть рядок із 
    // вбудованим блоком HTML. Додайте блок на сторінку.
    // оголосіть константу з регулярним виразом
    // використовуйте метод match, який поверне вам масив
    // вийміть із масиву елемент із ідентифікатором відео
    // вивчіть HTML код вбудовування відео на сторінку на youtube.
    // використовуючи інтерполяцію рядків, вклейте ідентифікатор відео в HTML код вбудовування відео
    // використовуючи document.write відправте отриманий рядок на сторінку.

    let str = prompt("Ведіть текст з посіланням на відео в YOUTUBE");
    const dateRegexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    let idVideo = str.match(dateRegexp)[2];
    let result = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${idVideo}" frameborder="0" allowfullscreen></iframe>`;
    document.write(result);
}