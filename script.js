/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 01 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Write a script to greet your website visitor using JS alert box.
alert("hello");  // ANS: 1...

// Q2: Write a script to display following message on your web page.
alert("Error! Please Enter a Valid Password"); //ANS: 2...

// Q3: Write a script to display following message on your web page. (Hint : Use line break)

alert("Wellocome to JS land...\nHappy Coding!"); // ANS: 3...

// Q4: Write a script to display following messages in sequence.
alert("Wellocome to JS land.");
alert("Happy Coding!\n ▢ Prevent this page from creating a aditional dialogs."); // ANS: 4...

// Q5: Generate the following message through browser’s developer console.
console.log("Hello... i can run JS Through my web browser's console."); // ANS: 5...

/* Q6: Practice placement of <script></script> element in
following sections of your project in exercise 6.

    a. Head
    b. Body (before your page’s HTML)
    c. Body (inside your page’s HTML)
    d. Body (after your page’s HTML) */

// (C) is the Right Answer ✅...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 02 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
document.write("<br> <h1>CHAPTER 02</h1>")

// Q1: Declare a variable called username.
var username; // ANS 1...

// Q2: Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "abdul-rafey"; // ANS 2...

/* Q3: Write script to
    a) Declare a JS variable, titled message.
    b) Assign “Hello World” to variable message
    c) Display the message in alert box.
*/

var message = "Hello world";
alert(message); // ANS 3...


// Q4: Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var studentName = "John Doe";
var studentAge = 15;
var studentData = "Certified Mobile Aplication Development.";

alert(studentName);
alert(studentAge);
alert(studentData); // ANS: 4...


// Q5: Write a script to display the following alert using one JS variable.

alert("Pizza\n Pizz\n Piz\n Pi\n P")



// Q6: Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)...

var email = "rafey123890@gmail.com";
alert("My Email Address is: " + email); // ANS 6...


// Q7: Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box...

var lerner = "A smarter way to learn JavaScript";
alert("I Am Trying To Learn from the Book " + lerner); // ANS 7...


// Q8: Write a script to display this in browser through JS...
document.write("Yah! I can write HTML content through JavaScript."); //ANS 8...


// Q9: Store following string in a variable and show in alert and browser through JS...

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"); // ANS 9...





/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 03 >>>>>>>>>>>>>>>>>>>>>>>>>>>  */
// Q1: Declare a variable called age & assign to it your age. Show your age in an alert box.
document.write("<br> <h1>CHAPTER 03</h1>")

var age = 15;

alert("I am " + age + " years old."); // ANS 1...


// Q2: Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.

if(localStorage.getItem('visitCount')) {
    // Increment the existing counter
    var count = parseInt(localStorage.getItem('visitCount')) + 1;
    localStorage.setItem('visitCount', count);
} else {
    // Initialize the counter if it doesn't exist
    localStorage.setItem('visitCount', 1);
}

// Display the visit count wherever you need to
var visitCount = localStorage.getItem('visitCount');
alert("You Have Visited This Site: " + visitCount + " Times"); // ANS 2...


//Q3: Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthdate = 2008;

document.write("<br>My birth year is " + birthdate + "<br> Data type of my deeclared variable is number.<br>"); // ANS 3...


/* Q4: A visitor visits an online clothing store
   www.xyzClothing.com . Write a script to store in variables
   the following information:
    a. Visitor’s name
    b. Product title
    c. Quantity i.e. how many products a visitor wants to order
    Show the following message in your browser: “John
    Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 */

var visitorName = prompt("Tell me the Your Name Please...");
var productTitle = prompt("Can You Please Put The Product-name.");
var ordered = prompt("How many Products You Want.");

document.write("<strong>" + visitorName + "</strong> ordered <strong>" + ordered + " " + productTitle + "</strong> On XYZ Closing Store.." ); // ANS: 4...






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 04 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Q1: Declare 3 variables in one statement.
document.write("<br> <h1>CHAPTER 04</h1>")
var x, y, z;
var x = 5, y = 10, z = 15; // ANS: 1..


