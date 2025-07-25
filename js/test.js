/* Уяви, що ти працюєш над сервісом доставки. Клієнт замовляє певну кількість товарів, і програма має розрахувати загальну суму з урахуванням:
ціни за одиницю товару,
кількості товарів,
чи потрібна доставка (true/false),
та країни доставки.
🔸 Доставка по Україні коштує 50₴, а за кордон — 100₴.
🔸 Якщо доставка не потрібна (deliveryNeeded === false), доставка безкоштовна. */

/* const name = "Олександр";
const quantity = 4;
const pricePerItem = 120;
const deliveryNeeded = true;
const country = "Poland";

function calculateOrderTotal(quantity, price, delivery, country) { 
  const totalPrice = quantity * price;

  if (delivery) {
    if (country === "Ukraine") {
      return totalPrice + 50; // Доставка по Україні
    } else {
      return totalPrice + 100; // Доставка за кордон
    }
  }

  return totalPrice; // Безкоштовна доставка, якщо delivery === false
}

function getDeLiveryCost(delivery, country) {
  if (!delivery) {
    return 0; // Безкоштовна доставка
  }
  return country === "Ukraine" ? 50 : 100; // Вартість доставки в залежності від країни
}

const total = calculateOrderTotal(quantity, pricePerItem, deliveryNeeded, country);
const deliveryCost = getDeLiveryCost(deliveryNeeded, country);

console.log(`Привіт, ${name}! Ви замовили ${quantity} товарів по ${pricePerItem}₴.`);
console.log(`Вартість доставки: ${deliveryCost}₴.`);
console.log(`Загальна сума до сплати: ${total}₴.`); */

/* --- Task - 2-- - */

/* Уяви, що студент складає тест. Програма має:
Отримати:
Ім’я студента
Максимальну кількість балів
Набрані бали
Обчислити відсоток результату
Вивести повідомлення:
Якщо результат менше 60% — "На жаль, [ім’я], ви не склали тест. Ваш результат: [відсоток]%."
Якщо 60% або більше — "Вітаємо, [ім’я]! Ви склали тест. Ваш результат: [відсоток]%." */


/* const name = "Олександр";
const maxPoints = 100;
const scoredPoints = 75;

function calculatePercentage(scored, max) {
  return (scored / max) * 100;
}

const percentage = calculatePercentage(scoredPoints, maxPoints);
const rounded = Math.round(percentage);
if (rounded >= 60) {
  console.log(`Вітаємо, ${name}! Ви склали тест. Ваш результат: ${rounded}%.`);
} else {
  console.log(`На жаль, ${name}, ви не склали тест. Ваш результат: ${rounded}%.`);
} */

/* --- Task - 3 -- - */

/* Користувач ввів кількість набраних балів і максимальну кількість. Програма має:
Обчислити відсоток
Вивести повідомлення з оцінкою:
90% і більше — "Відмінно"
75–89% — "Добре"
60–74% — "Задовільно"
менше 60% — "Незадовільно" */

/* const name = "Наталя";
const maxPoints = 100;
const scoredPoints = 82;

function calculatePercentage(scored, max) {
  return (scored / max) * 100;
}

const percentage = calculatePercentage(scoredPoints, maxPoints);
const rounded = Math.round(percentage);
if (rounded >= 90) { 
  console.log(`Відмінно`)
} else if (rounded >= 75) {
  console.log(`Добре`)
} else if (rounded >= 60) {
  console.log(`Задовільно`)
} else {
  console.log(`Незадовільно`)
} */

/* --- Task - 4 -- - */
/* Користувач вводить:
productName — назва товару (рядок),
quantity — кількість (число),
pricePerUnit — ціна за штуку (число),
isAvailable — чи є товар у наявності (булеве значення true або false)
Програма повинна:
Перевірити, чи товар є в наявності.
Якщо є:
обчислити загальну суму
вивести повідомлення: Ви замовили [quantity] одиниць [productName] на суму [total]₴.
якщо немає: На жаль, товар [productName] наразі відсутній. */

/* const productName = "Пляшка води";
const quantity = 3;
const pricePerUnit = 25;
const isAvailable = true; // Змінна для перевірки наявності товару

function calculateTotal(quantity, price) {
  return quantity * price;
}

const total = calculateTotal(quantity, pricePerUnit);
if (isAvailable) {
  console.log(`Ви замовили ${quantity} одиниць ${productName} на суму ${total}₴.`);
} else {
  console.log(`На жаль, товар ${productName} наразі відсутній.`);
} */

/* --- Task - 5 -- - */
/* 
Користувач вводить:
productName — назва товару (рядок)
orderedQuantity — скільки товару хоче замовити (число)
stockQuantity — скільки товару зараз на складі (число)
pricePerUnit — ціна за штуку (число)
Програма повинна:
Перевірити, чи замовленої кількості достатньо на складі.
Якщо так:
обчислити загальну суму
вивести повідомлення: Замовлення підтверджено: [orderedQuantity] одиниць [productName] на суму [total]₴.
Якщо товару недостатньо:
вивести повідомлення:На жаль, ми маємо лише [stockQuantity] одиниць [productName]. Змініть кількість замовлення. */

