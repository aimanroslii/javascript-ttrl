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
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){

    if(myCheckBox.checked){
        subResult.textContent = `You are SUBSCRIBED !`;
    } else {
        subResult.textContent = `You are NOT SUBSCRIBED !`;
    }

    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with VISA`;
    } else if (masterCardBtn.checked){
        paymentResult.textContent = `You are paying with MASTERCARD`;
    } else if (payPalBtn.checked){
        paymentResult.textContent = `You are paying with PAYPAL`;
    } else {
        paymentResult.textContent = `You must select a payment type !`;
    }
}

//-------------------