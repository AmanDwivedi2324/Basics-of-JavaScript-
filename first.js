

// Combine script file with html by writing <script src="first.js"></script>  just above the end of body tag
                                                    
                                                   // Basics of JavaScript

/*

--> JS is dynamically typed language means we don't have to write the data type of variable with declaration

--> console.log() => Used to print(log) a message to the console. 

--> Variables => Variables are containers in JS for data 

--> Variables rules => 
    -- Variable names are case sensitive means 'a' and 'A' is different 
    -- Only letters , digits , underscore(_) and $ are allowed (not even space)
    -- Only a letter, underscore or $ should be first character 
    -- Reserved words cannot be variable names 

--> let, const, var =>
    -- var => Variable can be re-declared and updated. A global scope variable.
    -- let => Variable cannot be re-declared but can be updated. A block scope variable.
    -- const => Variable cannot be re-declared or updated. A block scope variable. 

--> Data types => 
       Primitive                    Non-Primitive
        -Number                         -Arrays
        -String                         -Objects
        -Boolean                        -Functions
        -undefined 
        -null
        -BigInt
        -Symbol

--> Comments in JS => Part of code which is not executed. 

Example => 

    //This is a single line comment 

    /*This is an example 
    of multiple 
    line comment
    */


                                                     //  Practice set 1

              //Ques-1 --> Create an object with name product 

/*
let product = {
    name: "Parker Jotter Standard CT Ball Pen",
    price:270,
    DealOfTheDay : true,
    Rating: 5,
    isOffer: true
};
*/

// console.log(product);

              //Ques-2 --> Create an object with name profile

/*
let profile = {
    name: "Aman Dwivedi",
    isFollow: false,
    followers: 103,
    following:4,
    bio: "Pursuing B.Tech from AKTU"
};
*/

// console.log(profile);


//prompt is used for taking input from user 



                                                 // Operators and conditional statements

                                                           //Operators

/*

--> Operators in JS => Used to perform some operations on data 

--> Arithmetic operators => +, -, *, /, modulus(%), exponential (**), increment , decrement

--> Assignment operators => =, +=, -=, *=, %=, **= 

--> Comparison operators => == (equal to ), === (equal to and type), != (not equal to), !==, >, >=, <, <= 

--> Logical operators => Logical AND &&
                         Logical OR ||
                         Logical NOT !


                                                    //Conditional Statements

--> To implement some conditions in the code 

--> if statement => 

        let color;
        if(mode ==== "dark-mode"){
            color = "black";
        }

--> if-else statement =>

        let color;
        if(node === "dark-mode"){
            color = "black";
        }else{
            color = "white";
        }

--> else-if statement =>

        if(age<18){
            console.log("Junior");
        }else if(age>60){
            console.log("Senior");
        }else{
            console.log("Middle");
        }

--> Ternary operators => 

        condition?true output : false output 

Example =>
       
        age>18?"adult" : "not adult";

*/


                                                             // Practice set 2


                    // Ques-1 --> Get user to input a number using prompt("Enter a number: ").Check if the number is a multiple of 5 or not


/*
let num = prompt("Enter a number : ");
if(num%5===0){
    console.log(`Yes, the ${num} is a multiple of 5`);
}
else{
    console.log(`No, the ${num} is not a multiple of 5`);
}
    */


                    //Ques 2 --> Write a code which can give grades to students according to their scores


/*
let score = prompt("Enter the score : ");
if(score >=90 && score<=100){
    console.log('A');
}else if(score>=70 && score<=89){
    console.log('B');
}else if(score>=60 && score<=69){
    console.log('C');
}else if(score>=50 && score<=59){
    console.log('D');
}else if(score>=0 && score<=49){
    console.log('E');
}
    */

                                                                         

                                                             // Loops and Strings


