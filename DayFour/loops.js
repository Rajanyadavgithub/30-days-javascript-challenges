// Activity 01 For loop

// task 01 print number 1-10 using for loop
 
for(let num=1 ; num<=10; num++)
{
    console.log(num);
}

// task 02 table of 5 using for loop

let i= 5;
console.log(`table of ${i}`);
for( let j= 1; j<=10; j++){
    console.log(i+" * "+j+ " = "+i*j);
}

// Activity 02 while loop

// task 03 sum of 1-10 with while loop

let sum= 0;
let n = 1
while(n<=10){
    
    sum=sum+n;
    n++;
}
console.log(sum);

// task 04 (print numbers 10-1 using a while loop)

let n1= 10;
while(n1>=1){   
    console.log(n1);  
    n1--;  
}

//Activity 03 Do while loop

// task 05 (print numbers 1-5 using do - while loop)

let numbers = 1;
do{
    console.log(numbers);
    numbers++;
}
while(numbers<=5);

// task 06 (calculate a factorial using do while loop)


let number= 1;
let fact = 1;
let num2 = 10;
do{
    fact = fact*number;
    number++;
}
while(number<=num2);
console.log(fact);

// Activity 04 Nested loops

// task 07 (print pattern using nested loops:)
const n2 = 5;
for (let i=0; i<n2; i++){
    let pattern = " ";
    for (let j=0; j<=i; j++){
        pattern += "*";
    }
    console.log(pattern);
}


// Activity 05 (loop control statements)

// task 08  (print 1-10  but skip the number 5 using continue statement)

for (let i=1; i<=10; i++){
    if (i==5) continue;
    console.log(i);
}

// task 09 (print 1-10 but stop the loop when the number is 7 using break statement)

for (let i=1; i<=10; i++){
    if (i==7) break;
    console.log(i);
}