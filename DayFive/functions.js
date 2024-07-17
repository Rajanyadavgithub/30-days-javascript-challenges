// Activity 01 functiion declaration

// task 01 (write a funtion check number is even or odd)
// function evenOdd(num)
// {
//     if(num%2==0){
//         console.log(`${num} is a even number`);
//     }else{
//         console.log(`${num} is a odd number`);

//     }
// }
// evenOdd(20);

// task 02 (write a function to calculate a square of a numbers and return the result)

// function calculateSquare(n){
//     return n*n;
// }
// const square = calculateSquare(10);
// console.log(square);

// Activity function expression

// task 03 (write a function expression to fine maximum of two numbers)
// const maximumOfTwo = function (n1,n2){
//     if (n1>n2){
//         return n1;
//     }else{
//         return n2;
//     }
// }
// console.log(maximumOfTwo(25,35));

// task 04 (concatinate two strings write a function expression)

// const concatinateTwoStrings = function (str, str1){
//     return str +" "+ str1;
// }
// console.log(concatinateTwoStrings("Rajan", "Yadav"));

// Activity 03  Arrow function

// task 05 (write an arrow function to calculate the sum of two numbers)
// const sumTwoNumber = (num1, num2)=>{
//     return num1+num2;
// } 
// console.log(sumTwoNumber(45,85));

// task 06 (write an arrow function check a strings contain a specific charector)

// const findSpecificCharector = (str)=> {
//     // if(str.includes("t")){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
//     return str.includes("t");
    
// }
// console.log(findSpecificCharector("string"));

// Activity 04 function parameters and default values

// task 07 (write a function takes two parameters and return their product . provid a default value for a sencond parameter)
// const product = (num1, num2=10) =>{
//     return num1*num2;
// }
// console.log(product(100));

// task 08  (write a function takes a person's name and age and return a greeting massege. Provide a default value for age.)

// const greet = (name, age= 24) =>{
//     console.log(`Hello ${name} good morning!`);
// }
// greet("Rajan")

// Activity 05 high order function

// task 09 (write a high order function that takes a function and a number and call the function that many times.)
// function repeatFunction(fn, times) {
//     for (let i = 0; i < times; i++) {
//         fn();
//     }
// }

// const sayHello = () => {
//     console.log("Hello!");
// };
// repeatFunction(sayHello,10);

// task 10  ( write a high order function that takes two functions and a value aplies the first function to the value and applies the second function to the results)
function applyFunctions(fn1, fn2, value){
    const result = fn1(value);
    const result1 = fn2(result);
    console.log(result1);
}

const add = (x)=> x+5;
const mul = (x)=> x*50;

applyFunctions(add, mul, 5);