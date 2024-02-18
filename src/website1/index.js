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