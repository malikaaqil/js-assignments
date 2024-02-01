// ****** Assignment-1

// Q1
// Write a script to greet your website visitor using JS alert box. (Welcome to
// Our Website)

// alert("Hello, Welcome to Our Website!");


// Q2
// Write a script to display message on your web page. (Error! Please Enter a
// valid password)

// alert("Error! Please Enter a valid password");


// Q3
// Write a script to display message on your web page: (Hint : Use line break)

// alert("Hello \n World");


// Q4
// Write a script to display messages in sequence (3 Alerts)

// alert("Hello World! 1");
// alert("Hello World! 2");
// alert("Hello World! 3");


// Q5, 6
// Make use of alerts in your new/existing HTML & CSS project,
// Practice placement of element in following sections of your project in
// exercise 5:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// It works for now but not recommend for script tag before and after the body tag.
// also we can use the scrip tag in html head-section with the attribute of "defer". this attribute stops JavaScript while the html document loading when html document loads successfully then the file of JavaScript executes. For best practice to use JavaScript tag, place it before the body end tag.


// Q7
// Declare a variable called username.

// var userName;


// Q8
// Declare a variable called myName & assign to it a string that represents
// your Full Name

// // (i)
// var myName = "Malik Aaqil";

// // (ii)
// var myName;
// myName = "Malik Aaqil";


// Q9
// Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// var titleMessage;
// titleMessage = "Hello World";
// alert(titleMessage);


// Q10
// .Write a script to save student’s bio data in JS variables and show the data in alert boxes

// var studentName = "Malik Aaqil";
// var studentID = 5678;

// alert("Student Name : " + studentName);
// alert("Student ID : " + studentID);


// Q11
// Declare a variable called email and assign to it a string that represents your
// Email Address(e.g. example@example.com). Show the blow mentioned
// message in an alert box.(Hint: use string concatenation)

// var email;
//email = "aaqil@example.com";
// alert("My Email : " + email);


// Q12
// Write a script to display this in browser through JS,

// completed


// Q13
// Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// var border = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(border);


// Q14
// Declare a variable called age & assign to it your age. Show your age in an alert box.

// // (i)
// var myAge;
// myAge = 23;

// // (ii)
// var myAge = 23;

// alert("My Age : " + myAge);


// Q15
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page.
// For example: “You have visited this site N times”

// var visit = "You have visited this site "
// var count = 0;

// alert(visit + count++)
// alert(visit + count++)
// alert(visit + count++)
// alert(visit + count++)
// alert(visit + count++)


// Q16
// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

// var birthYear = 2000;

// alert("My Birth Year was : " + birthYear);


// Q17
// A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information :
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order Show thefollowing message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

// var visitorName = "John Doe,";
// var quantity = 5;
// var productTitle = "T-Shirts (s)";
// var storeName = "Outfitter";

// alert(visitorName + " " + "Ordered" + " " + quantity + " " + productTitle + " " + "from" + " " + storeName + "!");


// Q18
// Declare 3 variables in one statement.

// // without values

// var variable1;
// var variable2;
// var variable3;

// // // with values

// var variable1 = "string";
// var variable2 = 1234;
// var variable3 = true;


// Q19
// Declare 5 legal & 5 illegal variable names.

// // legal varialble names:

// userName
// user_name
// user123
// user1name
// userName$

// // illegal variable names:

// user name
// user-name
// 123name
// #name
// @myName


// Q20
// Display this in your browser :
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


// document.write("Rules for naming JS variables" + "<br/> <br/>");
// document.write("1. Variable names can only contain letters, numbers, underscores( _ ) and dollar signs($).For example : $my_1stVariable." + "<br/>");
// document.write("2. Variables must begin with a letter, underscore( _ ) or dollar sign($). For example : $name, _name or name." + "<br/>");
// document.write("3. Variable names are case sensitive." + "<br/>")
// document.write("4. Variable names should not be JS reserved keywords.")


// Q21
// Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var result = num1 + num2;

// alert("The Sum of " + num1 + " & " + num2 + " is : " + result);



// Q22
// Repeat task 21 for subtraction, multiplication, division & modulus


// subtraction

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var result = num1 - num2;

// alert("The Subtraction of " + num1 + " & " + num2 + " is : " + result);


// Multiplication

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var result = num1 * num2;

// alert("The Multiplication of " + num1 + " & " + num2 + " is : " + result);


// Division

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var result = num1 / num2;

// alert("The Division of " + num1 + " & " + num2 + " is : " + result);


// Modulus

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");

// var result = num1 % num2;

// alert("The Remainder of " + num1 + " & " + num2 + " is : " + result);


// Q23
// Do the following using JS Mathematic Expressions :
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition
// is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12.
// k. Show the remainder after dividing the variable’s value by 3.
// l. Output : “The remainder is : 0.


// var myNum;

// document.write("Value after variable declaration is: " + myNum + "</br> </br>");
// myNum = +prompt("Enter a number for the initial value!");

// document.write("Initial value: " + myNum + "</br> </br>");
// myNum =  ++myNum

// document.write("Value after pre-increment is: " + myNum + "</br> </br>");
// myNum = myNum + 7;

// document.write("Value after addition (+7) is: " + myNum + "</br> </br>");
// myNum = --myNum;

// document.write("Value after pre-decrement is: " + myNum + "</br> </br>");
// myNum = myNum % 3;

// document.write("Output divided into 3 : The Remainder is: " + myNum);


// Q24
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.

// var ticketPrice = 600;
// var Quantity = +prompt("How many tickets do you want?");
// var total = ticketPrice * Quantity;

// alert("Your Total of " + Quantity + " Tickets is : " + total + "/= PKR");


// Q25
// Write a script to display multiplication table of any number in your browser.

// var tableOf = prompt("Enter a number to print the table:");

// document.write(tableOf + " x " + 1 + " = " + tableOf * 1 + "</br>");
// document.write(tableOf + " x " + 2 + " = " + tableOf * 2 + "</br>");
// document.write(tableOf + " x " + 3 + " = " + tableOf * 3 + "</br>");
// document.write(tableOf + " x " + 4 + " = " + tableOf * 4 + "</br>");
// document.write(tableOf + " x " + 5 + " = " + tableOf * 5 + "</br>");
// document.write(tableOf + " x " + 6 + " = " + tableOf * 6 + "</br>");
// document.write(tableOf + " x " + 7 + " = " + tableOf * 7 + "</br>");
// document.write(tableOf + " x " + 8 + " = " + tableOf * 8 + "</br>");
// document.write(tableOf + " x " + 9 + " = " + tableOf * 9 + "</br>");
// document.write(tableOf + " x " + 10 + " = " + tableOf * 10 );