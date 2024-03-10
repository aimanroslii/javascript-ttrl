//console.log(`Hello`);
//This is to show window alert
//window.alert(`This is an alert`)

//This is a comment

//document.getElementById("myH1").textContent = `Hello`;
//document.getElementById("myP").textContent = `I like pizza!`;

//variable = A container that stores a value.

// let x;
// x = 123;
// console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

//if want to check of datatype
// console.log(typeof gpa);
// console.log(`You are ${age} years old`);
// console.log(`The price is $${price}`)
// console.log(`Your gpa is : ${gpa}`)

//Arithematic operators (+ - * /)
//Example 
//let students = 30;
//students = students + 1;
//students += students;
//students = *= students;
//console.log(students);

//How to accept user input

//1. Easy way = window prompt
//2. Professonal way = HTML textbox

// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// let username;

// document.getElementById(`mySubmit`).onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${username}`
// }

//type conversion = change the datatype of a value to another 
//                  (strngs, numbers, booleans)
// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;

// console.log(age, typeof age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const = a variable that can't be changed
// let pi = 3.14159;
// let radius; 
// let circumference;

// radius = window.prompt('Enter the radius of a circle');
// radius = Number(radius);
// circumference = 2 * pi * radius;
// console.log(circumference);

//------------
//COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }

//-----------------

// Math = built-in object that provides a collection of properties and methods
// console.log(Math.PI);
// console.log(Math.E);

//------------------
//IF STATEMENTS = if a condition is true, execute some code; if not, do something else
// let age = 13;

// if(age >= 18){
//     console.log("You are old enough to enter this site");
// } else {
//     console.log("You must be 18+ to enter this site");
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElements");

// mySubmit.onclick = function(){
//     age = myText.value;
//     age = Number(age);

//     if(age >= 100){
//         resultElement.textContent = `You are too old to enter this site.`;
//     } else if (age == 0){
//         resultElement.textContent = `You can't enter. You were just born.`;
//     } else if (age >= 18){
//         resultElement.textContent = `You are old enough to enter this site`;
//     } else if (age < 0){
//         resultElement.textContent = `Your age cant be below 0`;
//     } else {
//         resultElement.textContent = `You must be 18+ to enter this site`;
//     }
// }

//------------------

// .checked = property that determines the checked state of an HTML checkbox or radio button element
// const myCheckBox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){

//     if(myCheckBox.checked){
//         subResult.textContent = `You are SUBSCRIBED !`;
//     } else {
//         subResult.textContent = `You are NOT SUBSCRIBED !`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = `You are paying with VISA`;
//     } else if (masterCardBtn.checked){
//         paymentResult.textContent = `You are paying with MASTERCARD`;
//     } else if (payPalBtn.checked){
//         paymentResult.textContent = `You are paying with PAYPAL`;
//     } else {
//         paymentResult.textContent = `You must select a payment type !`;
//     }
// }
//-------------------
//ternary operator = a shortcut to if{} else{} statements helps to assign
//                   based on a condition 
//                   condition ? codeIfTrue : codeIfFalse;
// let age = 18;
// let message = age >= 18 ? `You're an adult` : `You're a minor`;

// console.log(message);

//------------------
// SWITCH = can be an efficient replacement to many if statements

// let day = 3;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} is not a DAY`);
//         break;
// }

//------------------
//string methods = allow you to manipulate and work with text (strings)

// let username = "  BroCode";
// console.log(username.charAt(0));
// console.log(username.indexOf("r"));
// console.log(username.lastIndexOf("o"));
// console.log(username.length);

// username = username.trim();
// console.log(username);

// console.log(username.toUpperCase());
// console.log(username.toLowerCase());

// let result = username.startsWith("B");
// console.log(result);

// let results = username.endsWith("B");
// console.log(results);


//------------------
//string slicing = creating a substring from a portion of another string 
//                 string.slice (start, end)

// const fullname = "Bro Code";

// let firstname = fullname.slice(0,3);
// let lastname = fullname.slice(4,8)
// console.log(firstname);
// console.log(lastname);

// const email = "Bro1@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

//--------------
//Method Chaining = Calling one method after another in one continuous line of code
// let username = window.prompt("Enter your username: ");

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);
//--------------
// WHILE LOOP
// let username = "";

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);
// }

// console.log(`Hello ${username}`);

//--------------

//NUMBER GUESSING GAME
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//     guess = window.prompt(`Guess a number betweeen ${minNum} - ${maxNum}`);
//     guess = Number(guess);
    
//     if(isNaN(guess)){
//         window.alert(`Please enter a valid number`);
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert(`Please enter a valid number`);
//     } else {
//         attempts++;
//         if(guess < answer){
//             window.alert(`TOO LOW! TRY AGAIN`);
//         } else if (guess > answer){
//             window.alert(`TOO HIGH! TRY AGAIN`);
//         } else {
//             window.alert(`CORRECT ! THE ANSWER WAS ${answer}. It took you ${attempts} attemps`);
//             running = false;
//         }
//     }
// }

//-----------------

//function = A section of reusable code.
//           Declare code once, use it whenever you want 
//           Call the function to execute that code