// Legal Variable Names
var firstName; // Starts with a letter and uses camelCase.
var _age; // Starts with an underscore.
var $salary; // Starts with a dollar sign.
var user3; // Contains a number but doesn't start with it.
var my_variable; // Uses underscores for separation.

// Illegal Variable Names
/* var 123name;  Starts with a number, which is not allowed.
   var: Reserved keyword in JavaScript, which is not allowed
   var my-variable; Contains a hyphen, which is not allowed in variable names.
   var first name; Contains a space, which is not allowed in variable names.
   var @username; Starts with a symbol other than _ or $. */ 
// ANSWER OF THIS QOUESTIONS>>>



/* Q2: 3. Display this in your browser
    a) A heading stating “Rules for naming JS variables”
    b) Variable names can only contain ______, ______,
    ______ and ______.
    For example $my_1stVariable
    c) Variables must begin with a ______, ______ or
    _____. For example $name, _name or name
    d) Variable names are case _________
    e) Variable names should not be JS _________
 */

document.write("<br> <h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain. NUMBER $ and For example $my_1stVariable");
document.write("Variables must begin with a $ _ and leters...")
document.write("Variable names are case. sensitive like rafey and RAFEY both are different variables in js...");
document.write("Variable names should not be JS. like this for catch case and var let const");






/* >>>>>>>>>>>>>>>>>>>>>>>>>>>> CHAPTER 05 >>>>>>>>>>>>>>>>>>>>>>>>>>> */
document.write("<br> <h1>CHAPTER 05</h1>")

// Q1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var num1 = +prompt("Enter the first number.")
var num2 = +prompt("Enter the second number.")
var result = num1 + num2;

document.write("sum of " + num1 + "and " + num2 + "is " + result ); //ANS 1;


/* Q2: Do the following using JS Mathematic Expressions
    a. Declare a variable.
    b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
    c. Initialize the variable with some number.
    d. Show the value of variable in your browser like “Initial value: 5”.
    e. Increment the variable.
    f. Show the value of variable in your browser like “Value after increment is: 6”.
    g. Add 7 to the variable.
    h. Show the value of variable in your browser like “Value

    after addition is: 13”.
    i. Decrement the variable.
    j. Show the value of variable in your browser like “Value   after decrement is: 12”.
    k. Show the remainder after dividing the variable’s value by 3.
    l. Output : “The remainder is : 0”. 
*/

document.write("<br> <h1>QUESTION NUM 02</h1>")

var num;
document.write("value after variable declaretion is " + num);
var num = 5;
document.write("initial value: " + num);
var numIn = num++
document.write("value after increament is: " + num);
var numAdd = num + numIn
document.write("value after addition is: " + numAdd);
var numDec = numAdd--;
document.write("value after decerement is: " + numDec);
var numResult = numDec/3;
document.write("the reminder is: " + numResult);




document.write("<br> <h1>QUESTION NUM 03</h1>");
/* Q3: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
*/

var ticket = +prompt("First please buy the ticket.");
var ticketNum = +prompt("How Many ticket are you buy?.");

var finalResult = ticket * ticketNum;

document.write("Total cost to buy " + ticketNum + "tickets to a movies is " + finalResult);




//Q4; Write a script to display multiplication table of any number in your browser.
var number = 4;

// Print the multiplication table for the number from 1 to 10
console.log(number + " x 1 = " + (number * 1));
console.log(number + " x 2 = " + (number * 2));
console.log(number + " x 3 = " + (number * 3));
console.log(number + " x 4 = " + (number * 4));
console.log(number + " x 5 = " + (number * 5));
console.log(number + " x 6 = " + (number * 6));
console.log(number + " x 7 = " + (number * 7));
console.log(number + " x 8 = " + (number * 8));
console.log(number + " x 9 = " + (number * 9));
console.log(number + " x 10 = " + (number * 10)); // ANS 4...




/*Q4: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
    a. Store a Celsius temperature into a variable.
    b. Convert it to Fahrenheit & output “NNoC is NNoF”.
    c. Now store a Fahrenheit temperature into a variable.
    d. Convert it to Celsius & output “NNoF is NNoC”. */


