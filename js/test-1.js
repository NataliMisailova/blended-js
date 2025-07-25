/* Задача: Перевірка типу користувача
Напиши функцію checkUserRole(role), яка приймає роль користувача (рядок) і повертає повідомлення:
Якщо роль "admin" — "Вітаємо, адміністраторе!"
Якщо роль "moderator" — "Вітаємо, модераторе!"
Якщо роль "user" — "Вітаємо, користувачу!"
Якщо інша — "Роль не розпізнана"
Реалізуй цю функцію трьома способами:
Через if...else if...else
Через switch
Через тернарний оператор (тільки для "admin" і "user"; інші ролі — повідомлення "Роль не розпізнана") */

/* function checkUserRoleIfElse(role) {
    if (role === "admin") {
        return "Вітаємо, адміністраторе!";
    } else if (role === "moderator") {
        return "Вітаємо, модераторе!";
    } else if (role === "user") {
        return "Вітаємо, користувачу!";
    } else {
        return "Роль не розпізнана";
    }
}

console.log(checkUserRoleIfElse("admin")); // Вітаємо, адміністраторе!
console.log(checkUserRoleIfElse("moderator")); // Вітаємо, модераторе!
console.log(checkUserRoleIfElse("user")); // Вітаємо, користувачу!
console.log(checkUserRoleIfElse("guest")); // Роль не розпізнана 


function checkUserRoleSwitch(role) {
    switch (role) {
        case "admin":
            return "Вітаємо, адміністраторе!";
        case "moderator":
            return "Вітаємо, модераторе!";
        case "user":
            return "Вітаємо, користувачу!";
        default:
            return "Роль не розпізнана";
    }
}

console.log(checkUserRoleIfElse("admin")); // Вітаємо, адміністраторе!
console.log(checkUserRoleIfElse("moderator")); // Вітаємо, модераторе!
console.log(checkUserRoleIfElse("user")); // Вітаємо, користувачу!
console.log(checkUserRoleIfElse("guest")); // Роль не розпізнана  

function checkUserRoleTernary(role) {
  return role === "admin"
    ? "Вітаємо, адміністраторе!"
    : role === "user"
    ? "Вітаємо, користувачу!"
    : "Роль не розпізнана";
}

 
console.log(checkUserRoleTernary("admin"));     // Вітаємо, адміністраторе!
console.log(checkUserRoleTernary("user"));      // Вітаємо, користувачу!
console.log(checkUserRoleTernary("moderator")); // Роль не розпізнана */

/* --- Task - 2-- - */

/* Методи рядків
Задача: Аналіз email
Створи функцію isValidEmail(email), яка повертає true, якщо:
email містить символ "@"
email закінчується на ".com" або ".ua"
email не починається з пробілу (використай trim() і startsWith())
Інакше повертає false. */

/* function isValidEmail(email) {
    return (
        email.includes("@") &&
        (email.endsWith(".com") || email.endsWith(".ua")) &&
        !email.trim().startsWith(" ")
    );
}

function isValidEmail(email) {
  const trimmedEmail = email.trim();
  return (
    trimmedEmail.includes("@") &&
    (trimmedEmail.endsWith(".com") || trimmedEmail.endsWith(".ua")) &&
    trimmedEmail === email // перевірка, що не було пробілів на початку/в кінці
  );
}


console.log(isValidEmail("0773113@gmail.com")); // true
console.log(isValidEmail("0773113gmail.com")); // false
console.log(isValidEmail(" 0773113@gmail.com")); // false */


/* --- Task - 3-- - */

/* Задача: Вивести числа
Напиши функції, які виводять у консоль числа від 1 до 5:
за допомогою циклу for
за допомогою циклу while
за допомогою циклу do...while */

/* function printNumbersFor() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersFor(); // 1 2 3 4 5

function printNumbersWhile() {
    let i = 1;
    while (i <= 5) {
        console.log(i);
        i++;
    }
}
printNumbersWhile(); // 1 2 3 4 5

function printNumbersDoWhile() {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}
printNumbersDoWhile(); // 1 2 3 4 5 */

/* Задача 1: Вивести всі парні числа від 1 до 20

function printEvenNumbers() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
printEvenNumbers(); // Виведе: 2, 4, 6, ..., 20 */

/* Задача 2: Обчислити суму чисел від 1 до 100

function sumToHundred() {
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  console.log("Сума чисел від 1 до 100:", sum);
}
sumToHundred(); // Виведе: 5050 */

/* Задача 3: Ввести правильний пароль (цикл while)

function askPassword() {
  const correctPassword = "javascript";
  let input;

  while (input !== correctPassword) {
    input = prompt("Введіть пароль:");
  }

  console.log("Пароль правильний!");
}
// askPassword(); // Розкоментуй для запуску в браузері */

/* Задача 4: Вивести зворотний відлік з 5 до 1 (цикл do...while)

function countdown() {
  let i = 5;
  do {
    console.log(i);
    i--;
  } while (i >= 1);
}
countdown(); // Виведе: 5 4 3 2 1 */