// function happyBirthday(username, age){
//     console.log(`Happy birthday to you!`);
//     console.log(`Happy birthday to you!`);
//     console.log(`Happy birthday dear ${username}!`);
//     console.log(`Happy birthday to you!`);
//     console.log(`You are ${age} years old`);
// }


// happyBirthday("BroCode", 25);
// happyBirthday("SpongeBob", 30);
// happyBirthday("Patrick", 37);

// function add(x, y){
//     return x + y;
// }

// function subtract(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x*y;
// }

// function divide(x,y){
//     return x/y;
// }

// console.log(add(2,3));

//---------------------------------------------------------
// Temperature Conversion Program

// const textbox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFarenheit");
// const toCelcius = document.getElementById("toCelcius");
// const result = document.getElementById("result");
// let temp;


// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textbox.value);
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp.toFixed(1) + "°F";
//     } else if(toCelcius.checked){
//         temp = Number(textbox.value);
//         temp = (temp - 32) * (5/9);
//         result.textContent = temp.toFixed(1) + "°C";
//     } else {
//         result.textContent = "Select a unit";
//     }

// }

//---------------------------------------------------------
//array = a variable like structure that can hold more than 1 value

//let fruits = ["apple","orange","banana"];

//to push value in the end
//fruit.push("coconut");
//to remove data in array
//fruit.pop();

//let numOfFruits = fruit.length;
//let index = fruit.indexOf("banana");

//console.log(fruit);
//console.log(index);

// for (let fruit of fruits){
//     console.log(fruit);
// }

//----------------------------------------------------
// spread operator = ... allows an iterable such as an array
//                   or string to be expanded into seperate elements
//                  (unpacks the elements)

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let username = "Bro Code";
// let letters = [...username];

// console.log(letters);

//-----------------------------
//rest paarameters = (...rest) allow a function work with a variable number of arguments
//                   by bundling them into an array
//                  spread = expands an array into seperate elements
//                  rest = bundles seperate elements into an array

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// function openFridge(...foods){
//     console.log(foods);
// }

// openFridge(food1, food2, food3, food4, food5);

// function combineStrings(...strings){
//     return strings.join(" ");
// }

// const fullName = combineStrings("Mr","Spongebob","Squarepants");

// console.log(fullName);
//-------------------------------
//Roll dice game

// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImage = document.getElementById("diceImages");
//     const values = [];
//     const images = [];

//     for(let i=0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src= "/src/image/${value}.png">`);
//     }

//     diceResult.textContent = `dice: ${values.join(',')}`;
//     diceImage.innerHTML = images.join(''); 
// }

//----------------------------------------
//callback = a function that is passed as an argument to 
//           to another function.

//          used to handle asynchronous operations:
//          1. Reading a file
//          2. Network requests
//          3. Interacting with databases

//          "Hey, when you're done, call this next"

//hello(hello);
// goodbye(hello);

// function goodbye(callback){
//     console.log("Goodbye!");
//     callback();
// }

// function hello(){
//     console.log("Hello!");
// }

// //another example of callback

// sum(displayConsole, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//     console.log(result);
// }

//------------------------------
//forEach() = method used to iterate over the elements
//            of an array and apply a specified function (callback)
//            to each element

//            array.forEach(callback),include element, index, array
// let numbers = [1,2,3,4,5];


// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, array, index){
//     array[index] = element * 2;
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }

// function display(element){
//     console.log(element);
// }

//------------------------------
// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(cubes);

// function square(element){
//     return Math.pow(element,2);
// }

// function cube(element){
//     return Math.pow(element,3);
// }

//another example

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element){
//     return element.toUpperCase();
// }

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }
//-------------------------------

// .filter() = creates a new array by filtering out elements

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 === 1;
// }
//--------------------------------
// .reduce() = reduce the elements of an array to a single value

// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(accumulator, element){
//     return accumulator + element;
// }
// or can be write as below

// function sum(previous, next){
//     return previous + next;
// }

// const grades = [75, 50, 90, 200, 65, 95];
// const maximum = grades.reduce(getMax);

// console.log(maximum);

// function getMax(accumulator, element){
//     return Math.max(accumulator,element);
// }
//---------------------------------
// function declaration = define a reusable block of code 
//                        that performs a specific task

// function hello(){
//     console.log("Hello");
// }

//function expressions = a way to define functions as values or variables

// const hello = function(){
//     console.log("Hello");
// }

// setTimeout(function(){
//     console.log("Hello");
// }, 3000);

// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map(function(element){
//     return Math.pow(element,2);
// });

// console.log(squares);

//---------------------------------
// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

//From using function declaration
// function hello(){
//     console.log("hello");
// }
// hello();

//to using arrow functions
// const hello = (name, age) => {console.log(`Hello ${name}`)
//                               console.log(`You are ${age} years old`)};
// hello("Bro", 23);

//another example
//setTimeout(() => console.log("Hello"), 3000);

//another example
// const numbers = [1,2,3,4,5,6];

// const squares = numbers.map((element) => Math.pow(element,2));
// const cubes = numbers.map((element) => Math.pow(element,3));
// const evenNums = numbers.filter((element) => element % 2 === 0);

// console.log(squares);
//----------------------------------

