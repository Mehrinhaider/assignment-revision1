//Q1
//Miles-to-kilometers converter(operators):
//.create a variable named miles and assign a numeric value representing
//distance in miles.
//.calculate the equalent distance in kilometers using the conversion
//factor 1 miles = 1.60934.
//.store the converteddistance in kilometersin a variable named kilometers.
//.use console.com to print a message in the following formate:
//the distance of 130 kms is equal to209.2142 miles.



let miles :number= 100.
let distanceInKilometers= 100 * 1.60934
let kilometers :number=160.934
let kilometers1:number=130
let miles1=209.2142

console.log(`the distance of ${kilometers1} is equal to ${miles1}`) 


/*//Q2
//Evaluating a number game;
//.prompt to user to enter a number.
//.compre the entered number with a dynamic number value.
//.output the result indicating whether the entered numberis greater than ,equal to, or less than 
//the dynamic value.*/

  const firstName: any =

await inquirer.prompt({

    name: "firstName",
    type: "input",
    message: "Enter first number",
})
let user: any=("Enter a number:");

let UserNumber = parseFloat(user);

let dynamicNumber=34;

if  (UserNumber > dynamicNumber) {
    console.log("the enter number is greater than the dynamic number value");


} else if (UserNumber < dynamicNumber) {


} else  {
    console.log("the enter number is greater than the dynamic number value" )

}

//Q3
//friend checker game
//.prompt the user to enter a name'
//.use the switch statement to check if the entered name is a known friend
//.output a confirmation message if the name is known , otherwise output adefault 
//response*/

 import inquirer from "inquirer";

let {firstName:any} = await inquirer.prompt({

    name: "firstName",
    type: "input",
    message:"Enter first name",
})

//use switch statement 
 switch (firstName) {
    case "mehrin":
        console.log("mehrin is a known friend, hi mehrin!");
        break;
    case "nimra":
        console.log("nimra is a known friend, hi mehrin!"); 
        break;
    case "mahe":
        console.log("mahe is a known friend, hi mehrin!"); 
        break; 
    case "saafia":  
        console.log("mahe is a known friend, hi mehrin!");
        break;

    default:
        console.log("sorry, i dont recognize ur name");



 } 

 //Q4 
 //.setup two different variable with different values
 //.call a functionwith these variables as argument and output the result using console1.
 //create a second call to the function with two more numbers as arguments.
 //define a function that takes two numberas arguments and returns their sum .

 function addNumbers (a:number, b:number) {
    return a+b;

 }

let num1= 5;
let num2= 3;
console.log(`the sum of ${num1+num2} is: ${addNumbers(num1,num2)}`);

let num3= 10;
let num4= 6;
console.log(`the sum of ${num3+num4} is: ${addNumbers(num3,num4)}`);

function addNumber(num1:number,num2:number) : number {
    throw new Error("function not implemented.");

}
    
//Q5
//calculator project using function .
//.set up variable to hold an operator (+ or -)/
//.create a function that takes two number and as parameter operator perform
//the corresponding operation ,and return the result.
//.call the function with the variable and operater ,and out put the result using console.
//.up date the operator value  and call the function againwith the update arguments

function calculate(num1:number , num2:number , operator :string) {
    switch (operator){
 case "+":
      return num1 + num2;

 case "-":
    return num1 - num2; 

    default:
        return "invalid operator";
    
}

}
let operand1=10;
let operand2=6;

let operation= "-";
console.log(`${operand1} ${operation} ${operand2} =${calculate (operand1,operand2, operation)}`);

operation="+";

console.log(`${operand1} ${operation} ${operand2} =${calculate (operand1,operand2, operation)}`);


//Q6

//Anonymous function.
//.assign a functionexpresion to a variable ,with one parameter that output provide
//argument to the console .
//.pass an argument into the function.
//create the same function as a normal function declaration

let printArgument = function(arg:string){
    console.log("arg");

};

printArgument("hello, panda!");//this will output 'hello world'to the console.

function printArgument2 (arg:string) {
    console.log("arg");
}



















