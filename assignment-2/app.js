// JS Assignment 2


// Q1
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

// var initValue = +prompt("Assign a Number to variable ' a ' !");

// document.write("<h1> Result: </h1>" + "<br />");
// document.write("The value of a is: " + initValue  + "<br />");

// document.write("<b>.........................................</b>" + "<br /> <br />");

// document.write("The value of ++a is: " + ++initValue + "<br />");
// document.write("Now the Value of a is: " + initValue + "<br /> <br />");

// document.write("The Value of a++ is: " + initValue++ + "<br />");
// document.write("Now the Value of a is: " + initValue + "<br /> <br />");

// document.write("The Value of --a is: " + --initValue + "<br />");
// document.write("Now the Value of a is: " + initValue + "<br /> <br />");

// document.write("The Value of a-- is: " + initValue-- + "<br />");
// document.write("Now the Value of a is: " + initValue);


// Q2
// What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--; 


// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
//            //  1 -   0 +   1 + 1   

// console.log(result);


// Q3
// Write a program that takes input a name from user & greet the user

// var userName = prompt("Enter Your Name: ");
// alert("Hello, " + userName);


// Q4
// Write a program to take input a number from user & display its multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

// var tableOf = +prompt("Enter a number to print the table of: ", 5);

// for(var i = 1; i <= 10; i++){
//     document.write(tableOf + " x " + i + " = " + tableOf * i + "<br />")
// }


// Q5
// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this. (Hint: user table) 