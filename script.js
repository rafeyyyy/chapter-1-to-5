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









