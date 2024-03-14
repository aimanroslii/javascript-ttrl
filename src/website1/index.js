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
// object = A collection of related propertirs and/or methods
//          can represent real world objects (people, products, places)
//          object = {key:value,
//                     function()}

// const person1 = {
//     firstName : "Spongebob",
//     lastName : "Squarepants",
//     age : 30,
//     isEmployed : true,
//     sayHello: function(){console.log("Hi ! I am SpongeBob!")},
// }

// const person2 = {
//     firstName: "Patrick",
//     lastname: "Star",
//     age: 42,
//     sayHello: ()=> console.log("Hey, I'm Patrick..."),
// }

// console.log(person1.firstName);
// console.log(person1.lastName);

// console.log(person2.age);
// console.log(person2.firstName);
// person1.sayHello();
// person2.sayHello();

//--------------------------------
// this = reference to the object where THIS is used
//         (the object depends on the immediate context)
//          person.name = this.name

// const person1 = {
//     name: "Spongebob",
//     favFood: "hamburgers",
//     sayHello : function(){console.log(`Hi! I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// const person2 = {
//     name: "Patrick",
//     favFood: "Pizza",
//     sayHello : () => {console.log(`Hi! I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }

// person1.sayHello();
// person1.eat();
// person2.eat();

//------------------------------------
// constructor = special method for defining the 
//               properties and methods of objects

// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive teh ${this.model}`)}
// }

// const car1 = new Car("Ford", "Mustang", 2024, "red");
// const car2 = new Car("Chevrolet", "Camero", 2025, "blue");

// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.make);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

//----------------------------------
//class = (ES6 feature) provides a more structured and cleaner way
//        to work with objects compared to traditional constructor functions
//        ex. static keyword, encapsulation, inheritance

// function Product(name, price){
//     this.name = name;
//     this.price = price;

//     this.displayProduct = function(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price.toFixed(2)}`);
//     };

//     this.calculateTotal = function(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.50);
// const product3 = new Product("Underwear", 100.00);

// product1.displayProduct();

//below using class method of ES6 feature
// class Product {
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;
// const product1 = new Product("Shirt", 19.99);

// product1.displayProduct();

// const total = product1.calculateTotal(salesTax).toFixed(2);

// console.log(total);

//--------------------------------------
// static = keyword that defines properties or methods that belong
//          to a class itself rether than the objects created 
//          from that class (class owns anything static, not the objects)

// class MathUtil{
//     static PI = 3.14159;

//     static getDiameter(radius){
//         return radius * 2;
//     }

//     static getCircumference(radius){
//         return 2 * this.PI * radius;
//     }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));

//Example 2
// class User{
//     static userCount = 0;

//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
// }

// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");

// console.log(User.userCount);

//--------------------------------------
// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               helps with code reusability

// class Animal {
//     alive = true;

//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }

//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";
// }

// class Fish extends Animal{
//     name = "fish";
// }

// class Hawk extends Animal{
//     name = "hawk";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

//---------------------------------------
// super = keyword is used in classes to call the constructor or access
//         the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }    
    //   move(speed){
    //     console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    //   }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
    //  run(){
    //     console.log(`This ${this.name} can run`);
    //     super.move(this.runSpeed);
    //  }
// }

// class Fish extends Animal{
//     constructor(name,age,swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
// }


// const rabbit = new Rabbit("rabbit", 12, 50);

// console.log(rabbit.name);
// console.log(`${rabbit.name} age : ${rabbit.age}`);


//---------------------------------------
//getter = special method that makes a property readable
//setter = special method that makes a property writeable

//validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         } else {
//             console.error("width must be a positive number");
//         }
//     }

//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         } else {
//             console.error("height must be a positive number");
//         }
//     }

//     get width(){
//         return this._width;
//     }

//     get height(){
//         return this._height;  //'_' mean private field
//     }

//     get area(){
//         return this._width * this._height;
//     }
// }

// const rectangle = new Rectangle(3,4);

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);


