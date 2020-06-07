//  Chapter # 1

// //task 1
alert("Welcome to my Website");

// //task 2
alert("Error! Please enter a valid password.");

// //task 3
alert("Welcome to JS Land... \n Happy Coding!");

// //task 4
alert("Welcome to JS Land...");
alert("Happy Coding! \n ");

// //task 5
alert("Hello... I can run JS through my web browser's console");



//  Chapter # 2

// //task 1
var username;

// //task 2
var myName = "Arham Abeer Ahmed";

// //task 3
var message = "Hello World";
alert(message); 

// //task 4
var name = "Arham Abeer";
var age = "20 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


//task 5
var a = ["pizza" , "pizz" , "piz" , "pi", "p"];
var i;
for(i=0; i<a.length; i++){
document.write(a[i] + "<br>");
}


// //task 6
var email = "arhamabeerahmed@gmail.com";
alert("My email address is "+ email);

//task 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);

//task 8
document.write("Yah! I can write HTML content through JavaScript");

//task 9
var str = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str);
document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");




//Chapter # 3

//task 1
var age = 20;
alert("I am " + age + " years old")

//task 2
var count = 0;
if(document.open)
{
    count++;
}

alert("You have visited this site " + count + " times.")

//task 3
var birthYear = 1999;
document.write("My birth year is " + birthYear + " <br> Data type of my declared variable is number");

//task 4
var vname;
var product;
var quantity;

vname=prompt("Your name?");
product=prompt("Enter product name.");
quantity=prompt("How many products you want to order?")
document.write(vname.bold() + " ordered " +  quantity.bold() + " " + product.bold() + "(s)  on ABC Store.");




//Chapter # 4

//task 1
var a,b,c;

//task 2
//legal
var arh;
var firstname;
var love_pak;
var at_gmail;
var $name;

// //illegal
var 1stname;
var brainly-in;
var @gmail;
var karachi.branch;
var #name;

//task 3
var heading = "Rules for naming JS variables";
document.write(heading.fontsize(32));
document.writeln(" <br><br>Variable names can only contain numbers, $ and _. For example: $my_1stVariable");
document.writeln("<br>Variables must begin with a letter, $ or _.  For example $name, _name or name");
document.writeln("<br>Variable names are case sensitive");
document.writeln("<br>Variable names should not be JS Keywords");





//Chapter # 5

//task 1
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 + num2;
document.write("Sum of "+ num1 + " and " + num2 +" is " + sum);

// task 2
var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 - num2;
document.write("Subtraction of "+ num1 + " and " + num2 +" is " + sum);

var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 * num2;
document.write("Multiplication of "+ num1 + " and " + num2 +" is " + sum);

var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var sum = num1 / num2;
document.write("Division of "+ num1 + " and " + num2 +" is " + sum);

//task 3
var num;
document.write("<br>Value after variable declaration is: " + num);

num = 7;
document.write("<br>Initial value: " + num);

num++;
document.write("<br>Value after increment is: " + num);

num= num+7;
document.write("<br>Value after addition is: " + num);

num--;
document.write("<br>Value after decrement is: " + num);

num= num/3;
document.write("<br>The remainder is : " + num);


//task 4
var cost = 600;
var movie = 5;
var tcost = cost*movie;
document.write("Total cost to buy 5 tickets to a movie is: " + tcost +"PKR");

// task 5
var table_no = prompt("Enter table number");
document.write("Table of " + table_no + "<br>");
var i;
for(i=1; i<=10; i++){
    document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
}


//task 6
var c = +prompt("Enter Celcius temperature");
var f = +prompt("Enter Fahrenheit temperature");

var fc = (f - 32)* (5/9);
var cf = (c * 9/5)+ 32; 

document.write(c+ "'C is " + cf + "'F <br>");
document.write(f + "'F is " + fc + "'C");


//task 7
var price1 = +prompt("Enter price of item 1");
var quantity1 = prompt("Enter quantity of item 1");
var price2 = +prompt("Enter price of item 2");
var quantity2 = prompt("Enter quantity of item 2");
var shipcharge = +prompt("Shipping Charges?");
var cost1, cost2;
var tcost;

document.write("<br>Price of Item 1 is: " + price1);
document.write("<br>Quantity of item 1 is: " + quantity1);
document.write("<br>Price of Item 2 is: " + price2);
document.write("<br>Quantity of item 2 is: " + quantity2);
document.write("<br>Shipping Charges: " + shipcharge);