/*

--> Loops in JS => Loops are used to execute a piece of code again and again 

--> for loop => 

        for(let i=1;i<=5;i++){
            console.log("Hii");
        }
    The above code prints Hii for 5 times 

--> infinite loop => A loop that never ends. 

--> while loop => 

        while(condition){
            //do some work
        }

--> do-while loop =>

        do{
            //do some work
        }while(condition);

--> for-of loop => for traversing over strings 

        for(let val of str){
            //do some work
        }

--> for-in loop => for traversing over objects 

        for(let key in obj){
            //do some work 
        }

*/



                                                                //Practice set 3

                    //Ques1 --> Print all even numbers from 0 to 100


/*
for(let i=0;i<=100;i++){
    if(i%2===0){
        console.log(i);
    }
}
    */


                    //Ques2 -->  Create a game where you start any random number. Ask the user to keep guessing the game number until the user enters correct number


/*
let random = prompt("Enter the random number : ");

let guessNum = prompt("Guess the number : ");

    while(guessNum!=random){
        guessNum = prompt("Sorry you guessed the wrong number, please try again..");
    }
    console.log("Hurray, you guessed the right number..");
*/



                                                              // Strings in JS
 
/*

--> Strings in JS => String is a sequence of characters used to represent a text. 

--> Create string => let str = "Aman Dwivedi";

--> string length => str.length

--> string indices => str[0] , str[1] , str[2], ....

--> Template literals in JS => A way to have embedded expressions in strings. 
Example =>              `This is a template literal`

--> String interpolation => To create strings by doing substitution of placeholders.

Example => 

    `string text ${expression} string text`

    simply interpolation means embedding variable in string within ``.. 


--> String methods in JS => 

        1) => str.toUpperCase() 
        2) => str.toLowerCase()
        3) => str.trim()                            // remove whitespaces 
        4) => str.slice(startIdx,endIdx)            // return a part of string
        5) => str.concat(str2)                      // joins str2 with str
        6) => str.replace(searchVal,newVal)
        7) => str.charAt(idx)    


*/



                    //Ques 3 --> Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.


/*
let name = prompt("Enter your full name : ");
let userName = `@${name}${name.length}`;
console.log(userName)
;
*/



                                                           //  Arrays in JS


/*

--> Arrays => Collection of items 

--> Create an array => 

        let num = [1,2,3,4,5,6];
        let name = ["aman" , "nikhil" , "yash" , "shreyansh"];

--> Array indices => Array is 0-based indices means indexing start from 0
    
        arr[0],arr[1],arr[2]...

--> Looping over an array =>

        let arr = [1,2,3,4,5,6];

        //first way = for loop
        for(let i=0;i<arr.length;i++){
            console.log(arr[i]);
        }

        //second way = forEach 
        arr.forEach(function(val){
            console.log(val);
        })

--> To check whether the created array is array or not 

        Array.isArray(arr);             (if array then true otherwise false)


*/

                                                             //Practice set 4


                    // Ques 1 --> for a given array with marks of students --> [85,97,44,37,76,60]. Find the average marks of the entire class

/*
let arr = [85,97,44,37,60];
let sum = 0;
let average;

arr.forEach(function(val){
    sum += val;
})
average = sum/arr.length;
console.log(average);
*/


                    // Ques 2 --> For a given array with prices of 5 items --> [250,645,300,900,50] . All items have an offer of 10% off on them. Change the array to store the final price after applying the offer

/*
let arr = [250,645,300,900,50];

for(let i=0;i<arr.length;i++){
    arr[i] -= arr[i]/10; 
}
console.log(arr);
*/


/*

--> Array Methods =>

    1) - push() => add to end 
    2) - pop() => delete from end 
    3) - toString() => converts array to string 
    4) - concat() => joins multiple arrays and return result 
    5) - unshift() => add to start 
    6) - shift() => delete from start and return 
    7) - slice() => return a piece of the array 
                    slice(startIdx,endInd)            //endInd is not inclusive
    8) - splice() => change original array(add, remove, replace)
                    splice(startIdx,delCount,newElement)

*/



                    // Ques 3 --> Create an array to store companies --> "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"


/*
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

//Remove the first company from the array

companies.shift();
console.log(companies);

//Remove uber and add ola in its place 

companies.splice(1,1,"Ola");
console.log(companies);

//Add amazon at the end

companies.push("Amazon");
console.log(companies);
*/



                                                            // Functions in JS