var celsius = 30;

var fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheitTemp = 86;

var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp + "°F is " + celsiusTemp + "°C"); // ANS 4...




/* Q5: Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables

    a. Price of item 1
    b. Price of item 2
    c. Ordered quantity of item 1
    d. Ordered Quantity of item 2
    e. Shipping charges

Compute the total cost & show the receipt in your browser. */

// a. Price of item 1
var priceItem1 = 50;

// b. Price of item 2
var priceItem2 = 30;

// c. Ordered quantity of item 1
var quantityItem1 = 3;

// d. Ordered quantity of item 2
var quantityItem2 = 2;

// e. Shipping charges
var shippingCharges = 10;

// Calculate the total cost
var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;


console.log("Receipt:");
console.log("Price of item 1: $" + priceItem1);
console.log("Quantity of item 1: " + quantityItem1);
console.log("Price of item 2: $" + priceItem2);
console.log("Quantity of item 2: " + quantityItem2);
console.log("Shipping charges: $" + shippingCharges);
console.log("Total cost: $" + totalCost); // ANS 5...



// Q6: Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Store total marks in a variable
var totalMarks = 500;

// Store marks obtained by the student in a variable
var marksObtained = 420;

// Compute the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser console
console.log("Total Marks: " + totalMarks);
console.log("Marks Obtained: " + marksObtained);
console.log("Percentage: " + percentage + "%"); // ANS 6...


//Q7: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)


var usDollars = 10;
var saudiRiyals = 25;

var usdToPkr = 104.80;
var riyalToPkr = 28;


var totalPkr = (usDollars * usdToPkr) + (saudiRiyals * riyalToPkr);

console.log("Total in Pakistani Rupees: " + totalPkr); // ANS 7...




/*Q8: Write a program to initialize a variable with some number and do arithmetic in following sequence:
    a. Add 5
    b. Multiply by 10
    c. Divide the result by 2
Perform all calculations in a single expression */

var initialNumber = 20;

var result = ((initialNumber + 5) * 10) / 2;

console.log("Initial number: " + initialNumber);
console.log("Result after arithmetic operations: " + result); // ANS 8...



/*Q9: The Age Calculator: Forgot how old someone is? Calculate it!
    a. Store the current year in a variable.
    b. Store their birth year in a variable.
    c. Calculate their 2 possible ages based on the stored
    values.

    Output them to the screen like so: “They are either NN or NN
    years old”. */


var currentYear = 2024;


var birthYear = 1990;


var ageThisYear = currentYear - birthYear;
var ageLastYear = ageThisYear - 1;


console.log("They are either " + ageLastYear + " or " + ageThisYear + " years old."); // ANS 9...


/*Q11: The Geometrizer: Calculate properties of a circle.
    a. Store a radius into a variable.
    b. Calculate the circumference based on the radius, and
    output “The circumference is NN”.
    (Hint : Circumference of a circle = 2 π r , π = 3.142)
    Calculate the area based on the radius, and output “The
    area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
*/


var radius = 7; // You can change this value to any other radius


var pi = 3.142; 
var circumference = 2 * pi * radius;


console.log("The circumference is " + circumference);

// Calculate the area based on the radius
var area = pi * radius * radius;


console.log("The area is " + area); // ANS 11...




/*Q13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
    a. Store your favorite snack into a variable
    b. Store your current age into a variable.
    c. Store a maximum age into a variable.
    d. Store an estimated amount per day (as a number).
    e. Calculate how many would you eat total for the rest of
    your life.

    Output the result to the screen like so: “You will need
    NNNN to last you until the ripe old age of NN”.
*/


var favoriteSnack = "chips";


var currentAge = 25; // You can change this value to your current age


var maximumAge = 80; // You can change this value to your expected maximum age


var dailyAmount = 2; // You can change this value to the estimated amount of snack consumed per day


var yearsLeft = maximumAge - currentAge;
var totalAmount = yearsLeft * 365 * dailyAmount; // Assuming 365 days in a year


console.log("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "."); // ANS 13...