cost1 = price1*quantity1;
cost2 = price2*quantity2;
tcost= cost1+cost2+shipcharge;
document.write("<br><br>Total cost of your order is: " + tcost);



// task 8
var tmarks = +prompt("Enter total marks");
var omarks = +prompt("Enter obtained marks");
var per = (omarks/tmarks) * 100;
document.write("Total Marks: " + tmarks);
document.write("<br>Obtained Marks: "+ omarks);
document.write("<br>Percentage: " + per);


//task 9
var total_usd = 10;
var total_riyal = 25;
var usd = 104.8;
var riyal = 28;

var pkr = (total_riyal*riyal) + (total_usd*usd);
document.write("Currency in PKR".fontsize(35) + "<br>")
document.write("Total PKR: " + pkr);


//task 10
var i = +prompt("Enter number");
i= ((i+5) * 10) / 2; 
document.write(i);


// task 11
var cyear = 2020;
var byear = +prompt("Enter birth year");
var age = cyear - byear;
document.write("Current year: " + cyear);
document.write("<br>Birth year: " + byear);
document.write("<br>Age: "+ age + " or " ,age-1);


//task 12
var radius = +prompt("Enter radius of a circle");
var circum = 2 * 3.142 * radius;
var area = 3.142 * radius *radius;

document.write("<br>Radius of a circle: " + radius);
document.write("<br>Circumference: " + circum);
document.write("<br>Area: " + area);


//task 13
var snack = prompt("Enter your favorite snack");
var age = +prompt("Enter your age");
var max_age = +prompt("Enter estimated maximum age");
var perDay = +prompt("Enter estimated snack per day");
var total = (max_age - age) * perDay;

document.write("You will need " + total + " " + snack +" to last you until the ripe old age of " + max_age);


// Chapter # 6-9


//task 1
var a = +prompt("Enter number");
document.write("Result: <br>");
document.write("The value of a is: "+a+ "<br>................................<br><br>");
document.write("The value of ++a is: " + ++a);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of a++ is: " + a++);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of --a is: " + --a);
document.write("<br>Now the value is: "+ a);
document.write("<br><br>The value of a-- is: " + a--);
document.write("<br>Now the value is: "+ a);


//task 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is " + a + " <br>b is "+ b + "<br>result is "+ result);

// OUTPUT a is 1     b is 0      result is 3

/*
--a;                        --> pre decrement at a
--a - --b;                  --> pre decrement at a SUBTRACTS pre decrement at b
--a - --b + ++b;            --> pre decrement at a SUBTRACTS pre decrement at b ADDS pre increment at b
--a - --b + ++b + b--;      --> pre decrement at a SUBTRACTS pre decrement at b ADDS pre increment at b ADDS post decrement at b
*/


//task 3
var name = prompt("Enter your Name");
alert("Welcome to our site "+ name);

//task 4
var table_no = +prompt("Enter table number");
var i;
if(table_no === 0){
    for(i=1; i<=10; i++){
        document.write("5" + " * " + i + " = " + 5*i + "<br>");
    }
}
else{
    for(i=1; i<=10; i++){
        document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
    }
}


//task 5
var sub1 = prompt("Enter name of subject 1");
var sub2 = prompt("Enter name of subject 2");
var sub3 = prompt("Enter name of subject 3");
var tmarks = 100;
var omarks1 = +prompt("Enter obtained marks of subject 1");
var omarks2 = +prompt("Enter obtained marks of subject 2");
var omarks3 = +prompt("Enter obtained marks of subject 3");
var omarks = omarks1 + omarks2 + omarks3;
var per1 = (omarks1 / tmarks) * 100;
var per2 = (omarks2 / tmarks) * 100;
var per3 = (omarks3 / tmarks) * 100;
var per = (omarks / 300) * 100;

 document.write("Subject Total Marks Obtained Marks Percentage");
 document.write("<br>" + sub1 + "&emsp;&emsp;&emsp;" + tmarks + "&emsp&emsp;&emsp;;" + omarks1 + "  &emsp &emsp;&emsp;;   " + per1 + "%");
 document.write("<br>" + sub2 + "   &emsp&emsp;&emsp;; " + tmarks + "  &emsp;&emsp;&emsp; " + omarks2 + " &emsp &emsp;&emsp;;    " + per2 + "%");
 document.write("<br>" + sub3 + "   &emsp&emsp;&emsp;; " + tmarks + " &emsp;&emsp;&emsp;  " + omarks3 + " &emsp &emsp;&emsp;;    " + per3 + "%");
 document.write("<br>&emsp; &emsp;&emsp; " + "300" + "&emsp;&emsp;&emsp;" + omarks + "&emsp;&emsp;&emsp;" + per);




