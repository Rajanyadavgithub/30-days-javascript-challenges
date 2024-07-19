// Activity 01 Arrays creation and access

// task 01 (creat an array of numbers 1 to 5 and log the array to the console)
const arr = [1,2,3,4,5]
console.log(arr);

// task 02 (access the first and last element of the array and log to them)
console.log("first element of the array: "+arr[0]);
console.log("last element of the array: "+arr[4]);

// Activity 02  Arrays methods basic

// task 03 ( use push method to add a new number to the end of the array and log the updated array)
const arr1 = [0,1,2,3,4,5];
console.log(arr1);
arr1.push(6);
console.log("updated array: "+ arr1);

// task 04 ( use the pop method to remove the last element of the array and log the updated array)
const arr2 = [10,20,30,40,50];
console.log(arr2);
arr2.pop();
console.log("updated array: "+arr2);

// task 05 ( use shift method to remove the first element of tha array and log the updated array)
const myarr = [9,8,7,6,5,4,3,2,1,0];
console.log(myarr);
myarr.shift();
console.log("updated array: "+myarr);

// task 06 ( use unshift method to add a new number to the beginning of the array and log the updated array )
const myarr1 = [0,1,2,3,4,5,6,7,8];
console.log(myarr1);
myarr1.unshift(9);
console.log("updated array: "+myarr1);

// Activity 03 Array method intermediat

// task 07 ( use the map method to creat a new array where each number is double and log the new array)
const number = [1,2,3,4,5,6,7,8,9];
const newNumber = number.map((num)=>num*2);
console.log(newNumber);

// task 08 ( use the filter method to create a new array only with even numbers and log the new array)
const myarr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(myarr2.filter((num)=>num%2==0));

// task 09 ( use the reduce method to calculate the sum of all number in the array and log the result)
const mynum = [1,2,3];
const mysum = mynum.reduce((acc,currval)=>{
    //console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval;
},0)
console.log(mysum);

// Activity 04 Array iteration

// task 10 ( use for loop to iterate over the array and log each element to the consol)
const arr4 = [1,2,3,4,5];
for(let i = 0; i<=arr4.length; i++){
    console.log(arr4[i]);
}

// task 11 ( use the for each method to iterate over the array and log each element to the console)
const arr3 = [1,2,3,4,5];
arr3.forEach((val)=>console.log(val));

// Activity 05 multidimentional array

// task 12 ( create a two dimentional array (matrix) log the entire array to the console )

let salary = [
    ["ABC", 24, 18000],
    ["EFG", 30, 30000],
    ["IJK", 28, 41000],
    ["EFG", 31, 28000],
 ];
 console.log(salary);

 // task 13 (access and log a specific element to the two-dimensional array)

 console.log(salary[1][0]);

