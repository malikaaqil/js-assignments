// JS Assignment 3

// Q1
// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var userCity = prompt("Enter a city name: ").toLowerCase();

// if(userCity === "karachi"){
//     alert("Welcome to city of lights!")
// }else{
//     alert("Not the city of lights!")
// }


// Q2
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var userGender = prompt("Enter Your Gender: ", "Male").toLowerCase();

// if(userGender === "male"){

//     alert("Good Morning Sir")

// }else if (userGender === "female"){

//     alert("Good Morning Ma’am")

// }else{
//     alert("Please Enter Correct Gender!!")
// }


// Q3
// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than            0.25litres, show the message “Please refill the fuel in your car”

// var remainingFuel = +prompt("Remaning Fuel in your car");

// if (remainingFuel < 0.25){

//     alert("Please refill the fuel in your car: ")

// }else if (remainingFuel > 0.25) {

//     alert("No need to refill.")


// Q4
// Run this script, & check whether alert message would be displayed or not. Record the outputs. 

// // a.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// } 

// // pre-increment trued the condition.


// b.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// note: b++ is post increment. if we want the incremented value we need to call the variable b in the next line then we will get the incremented value. and the upper defined condition is just like we just decreared it. for reference check below defined condition.

// var b = 2;
// alert("Here we incremented the value but we wil get the old value: "+b++);
// alert("Now here is the updated value: " + b);


// c.

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// // condition 2 and 4 will run.


// d.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// } 

// // condition true


// e.

// if (true) {
//     alert("True")    
// }
// if (false) {
//     alert("False");
// }

// the condition true will only run.


// f.

// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// // this is an advance topic but for now we will urderstand it like in alphabetic order. a comes first then b and c. so the index of the a is 1 and for b index is 2 and for c is 3. in upper defined condition both side are equal in first 2 letters, third letter of the car is on 18 index in alphabetic order & the third letter of cat is 20 index. now you will easily understand the upper defined condition 18 < 20 which is true.


// Q5
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


// var num = parseInt(Math.random()*10);

// var userNum = +prompt("Enter a number between 1 - 10");

// if(userNum === num){

//     alert("Bingo! Correct answer")

// }else if (userNum === num + 1 || userNum === num - 1){
//     alert("Close enough to the correct answer." + num)

// }else{
//     alert("My Guess was: " + num)
// }


// Q6
// Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var userNum = +prompt("Enter a number to check it is divisible by 3:");

// if (userNum <= 0) {
//     alert("please enter positive value!")

// } else if (userNum % 3 === 0) {
//     alert(userNum + " is divisible.")

// } else {

//     alert(userNum + " is not divisible.")
// }


// Q7
// Write a program that checks whether the given input is an even number or an odd number. 

// var userNum = +prompt("Enter a number to check it's even or odd: ");

// if (userNum % 2 === 0){
//     alert(userNum + " is even number.")
// }else{
//     alert(userNum + " is odd number.")

// }


// Q8
// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = prompt("Enter temperature:", 40);

// if (temp >= 40) {
//     alert("It is too hot outside.")

// } else if (temp >= 30) {
//     alert("The Weather today is Normal.")

// } else if (temp >= 20) {
//     alert("Today's Weather is cool.")

// } else if (temp >= 10) {
//     alert("OMG! Today's weather is so Cool.")

// }else if(temp < 10){
//     document.write("<h1>Moye Moye! 🥶</h1>")

// }