// JS Assignment - 4


// Q1


// var pass = "abc123";
// var userPass1 = prompt("Enter your password! \n default pass:", "abc123");

// if (userPass1 == "") {
//     alert("⚠ Please enter your password.")

// } else if (userPass1 == pass) {

//     var userPass2 = prompt("Enter your password again!");
//     if (userPass2 == pass) {
//         alert("✅ Correct! The password you entered matches the original password.")
//     }
//     else {
//         alert("❌ Wrong! The password you entered does not matches the first password.")
//     }
// }
// else {
//     alert("❌ Wrong Password.")
// }


// Q2


// // in the given code you just stored the output in variable greeting and there is a syntex error. if you want the output you must need to call it. check below for reference:

// var greeting;
// var hours = 13;

// if(hours < 18){
//     greeting = "Good Day";

// }
// else{
//     greeting = "Good Evening";

// }

// alert(greeting)


// Q3


// // a
// var arrStudents = [];


// // b



// // c
// var arrStr = ["apple", "orange", "mango",];


// // d
// var arrNum = [1, 2, 3, 4];


// // e
// var arrBoolean = [true, false];


// // f
// var arrMix = ["apple", "orange", 1, 2, true, false];


// // g
// var arrDegree = ["SSC", "HSC", "BSC", "BS", "B.COM", "MS", "M.Phil.", "PhD"];



// Q4


// //Initialize an array with color names. Display the array elements in your browser.

// var colors = ["red", "green", "blue", "yellow"];
// document.write(colors)


// // a.

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter your color to add the begining of the array");
// colors.unshift(userColor);

// document.write(colors);


// //b.

// var colors = ["red", "green", "blue", "yellow"];
// var userColor = prompt("Enter your color to add the End of the array");
// colors.push(userColor);

// document.write(colors);


// // c.

// var colors = ["red", "green", "blue", "yellow"];
// colors.unshift("pink", "aqua");

// document.write(colors);


// // d.

// var colors = ["red", "green", "blue", "yellow"];
// colors.shift();

// document.write(colors);


// // e.

// var colors = ["red", "green", "blue", "yellow"];
// colors.pop();

// document.write(colors);


// // f.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to add the color.")
// var colorName = prompt("Enter color name.")

// colors.splice(colorIndex, 0, colorName)

// document.write(colors);


// // g.

// var colors = ["red", "green", "blue", "yellow"];

// var colorIndex = +prompt("Enter index number to remove the color.\n [red, green, blue, yellow]")
// var delNum = prompt("How many colors you want to remove.\n [red, green, blue, yellow]")

// colors.splice(colorIndex, delNum)

// document.write(colors);


// Q5


