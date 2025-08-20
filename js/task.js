// const age = 10;
// let total = 150.35;

// total = 200.4;

// const userName = "Nata";
// const isOpen = true;
// let user = null;
// let product;


// const x = 10;
// const y = 3;

// console.log(x ** y);

// const apples = 10;
// const grepes = 30;

// const total = apples + grepes;

// console.log(total);
// console.log(apples - grepes);

// let students = 100;
// // students = students + 50;
// students += 50;

// console.log(students)

// 

// const companyName = "Boston";
// const repairBots = 150;
// const defensBots = 50;

// const total = repairBots + defensBots;

// const massage = `${companyName} has ${total} bots in stock`;

// console.log(massage)

// console.log(String (5));// 5
// console.log(String (true));// true
// console.log(String (null));//null
// console.log(String (undefined));//undefined

// console.log("5" + 3);// 53
// console.log(5 + "3");// 53
// console.log(true + "3");// true3
// console.log(null + "3");// null3
// console.log("5" + undefined);//5undefined
// console.log(100 + 2 + "5");// 102+"5"=1025

// console.log(Number ("5"));// 5
// //Number можно замінити на +
// console.log(+ ("5"));// 5
// console.log(+ (true));// 1
// console.log(Number (false));// 0
// console.log(Number (null));// 0
// console.log(Number (undefined));// NaN
// console.log(Number ("Student"));// NaN
// console.log(Number ("25Student"));// NaN

// console.log("5" * 2);// 10
// console.log("5" - 2);// 3
// console.log("5" / 2);// 2.5
// console.log(5 + true);// 6
// console.log(5 + false);// 5
// console.log(false + true);// 1
// console.log(5 + true * 5);// 10
// console.log(10 / (5 * true));// 2

// console.log(5>4);//true
// console.log(5<4);//false
// console.log(5>=4);//true
// console.log(5<=4);//false
// console.log(5<="4");//false
// console.log("5">=4);// true
// console.log("5"<="4");//false
// console.log("5">="4");//true
// console.log("2">="12")//true
// console.log("Student">="Student")//true
// console.log("Student">="student")//false

// console.log(4=="4")//true
// console.log(4==="4")//false
// console.log("1"==true)//true
// console.log("1"===true)//false
// console.log(undefined==null)//true
// console.log(undefined===null)//false

// let lalala = "50m";
// console.log(Number.parseInt(lalala));//50
// let user = "50.12m";
// console.log(Number.parseInt(user));//50

// let prace = "50.12m"
// console.log(Number.parseFloat(prace));//50.12

// let num = "50m";
// console.log(Math.random(num));//випадкове число від 0-1

// const num1 = 50.45;
// console.log(Math.floor(num1));//заокруглення 50

// const num2 = 50.45;
// console.log(Math.ceil(num2));//заокруглення 51

// const num3 = 50.45;
// console.log(Math.round(num3));//заокруглення 50
// const num4 = 50.55;
// console.log(Math.round(num4));//заокруглення 51



// function lalala(group1, group2){
// const sum = group1 + group2;
// return sum;
// }

// const resolt = lalala(10, 20);
// console.log(resolt);


// const user ="Dima";//глобальна зона видимості

// function adduser(){
//     const newuser = "Anna";//локальна зона видимості
//     console.log(newuser);//Anna
//     console.log(user); //Dima
// }
// adduser()

// console.log(user);//Dima


// _______________________________________________________________

// const salary = 500;
// if (salary >= 500){
//     console.log(`It cool`);  
// } else if(salary <= 300){
//     console.log(`It good`);
// }


// const salary1 = 400;
// if (salary1 >= 500){
//     console.log(`It cool`);  
// } else{
//     console.log(`It good`);
// }

// let salary2;
// salary2 = salary2 >= 400 ? `It cool` : `It good`;           !!!!!!!! не вірно
// console.log(salary2);