// Chapter # 9-11

//task 1
var city = prompt("Enter city name");
if(city == "karachi"){
    alert("Welcome to City of Lights");
}
else{
    alert("Welcome to " + city);
}


//task2
var gender = prompt("Enter gender");
if(gender == "male"){
    alert("Good Morning Sir");
}
else if(gender == "female"){
    alert("Good Morning Ma'am");
}


//task 3
var color = prompt("Enter color of road traffic signal");
if(color == "red"){
    alert("Must Stop");
}
else if(color == "green"){
    alert("Move now");
}
else if(color== "yellow"){
    alert("Ready to move");
}


//task 4
var fuel = prompt("Enter fuel");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}


//task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}       //displayed

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}       //not displayed

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}       //2 alerts displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}       //displayed

if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }   //true displayed

if("car" < "cat"){
    alert("car is smaller than cat");
    }   //displayed


// task 6
var tmarks = +prompt("Enter total marks");
var omarks = +prompt("Enter obtained marks");
var per = (omarks/tmarks) * 100;
document.write("Total Marks: " + tmarks);
document.write("<br>Obtained Marks: "+ omarks);
document.write("<br>Percentage: " + per);

if(per >= 80){
    document.write("<br>Grade: A-One");
}
else if(per < 80 && per >=70){
    document.write("<br>Grade: A");
}
if(per >= 60 && per < 70){
    document.write("<br>Grade: B");
}
else if(per < 60){
    document.write("<br>Grade: Fail");
}


// //task 7
var num = 7;
var gnum = +prompt("Guess the number");
if(gnum === num){
    alert("“Bingo! Correct answer")
}
else if(gnum == 8){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong");
}


//task 8
var num = +prompt("Enter number");
if(num % 3 == 0){
    alert("Divisible by 3");
}
else{
    alert("not divisible");
}


// task 9
var num = prompt("Enter number");
if(num%2 == 0){
    alert("Even");
}
else{
    alert("odd");
}

//task 10
var temp = prompt("Enter temperature");
if(temp > 40){
    alert("“It is too hot outside.");
}
else if(temp > 30){
    alert("The Weather today is Normal.");
}
else if(temp > 20){
    alert("Today’s Weather is cool.");
}
else if(temp > 10){
    alert("OMG! Today’s weather is so Cool.");
}


//task 11
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter Second number");
var op = prompt("operation");
var r = 0;

if(op == '+'){
    r = num1 + num2;
    alert("Result is: " + r);
}
else if(op == '-'){
    r = num1 - num2;
    alert("Result is: " + r);
}
else if(op == '*'){
    r = num1 * num2;
    alert("Result is: " + r);
}
else if(op == '/'){
    r = num1 / num2;
    alert("Result is: " + r);
}



// Chapter # 12-13

//task 1
var v = prompt("Enter").charCodeAt;
if(v >=65 && v<=90){
    alert(" uppercase ");
}
else if(v >= 97 && v<= 122){
    alert("lowercase");
}
else{
    alert("number");
}


//task2
var num1 = prompt("Enter number 1");
var num2 = prompt("Enter number 2");
if(num1 > num2){
    alert("Number 1 is greater");
}
else if(num2 > num1){
    alert("number 2 is greater");
}
else{
    alert("Both are equal");
}


//task 3
var num = prompt("Enter number");
if(num > 0){
    alert("positive");
}
else if(num < 0){
    alert("negative");
}
else{
    alert("zero");
}


//task 4
var char = prompt("Enter character");
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
    alert("true");
}
else{
    alert("false");
}


//task 5
var pass = "pakistan";
var user = prompt("enter password");
if(user === null){
    alert("Enter password")
}
else if(pass === user){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("wrong password");
}

//task 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
alert(greeting);


//task 7
var time = prompt("Enter time");
if(time >= 0000 && time < 1200){
    alert("Good Morning!");
}
else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
}
else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
}
else if(time >= 2100 && time < 2359){
    alert("Good Night!");
}



