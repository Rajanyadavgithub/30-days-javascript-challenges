//  ######### Day 02 Operators ###############

// Activity 01 arithmetic operations

//Task 01

let num1 = 58;
let num2 = 5;
console.log(num1+num2); //add

//task 02 (-)
console.log(num1-num2); //subtraction

//task 03 (*)
console.log(num1*num2); //multiply

//task 04 (/)
console.log(num1/num2); //divide

// task 05

let num3 = 248;
let num4 = 12;
console.log(num3%num4);   //remainder

// Activity 02 assignment operators

//Task 06

let q = 52;
let r = 23;
console.log( a+=b); 

//task 07

let i = 50;
let j = 20;
console.log(x-=y);

// // Activity 03 Comparision operators

// //task 08  (>,<)

let n1 = 25;
let n2 = 56;
console.log(n1>n2);  //false
console.log(n1<n2);  //true

//task 09  (>=,<=)

let n3 = 65;
let n4 = 65;
console.log(n3>=n4); //true
console.log(n3<=n4); //true

//task 10 (==,===)

let n5 = 10;
let n6 = 10;
console.log(n5==n6);  //true
console.log(n5===n6); //true  (if its one variable is string then it console the output is false) // strictly check the data type also.

// Activity 04 logical operators

//task 11 (&&)

const a= 5;
const b = -4;
console.log( a>0 && b>0 );  //false
console.log( a>0 && b<0 );  //true

//task 12 (||)
console.log( a>0 || b<0 );  // true

//task 13 (!)

const x = true ;
const y = false;
console.log("Not of x " , !x);  //flase
console.log("Not of y ", !y);   //true

// Activity 05 

//task 14 turnary operator
let number = -52
let result = (number>=0)? "Positive":"Negative"
console.log(result);

