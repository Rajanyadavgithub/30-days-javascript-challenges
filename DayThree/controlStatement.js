// control statement practice

// Activity 01 if else statements

//task 01 check number positive, negative or zero

let num =-25;  //check alos positive and zero value
if( num > 0){
    console.log("Number is Positive !");
}else if(num<0){
    console.log("Number is Negative !");
}else{
    console.log("Number is Zero !");
}

// task 02 (person is eligible or not for vote)

let age = 15;
if ( age >= 18){
    console.log("person is eligible to vote!");
}else{
    console.log("person is not eligible to vote!");
}

// Activity 02 Nested if else statement

// task 03 (largest of three numbers)

let x = 15;
let y = 50;
let z = 45;
if ( x>y && x>z){
    console.log("the largest number of :" + x );
}else if( y>x && y>z){
    console.log("the largest number of :" + y);
}else {
    console.log("the largest number of :" + z);
} 

// Activity 03 switch case 

// task 04 determine the of the weak based on a number(1-7)

const number = 10;
switch ( number){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Sunday");
        break;    
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("default case");
}

// task 05 (assign a gread based on a score)

const score = 52;
switch (true){

    // if score is 90 or greater
    case score >= 90:
        console.log("Grade A");
        break;

    // if score is 80 or greater
    case score >=80:
        console.log("Grade B");
        break;
    
    // if score is 70 or greater
    case score >= 70:
        console.log(" Grade C");
        break;

    // if score is 60 or greater
    case score >=60:
        console.log("Grade D");
        break;

    //if score is 50 or greater
    case score >=50:
        console.log("Grade E");
        break;

    // if score is 49 or below is falling
    default:
        console.log("Grade F");
        break;

}

// Activity 04 conditional(turnary) operator

// task 06 (check even or odd with turnary operator)

const num1 = 258;
(num1%2==0)?console.log("number is even!"):console.log("number is odd!");

// Activity 05 Combining condition

// task 07 check leap year with multiple conditions

const year = 2028;
if(year%4===0){
    if(year%100===0){
        if(year%400===0){
            console.log("this is a leap year");
        }else{
            console.log("this is not a leap year");
        }
    }else{
        console.log("this is a leap year");
    }
}else{
    console.log("Not a leap year.!");
}