/*

        Function is a block of code that performs a specific task , can be invoked whenever needed.

--> Function definition =>  

        function functionName(){
            //do some work
        }

--> Function call => 

        functionName();

--> Function with parameters =>

        function functionName(param1,param2,....){
            //do some work
        }

*/


                                                          // Practice set 5



                        // Ques 1 --> Create a function using the "function" keyword that takes a String as an argument and returns the number of vowels in the string


/*
let String = prompt("Enter the string : ");

function abcd(str){
    let num=0;
    for(let i of str){
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U'){
            num++;
        }
    }return num;
}
console.log(abcd(String));
*/


/*

--> Arrow functions => Compact way of writing a function.

const functionName = (param1 , param2 ,...) => {
    //do some work
}

Example =>

let arr = [1,2,3,4,5];
const sum = (a,b) => {
    return a+b;
}

let result = sum(5,6);
console.log(result);

Output = 11

*/



                        // Ques 2 --> Create an arrow function to perform the same task


/*
let string = prompt("Enter the string : ");

const ans = (str) => {
    let num = 0;
    for(let i of str){
        if(i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u' || i === 'A' || i === 'E' || i === 'I' || i === 'O' || i === 'U'){
            num++;
        }
    }
    return num;
}

console.log(ans(string));
*/



/*

--> forEach loop => Array.forEach(callback function)   

--> Callback function => Headers, it is a function to execute for each element in the array . A callback function passed as an argument to another function

Example -> Traversing

let arr = [1,2,3,4,5];
arr.forEach((val) => {
    console.log(val);
})

Output => 
    1
    2
    3
    4
    5

/*


                          // Ques 3 --> For a given array of numbers, print the square of each value using the forEach Loop

/*
let arr = [1,2,3,4,5];

//first way 

arr.forEach(function(val){
   console.log(val**2);
})
console.log(arr);

//second way

arr.forEach((val) => {
      console.log(val**2);
});
*/



// SOME IMPORTANT METHODS OF ARRAY 

/*

1) Map --> Create a new array with the results of some operation. The value its callback returns are used to form a new array. 
            arr.map(callbackFnc(value,index,array))

Example ->

let arr = [1,2,3,4,5];
let newArr = arr.map((val) => {
    return val*2;
})

console.log(newArr);

Output - [2, 4, 6, 8, 10]

*/


/*

2) filter --> Create a new array of elements that gives true for a condition/filter.Create

Example -> All even numbers 

let arr = [1,2,3,4,5];
let newArr = arr.filter((val) => {
    return val%2===0
})
console.log(newArr);

Output => [2, 4]

*/


/*

3) Reduce --> Performs some operations and reduces the array to a single value. It returns that single value.

Example -> 

let arr = [1,2,3,4,5];
let sum = arr.reduce((prev,curr) => {
    return prev+curr;                         
})
console.log(sum);


Output => 15 

step 1 = prev = 1 and curr = 2 , then prev+curr => 1+2 = 3
step 2 = prev = 3 and curr = 3 , then prev+curr => 3+3 = 6
step 3 = prev = 6 and curr = 4 , then prev+curr => 6+4 = 10
step 4 = prev = 10 and curr = 5 , then prev+curr => 10+5 = 15

*/


                           // Ques 4 --> We are given an array of marks of students. Filter out of the marks of students that scored 90 or above.


/*
let arr = [45,87,95,35,99,98];

const ans = arr.filter((val) => {
   return val>90;
})
console.log(ans);
*/




                           // Ques 5 --> Take a number n as input from user. Create an array of numbers from 1 to n. Use the reduce method to calculate sum of all numbers in the array. Use the reduce method to calculate the product of all numbers in the array 


/*
let num = prompt("Enter the number");
let arr = [];

for(let i=1;i<=num;i++){
    arr[i-1] = i;
}
//sum

const sum = arr.reduce((prev , curr) => {
    return prev + curr;
})

console.log(sum);

const fact = arr.reduce((prev,curr) =>{
    return prev*curr;
})

console.log(fact);
*/