/* const productName = "Ноутбук";
const orderedQuantity = 4;
const stockQuantity = 2;
const pricePerUnit = 15000;

function calculateTotal(quantity, price) {
  return quantity * price;
}
const total = calculateTotal(orderedQuantity, pricePerUnit);
if (orderedQuantity <= stockQuantity) {
  console.log(`Замовлення підтверджено: ${orderedQuantity} одиниць ${productName} на суму ${total}₴.`);
} else {
  console.log(`На жаль, ми маємо лише ${stockQuantity} одиниць ${productName}. Змініть кількість замовлення.`);
} */

/* --- Task - 6 -- - */

 /*  Створи програму, яка:
Запитує вік користувача (в змінній age)
Виводить у консоль:
якщо вік менше 18 → "Вам ще зарано голосувати."
якщо 18 або більше → "Ви маєте право голосувати." */

/* const age = 21;
if(age < 18) {
  console.log("Вам ще зарано голосувати.");
} else {
  console.log("Ви маєте право голосувати.");
} */

/* --- Task - 7 ---*/

/* У магазині діє акція:
Діти до 12 років отримують 50% знижку
Люди віком від 60 років — 30% знижку
Всі інші — без знижки
Твоя задача:
Створи змінні:
age (вік покупця)
price (початкова ціна товару)
Створи функцію calculateDiscountedPrice(age, price), яка повертає фінальну ціну після знижки
Виведи повідомлення:Ваш вік: [age]. Знижка застосована. Сума до сплати: [newPrice]₴. */

/* const age = 60;
const price = 200;
// Очікувано: Знижка 50%. Сума до сплати: 100₴.

function calculateDiscountedPrice(age, price) {
  let discount = 0;

  if (age < 12) {
    discount = 0.5; // 50% знижка для дітей до 12 років
  } else if (age >= 60) {
    discount = 0.3; // 30% знижка для людей від 60 років
  }

  const discountedPrice = price - (price * discount);
  return discountedPrice;
}

const finalPrice = calculateDiscountedPrice(age, price);
console.log(`Ваш вік: ${age}. Знижка застосована. Сума до сплати: ${finalPrice}₴.`); */


// --- Task - 8 ---
/* Створи програму, яка:
Приймає число (в змінній number)
Виводить:
"Число [n] є парним." — якщо ділиться на 2 без остачі
"Число [n] є непарним." — якщо ділиться з остачею */

/* const number = 7;
// Очікуване повідомлення: Число 7 є непарним.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return `Число ${num} є парним.`;
  } else {
    return `Число ${num} є непарним.`;
  }
}

const result = checkEvenOdd(number);
console.log(result); // Виведе: Число 7 є непарним. */

// --- Task - 9 ---

/* Створи програму, яка:
Приймає число (в змінній number)
Виводить повідомлення залежно від умов:

Умова	                            Повідомлення
Кратне і 3, і 5	        "Число [n] кратне одночасно 3 і 5."
Тільки кратне 3	        "Число [n] кратне 3."
Тільки кратне 5	        "Число [n] кратне 5."
Не кратне ні 3, ні 5	  "Число [n] не кратне ні 3, ні 5." */

/* const number = 15;
// Очікуване: "Число 15 кратне одночасно 3 і 5."
function checkDivisibility(num) {
  const isDivisibleBy3 = num % 3 === 0;
  const isDivisibleBy5 = num % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return `Число ${num} кратне одночасно 3 і 5.`;
  } else if (isDivisibleBy3) {
    return `Число ${num} кратне 3.`;
  } else if (isDivisibleBy5) {
    return `Число ${num} кратне 5.`;
  } else {
    return `Число ${num} не кратне ні 3, ні 5.`;
  }
}

const result = checkDivisibility(number);
console.log(result); // Виведе: Число 15 кратне одночасно */


// --- Task - 10 ---

/* Створи програму, яка перевіряє, чи пароль користувача відповідає базовим вимогам:
Пароль має бути не коротшим за 8 символів
Містити хоча б один спеціальний символ: !, @, #, $, %, *
Твоя задача:
Створи функцію checkPassword(password), яка:
Приймає один аргумент — рядок пароля
Повертає повідомлення:
"Пароль надійний" — якщо всі умови виконані
"Пароль занадто простий" — якщо ні */

/* function checkPassword(password) {
  const minLength = 8;
  const specialChars = /[!@#$%*]/;

  if (password.length < minLength || !specialChars.test(password)) {
    return "Пароль занадто простий";
  } else {
    return "Пароль надійний";
  }
}

console.log(checkPassword("12345")); // → "Пароль занадто простий"
console.log(checkPassword("qwerty@123")); // → "Пароль надійний"
console.log(checkPassword("abcd1234")); // → "Пароль занадто простий  " */