//Chapter # 14-16

//task 1
var std_names = [];

//task 3
var str = ["arham " , "abeer", "ahmed"];

//task 4
var num = [1 , 2 , 3 , 4 , 5 , 6, 7, 8, 9, 10];

//task 5
Boolean = [true , false];


//task 6
var arr = ["arham" , 0123 , true];


//task 7
var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var i;
document.write("QUALIFICATIONS".fontsize(35) + "<br>");
for(i=0;i<edu.length;i++){
    document.write(edu[i] + "<br>");
}


//task 8
var sname = ["arham", "ali", "babar"];
var scr = [320 , 225 , 450];
var i;
for(i=0;i<sname.length;i++){
document.write("<br> Score of " + sname[i] + " is " + scr[i] +". Percentage: " + (scr[i]/500)*100);
}



//task 9



//task 10 
var score = [320 , 230 , 480 , 120];
document.write(score + "<br>");
score.sort();
document.write(score);


// task 11
var city = ["Karachi" , "Islamabad", "Lahore", "Peshawar", "Quetta"];
var scity = city.slice(2 , 4);

document.write(city + "<br>");
document.write(scity);

//task 12 
var arr = ["this" , "is" , "my" , "cat"];
document.write("array: " + arr + "<br>");
var i;
document.write("String: ");
for(i=0; i<arr.length;i++){
    document.write(arr[i] + " ");
}


//task 13
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: "+ arr);
var i;
for(i=0;i<arr.length;i++){
    document.write("<br> Out:<br>"+arr[i]);
}


//task 14
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices: "+ arr);
var i;
for(i=arr.length-1;i>=0;i--){
    document.write("<br> Out:<br>"+arr[i]);
}


//task 15
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
var i;
document.write("<select> ")
for(i=0;i<phone.length;i++){
document.write("<option> " + phone[i]);
}



// Chapter # 17-20


//task 1
var arr1 = [];
var arr2 = [];
var arr2 = [];

var multi_arr = [arr1, arr2, arr3];


//task 2
var arr1 = [0,1,2,3];
var arr2 = [1,0,1,2];
var arr2 = [2,1,0,1];

var multi_arr = [arr1, arr2, arr3];
document.write(multi_arr + "<br>");


//task 3 
var i;
for(i=1;i<=10;i++){
    document.write("<br>" + i);
}

//task 4
var table_no = prompt("Enter table number");
var length = prompt("Enter lenght");
document.write("Table of " + table_no + " of length " + length + "<br>");
var i;
for(i=1; i<=length; i++){
    document.write(table_no + " * " + i + " = " + table_no*i + "<br>");
}


//task 5
var fruit = ["apple", "banana" , "mango", "orange", "strawberry"];
var i;
for(i=0;i<fruit.length;i++){
    document.write("<br>Element at index " + i + " is " + fruit[i]);
}


//task 6
var counting = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];
var i;

document.write("Counting: ");
    document.write(counting);

document.write("<br>Reverse: ");
for(i=counting.length-1;i>=0;i--){
    document.write(counting[i]+", ");
}
document.write("<br>Even: ");
for(i=1; i<counting.length;i=i+2){ 
    document.write(counting[i] + ", ");
}
document.write("<br>Odd: ");
for(i=0; i<counting.length;i=i+2){
    document.write(counting[i] +", ");
}
document.write("<br>Series: ");
for(i=1; i<counting.length;i=i+2){
    document.write(counting[i] + "k ");
}



//task 7
var arr = ["cake", "pie", "cookie", "chips", "patties"];
var suser = prompt("Search");
var i;

for(i=0; i<arr.length;i++){
if(suser === arr[i]){
    alert(arr[i] + " is found");
    break;
    }
    
else{
    alert("sorry " + suser + " is not available");
    }
}


//task 8
var A = ["24", "53", "78", "91", "12"];
document.write("Array: " + A);
A.sort();
var i;
var l;
for(i=A.length-1; i<A.length;i++){
document.write("<br>Lagest is " + A[i]);
}


//task 9
var A = ["24", "53", "78", "91", "12"];
document.write("Array: " + A);
A.sort();
var i;
var l;
for(i=0; i==0;i++){
document.write("<br>Smallest is " + A[i]);
}


//task 10
var i;
var value;
for(i=1; i<100;i++){
    value = 5*i;
    document.write(value + "<br>");
if(value === 100){
    break;
}
}