//----------------------------------------
//destructuring = exact values from arrays and objects,
//                then assign them to variables in a convenient way
//                [] = to perform array destructuring
//                {} = to perform object destructuring
//                5 examples

//------- Example 1
// SWAP THE VALUE OF TWO VARIABLES

// let a = 1;
// let b = 2;

// [a,b] = [b, a];

// console.log(a);
// console.log(b);

//---- Example 2
// SWAP 2 ELEMENTS IN AN ARRAY

// const colors = ["red", "green", "blue","black","white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

//--- Example 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES

// const colors = ["red", "green", "blue", "black", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

//--- Example 4
// EXTRACT VALUES FROM OBJECTS

// const person1 = {
//     firstName : "Spongebob",
//     lastName : "SquarePants",
//     age : 21,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName : "Patrick",
//     lastName : "Star",
//     age:34,
// }

// const {firstName, lastName, age, job="Unemployed"} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//---- Example 5
// DESTRUCTURE IN FUNCTION PARAMETERS

// function displayPerson({firstName, lastName, age, job = "Unemployed"}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age : ${age}`);
//     console.log(`job : ${job}`);
// }

// const person1 = {
//     firstName : "Spongebob",
//     lastName : "SquarePants",
//     age : 21,
//     job: "Fry Cook",
// }

// const person2 = {
//     firstName : "Patrick",
//     lastName : "Star",
//     age:34,
// }

// displayPerson(person1);
// displayPerson(person2);

//------------------------------------------
// nested objects = Objects inside of other Objects.
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName : "Spongebob Squarepants",
//     age : 30,
//     isStudent : true,
//     hobbies : ["karate", "jellyfishing", "cooking"],
//     address : {
//         street : "124 Conch St.",
//         city : "Bikini Bottom",
//         country : "Int. Water"
//     }
// }

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.address.street);

// class Person {
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }
// class Address {

//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("SpongeBob", 30,
//                          "124 Conch St.", "Bikini Bottom", "Int waters");

// const person2 = new Person("Patrick", 37,
//                          "125 Conch St.", "Bikini Bottom", "Int waters");

// const person3 = new Person("SquidWard", 32,
//                          "126 Conch St.", "Bikini Bottom", "Int waters");

// console.log(person1.address);

//--------------------------------------
//Array of object 

// const fruits = [{name : "apple", color:"red", calories:95},
//                 {name : "orange", color:"orange", calories : 45},
//                 {name : "banana", color:"yellow", calories : 105},
//                 {name : "coconut", color : "white", calories : 159},
//                 {name : "pineapple", color: "yellow", calories : 37}];

//fruits.push({name: "grapes", color : "purple", calories : 24});
//fruits.pop();
// fruits.splice(1,2); //chosing index on remove
// console.log(fruits);

// -- for each ---
//fruits.forEach(fruit => console.log(fruit.name));

//----- map() ------
//const fruitsName = fruits.map(fruit => fruit.name);
//console.log(fruitsName);

//---- filter() --
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(yellowFruits);
// console.log(lowCalFruits);

//---- reduce ()------- return single object
// const maxFruit = fruits.reduce((max, fruit) => 
//                                 fruit.calories > max.calories ? 
//                                 fruit : max);

// const minFruit = fruits.reduce((min, fruit) => 
//                                 fruit.calories < min.calories ? 
//                                 fruit : min);
// console.log(maxFruit);
// console.log(minFruit);
//-----------------------------------------
// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"]

// fruits.sort();
// console.log(fruits);

// let numbers = [1,3,4,10,2,5,8,7];
// numbers.sort((a,b) => a - b);
//for reverse order -> numbers.sort((a,b) => b - a);
// console.log(numbers);

//sort object example
// const people = [{name : "Spongebob", age:30, gpa : 3.0},
//                 {name : "Patrick", age: 37, gpa : 1.3}, 
//                 {name : "Sandy", age : 32, gpa : 4.0}]

// people.sort((a,b) => a.age - b.age);
// console.log(people);

//------------------------------------------