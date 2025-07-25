/* Задача 1: Пошук у масиві
Умова:
Є масив фруктів:
const fruits = ["яблуко", "банан", "киві", "груша", "манго"];
Створи функцію findFruit(fruitName), яка перевіряє, чи є заданий фрукт у списку.
🔸 Якщо є — виводить: "Фрукт знайдено: [назва]"
🔸 Якщо ні — "Такого фрукту немає"
Використай метод includes() */

function findFruit(fruitName) {
    const fruits = ["яблуко", "банан", "киві", "груша", "манго"];
    if (fruits.includes(fruitName)) {
        console.log(`Фрукт знайдено: ${fruitName}`);
    } else {
        console.log("Такого фрукту немає");
    }
}
findFruit("банан");     // ✔ Фрукт знайдено: банан
findFruit("апельсин");  // ✔ Такого фрукту немає


/* Задача 2: Сума чисел у масиві
Умова:
Є масив чисел:
const numbers = [10, 5, 3, 8, 2];
Напиши функцію getSum(arr), яка рахує суму всіх чисел у масиві.
Використай for...of. */

function getSum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}
console.log(getSum([10, 5, 3, 8, 2])); // 28

/* Задача 3: Вивід парних чисел
Умова:
Напиши функцію printEvenNumbers(arr), яка з масиву чисел виводить лише парні числа.
Використай for...of і if. */

function printEvenNumbers(arr) {
    for (const num of arr) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }
}

console.log("Парні числа:");
printEvenNumbers([10, 5, 3, 8, 2]); // 10, 8, 2

/* Задача 4: Додавання імен
Умова:
Створи функцію addName(arr, newName), яка:
додає ім’я у кінець масиву імен (якщо його там ще немає)
виводить оновлений масив
Підказка: використай includes() та push() */

function addName(arr, newName) {
    if (!arr.includes(newName)) {
        arr.push(newName);
    }
    console.log("Оновлений масив:", arr);
}

/* Задача 5: Область видимості
Умова:❓ Яке значення буде виведено всередині функції та ззовні?
🔹 Поясни чому так працює.
Ось код: */

let color = "синій";

function printColor() {
  let color = "червоний";
  console.log("Всередині функції:", color);
}

printColor();
console.log("Ззовні функції:", color);


/* ---Завдання 6:Аргументи масиву (Array arguments)--- */
/* arguments — не справжній масив, тому методи масиву не працюють напряму.
Його можна перетворити на масив: Array.from(arguments) */

function showArguments() {
  console.log(arguments);
}
showArguments(1, "hello", true); 
// => [1, "hello", true] (типу масив, але не зовсім)

/* ---Завдання 7:Аrray.from(...)--- */
/* Цей метод створює справжній масив із:
псевдомасиву (наприклад, arguments)
або з рядка, Set, Map, ітерованого об'єкта */

const str = "hello";
const letters = Array.from(str); 
console.log(letters); // ["h", "e", "l", "l", "o"]

function example() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}
example(1, 2, 3); // [1, 2, 3]

/* ---Завдання 8:Array.isArray(...)--- */
/* Це метод перевіряє, чи є значення масивом. Повертає true або false. */

Array.isArray([1, 2, 3]); // true
Array.isArray("hello"); // false
Array.isArray({}); // false

/* ---Завдання 9: .padStart(2, "0")--- */
/* Це метод рядків, а не масивів. Він додає символи на початок рядка, щоб зробити його заданої довжини.
🔸 Часто використовується для форматування чисел: */

const num = "7";
console.log(num.padStart(2, "0")); // "07"
