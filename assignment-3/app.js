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