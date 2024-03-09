let task = prompt("Введіть назву завдання");
if (task === "Confirms") {
    // Збережіть у масив відповіді на запитання, задані за допомогою confirm. 
    // Використовуйте літеральний(декларативний) синтаксис масивів([...., ...., ....])
    const arr = [];
    arr.push(confirm("створіть елемент масиву 1"));
    arr.push(confirm("створіть елемент масиву 2"));
    arr.push(confirm("створіть елемент масиву 3"));
    arr.push(confirm("створіть елемент масиву 4"));
    console.log(arr);

} else if (task === "Prompts") {
    // Збережіть у масив відповіді запитаннь, задані з допомогою prompts. 
    // Використовуйте доступ до масиву за індексом та присвоєння(arr[....] = ....)
    const arr = [];
    arr[arr.length] = prompt("Ваше ім'я?");
    arr[arr.length] = prompt("Ваш вік?");
    arr[arr.length] = prompt("Ваша стать?");
    arr[arr.length] = prompt("Ваш зріст?");
    console.log(arr);
} else if (task === "Item access") {
    // Попросіть користувача ввести (prompt) індекс у масиві. 
    // Виведіть значення елемента за цим індексом. Спробуйте також ввести індекс "length".
    const names = ["John", "Paul", "George", "Ringo"];
    let el = +prompt(`Який елемент масиву показати? від 0 до ${names.length - 1}`);
    if (names.length > el) {
        console.log(`Який елемент масиву під номером ${el} = `, names[el]);
    } else {
        console.log("Такого елементу не існує");
    }
    console.log("Довжина масиву = ", names.length);
} else if (task === "Item change") {
    // Попросіть користувача ввести (prompt) індекс у масиві, а також значення для цього індексу. 
    // Присвойте у введений індекс введене значення
    let index = +prompt("Введіть індекс масиву");
    let el = prompt("Введіть значення цього елементу");
    const arr = [];
    arr[index] = el;
    console.log(arr);
} else if (task === "Multiply table") {
    // Створіть таблицю множення 5x5, як масив в пам'ятi, 
    // використовуючи декларативний синтаксис вкладених масивів const arr = [[....], [....], [....], .....]. 
    // Числа у вкладених масивах повинні дорівнювати добутку індексу зовнішнього масиву 
    // на індекс внутрішнього масиву: arr[2][3] === 6
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    console.log(arr[3][4]);
} else if (task === "Multiply table slice") {
    // Використовуючи slice, створіть масив масивів (іншу таблицю/матрицю) з таблиці множення, 
    // в якій не буде нулів
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    let arrNew = arr.slice(1);
    let arr2 = [];
    for (const el of arrNew) {
        arr2.push(el.slice(1));
    }
    console.log(arr2);
} else if (task === "IndexOf Word") {
    // Запитайте у користувача рядок із кількох слів. Запитайте в нього потрібне слово. 
    // Виведіть, яким за рахунком є це слово у рядку з кількох слів. Якщо слово не знайдено, 
    // виведіть повідомлення про це (а не -1)
    let str = prompt("Введіть довільний рядок");
    let word = prompt("Яке слово хочете знайти");
    let arr = str.split(' ');
    if (arr.indexOf(word) != -1) {
        console.log(`Це ${arr.indexOf(word) + 1} слово з ${arr.length}`);
    } else {
        console.log("Такого слова в рядку не існує");
    }
} else if (task === "Reverse") {
    // Додайте до масиву п'ять введених користувачем через prompt елементів (використовуйте push). 
    // Створіть інший масив із цими ж елементами в зворотньому напрямку. 
    // Для цього витягайте елементи з першого масиву використовуючи pop, додайте їх до другого 
    // використовуючи push.

    let arr = [];
    let arr1 = [];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt(`Введіть елемент ${i + 1}`));
    }
    console.log(arr);
    for (let i = 0; i < 5; i++) {
        arr1.push(arr.pop());
    }
    console.log(arr1);
} else if (task === "Reverse 2") {
    // Переверніть другий масив із попереднього завдання ще раз (послідовність буде як у першому масиві), 
    // використовуючи shift та unshift.

    let arr = [];
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt(`Введіть елемент ${i + 1}`));
    }
    console.log('arr = ', arr);
    for (let i = 0; i < 5; i++) {
        arr1.push(arr.pop());
    }
    console.log('arr1 = ', arr1);
    for (let i = 0; i < 5; i++) {
        arr2.unshift(arr1.shift());
    }
    console.log('arr2 = ', arr2);
} else if (task === "Copy") {
    // Скопіюйте масив створений у завданні Multiply table неглибоко
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    const arrNew = [...arr];
    const arrNew1 = arr.slice();
    console.log(arrNew);
    console.log(arrNew1);
} else if (task === "Deep Copy") {
    // Скопіюйте масив, створений у Multiply table, включаючи вкладені масиви (глибока копія). 
    // Не треба шукати якесь складне готове рiшення, зробiть це максимально простим чином за умови, 
    // що вам треба скопiювати 6 масивiв - загальний масив та п'ять масивiв у ньому;
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    let arrCopy = [];
    for (const el of arr) {
        arrCopy.push([...el]);
    }
    console.log("arrCopy = ", arrCopy);
} else if (task === "Array Equals") {
    // Створіть код, в якому буде дві змінні з масивами (arr і arr2), які рівні один одному (arr1 === arr2)
    const arr = [];
    const arr2 = arr;
    console.log(arr == arr2);
} else if (task === "Flat") {
    // Зберіть усі елементи всіх вкладених масивів із завдання Multiply table в один масив. 
    // Його довжина повинна дорівнювати 25. Використовуйте spread-оператор
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    let arrNew = [];
    for (const el of arr) {
        arrNew.push(...el);
    }
    console.log("arrNew = ", arrNew);
} else if (task === "Destruct") {
    // Вийміть першу, п'яту та дев'яту літеру з рядка, введеного користувачем, 
    // використовуючи деструктуризацію. Виведіть їх
    let [one, two, three, four, five, six, seven, eight, nine, ten] = prompt("Ваш рядок");
    console.log(one);
    console.log(five);
    console.log(nine);
} else if (task === "Destruct default") {
    // Вийміть другу, четверту та п'яту літеру з рядка, введеного користувачем, 
    // використовуючи деструктуризацію. Якщо у рядку таких букв не виявиться задайте 
    // змінним значення за умовчанням ! (знак оклику). Виведіть ці змінні

    // let [one = 20, two = 333, three = '!', four = '!', five = '!', six = '!', seven = '!', eight = '!', nine = '!', ten = '!'] = prompt("Ваш рядок");
    // console.log(two);
    // console.log(four);
    // console.log(five);

    let arr = prompt("Enter text");
    let arr1 = [...arr];

    for (let i = 0; i < arr1.length; i++) {
        let ind = arr1.indexOf(" ");
        if (ind !== -1) {
            arr1.splice(ind, 1, undefined);
        }
    }
    let [ein = '!', zwei = '!', drei = '!', via = '!', funf = '!'] = arr1;
    console.log(ein);
    console.log(zwei);
    console.log(funf);
} else if (task === "Multiply table rest") {
    // Реалізуйте завдання Multiply table slice, використовуючи оператор rest при деструктуризації. 
    // Використовуйте вкладену деструктуризацію. Після отримання чотирьох обрізаних вкладених масивів 
    // - зберіть загальний масив без нулів
    const arr = [
        [0, 1, 2, 3, 4],
        [1, 1, 2, 3, 4],
        [2, 2, 4, 6, 8],
        [3, 3, 6, 9, 12],
        [4, 4, 8, 12, 16],
    ];
    let arr1 = [];

    let [[a, ...rest], [...rest1], [...rest2], [...rest3], [...rest4]] = arr;
    arr1.push(rest);
    arr1.push(rest1);
    arr1.push(rest2);
    arr1.push(rest3);
    arr1.push(rest4);
    console.log(arr1);
} else if (task === "For Alert") {
    // Є масив ["John", "Paul", "George", "Ringo"]. Виведіть кожне ім'я окремим alert(), 
    // використовуючи цикл for .... of
    const arr = ["John", "Paul", "George", "Ringo"];
    for (const el of arr) {
        alert(el);
    }
} else if (task === "For Select Option") {
    // const currencies = ["USD", "EUR", "GBP", "UAH"]
    // let   str = "<select>"
    // for (const currency of currencies){
    // //    YOUR MAGIC HERE
    // }
    // str+= "</select>"
    // document.write(str) //document.write відобразить ваш HTML на сторінці
    // Використовуючи код вище, створіть список, що випадає, з валютами. Елементи списку, 
    // що випадає, створюються за допомогою тега <option>
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    for (const currency of currencies) {
        str += `<option>${currency}</option>`;
    }
    str += "</select>"
    document.write(str);
} else if (task === "For Table Horizontal") {
    // const names = ["John", "Paul", "George", "Ringo"]
    // let str = "<table>"
    // for (const name of names) {
    //     //    YOUR MAGIC HERE
    // }
    // str += "</table>"
    // document.write(str) //document.write отобразит ваш HTML на странице
    // Аналогічно, виконайте виведення імен в осередки таблиці по горизонталі(один рядок з чотирма осередками)
    const names = ["John", "Paul", "George", "Ringo"]
    let str = "<table style='border: 1px solid #000; width:100%;'><tr>";
    for (const name of names) {
        str += `<td style='border: 1px solid #000;'>${name}</td>`;
    }
    str += "</tr></table>";
    document.write(str);
} else if (task === "For Table Vertical") {
    // const names = ["John", "Paul", "George", "Ringo"]
    // let   str = "<table>"
    // for (const name of names){
    // //    YOUR MAGIC HERE
    // }
    // str+= "</table>"
    // document.write(str) //document.write відобразить ваш HTML на сторінці
    // Аналогічно, досягніть виведення імен в осередки таблиці по вертикалі (одна колонка 
    // з чотирма рядками, у кожному рядку - один осередок)
    const names = ["John", "Paul", "George", "Ringo"];
    let str = "<table style='border: 1px solid #000; width:100%;'>";
    for (const name of names) {
        str += `<tr><td style='border: 1px solid #000;'>${name}<tr><td>`;
    }
    str += "</table>";
    document.write(str);
} else if (task === "For Table Letters") {
    // const currencies = ["USD", "EUR", "GBP", "UAH"]
    // let   str = "<table>"
    // for (const currency of currencies){ //цикл створює рядки
    //      // Одна ітерація циклу створює ОДНИЙ РЯДОК
    //     console.log(currency)
    //     for (const letter of currency){ //цикл створює осередки в одному рядку
    //          //одна ітерація циклу створює ОДИН осередок
    //         console.log(letter)
    //     }
    // }
    // str+= "</table>"
    // document.write(str) //document.write відобразить ваш HTML на сторінці
    // Використовуючи код вище, створіть таблицю 3x4. У кожному рядку три осередки з літерами, 
    // чотири рядки, так як 4 валюти в масиві.
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<table style='border: 1px solid #000; width:100%;'>"
    for (const currency of currencies) { //цикл створює рядки
        // Одна ітерація циклу створює ОДНИЙ РЯДОК
        str += `<tr>`;
        for (const letter of currency) { //цикл створює осередки в одному рядку
            //одна ітерація циклу створює ОДИН осередок
            str += `<td style='border: 1px solid #000;'>${letter}</td>`;
        }
        str += `</tr>`;
    }
    str += "</table>"
    document.write(str)
} else if (task === "For Multiply Table") {
    // Виведіть таблицю множення 5x5 із завдання Multiply table в таблицю, 
    // використовуючи вкладені for.... of та document.write
    // Зробіть черезрядкове підсвічування - задавайте парним рядкам один колір тла, 
    // непарним - іншийЗробіть черезрядкове підсвічування - задавайте парним рядкам один колір тла, 
    // непарним - інший
    const arr = [
        [0, 0, 0, 0, 0],
        [0, 1, 2, 3, 4],
        [0, 2, 4, 6, 8],
        [0, 3, 6, 9, 12],
        [0, 4, 8, 12, 16],
    ];

    let str = "<table style='border: 1px solid #000; width:100%;'>";
    let i = 0;
    for (const currency of arr) { //цикл створює рядки
        // Одна ітерація циклу створює ОДНИЙ РЯДОК
        if (!(i % 2)) {
            str += `<tr style="background:#ccc;">`;
        } else {
            str += `<tr>`;
        }
        for (const item of currency) { //цикл створює осередки в одному рядку
            //одна ітерація циклу створює ОДИН осередок
            str += `<td style='border: 1px solid #000;'>${item}</td>`;
        }
        str += `</tr>`;
        i++;
    }
    str += "</table>";
    document.write(str);
} else if (task === "Function Capitalize") {
    // Реалізуйте завдання String: capitalize як окрему функцію:
    // const capitalize = str => {
    //     let result
    //     //..... ваш код
    //     return result //саме цей код забезпечить повернення результату функції
    // }
    // console.log(capitalize("cANBerRa")) //Canberra
    const capitalize = str => {
        let result;
        result = str.toUpperCase();
        return result;
    }
    console.log(capitalize("cANBerRa"));
} else if (task === "Map Capitalize") {
    // Нехай користувач вводить рядок. Розбийте його за пробілами. 
    // Використовуючи map та capitalize створіть масив у якому кожне слово буде з великої літери. 
    // Зберіть масив у рядок назад
    let str = prompt('Ваша фраза');
    console.log('Ваша фраза : ', str);
    let str1 = str.toLowerCase().split(' ');
    let str2 = str1.map(el => {
        let word = el.split('');
        let [, ...allChar] = word;
        allChar.unshift(word[0].toUpperCase());
        return allChar.join('');
    });
    console.log('Нова фраза : ', str2.join(' '));
} else if (task === "Filter Lexics") {
    // Нехай користувач вводить рядок. Розбийте його за пробілами. 
    // Використовуючи filter поверніть true якщо елемент масиву не полягає у 
    // визначеному масиві неприпустимих слів. Якщо елемент масиву - неприпустиме слово, 
    // функція, передана в filter повинна повертати false. Зберіть масив у рядок назад.

    let str = "одного разу лох розпочав війну";
    let arr = str.split(' ');
    console.log('arr = ', arr);
    let newArr = arr.filter(el => el !== 'війну');
    console.log(newArr.join(' '));
} else if (task === "Beep Lexics") {
    // Нехай користувач вводить рядок. Розбийте його за пробілами. 
    // Використовуючи map та тернарний оператор поверніть з функції слово без змін, 
    // якщо воно не полягає в якомусь іншому масиві заборонених слів. 
    // Якщо слово полягає в цьому списку, функція повинна повернути слово BEEP. 
    // Зберіть масив назад у рядок через пробіл. Таким чином, ви зможете реалізувати 
    // заміну кількох заборонених слів на BEEP.
    let str = "одного разу лох розпочав війну";
    let arr = str.split(' ');
    console.log('arr = ', arr);
    let newArr = arr.map(el => {
        (el === 'лох') ? el = 'BEEP' : el;
        return el;
    });
    console.log(newArr.join(' '));
} else if (task === "Reduce HTML") {
    // Реалізуйте завдання For Select Option використовуючи reduce:
    // const currencies = ["USD", "EUR", "GBP", "UAH"]
    // let str          = "<select>"
    // str             += currencies.reduce( (a,b) => надо додати к a <option> з b, "")
    // str             += "</select>"
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str = "<select>"
    str += currencies.reduce((acum, b) => {
        acum += `<option> ${b} </option>`;
        return acum;
    }, '');
    str += "</select>"
    document.write(str);
} else if (task === "For Brackets Hell Check") {
    // Нехай користувач вводить рядок з будь-якими парними дужками в ньому, наприклад [[](){{{[]()}}}]. 
    // Знайдіть місце можливої помилки (непарності) у цьому рядку. Для цього, кожну дужку, що відкриває, 
    // додавайте в стек. При знаходженні дужки, що закриває, вона повинна відповідати вершині стека 
    // (останнєй доданой дужцi). Якщо вона не відповідає, виведіть повідомлення про помилку та 
    // позицію у рядку. 
    // Якщо відповідає – приберіть дужку зі стека. Якщо рядок помилок не містить, порадуйте користувача.
    const line = prompt()
    const bracketsStack = []
    let i = 0
    for (const character of line) {
        //не звертайте уваги на символи, крім трьох видів дужок
        if (ПРОБЛЕМА) {
            break; //оператор break перериває цикл передчасно
        }
        i++ //iндекс поточної лiтери
    }
}
{
    // const line = prompt();
    line = '[[](){[{{]()}}}]';
    const bracketsStack = []
    let i = 0
    for (const character of line) {
        if (character === '[' || character === '(' || character === '{') {
            bracketsStack.push(character)
        }
        // //не звертайте уваги на символи, крім трьох видів дужок
        // if (ПРОБЛЕМА) {
        //     break; //оператор break перериває цикл передчасно
        // }
        // i++ //iндекс поточної лiтери
    }
    console.log(bracketsStack);
}
