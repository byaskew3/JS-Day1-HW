// comments in Javascript are donw with //

/*
    Multiline Comment in JavaScript
    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/

// the print() statement  in javascript is
console.log('Hello, Foxes!');

// function calling syntax in javascript is the same as python
// <class/instance name>.<function_name>(<inputs>);
// <function_name>(<inputs>);

// one thing you'll notice as im writing javascript is semicolons
// major difference between Python and JavaSCript -> Python is an interpreted langurage
// meaning that the computer does all of the work at runtime
// JavaScript is a compliled language (primarily)
// meaing that the computer can do some work before runtime
// big consequence: whitespace does not matter
// hitting enter has no real effect, tabs and spaces have no real effect
// most things are controlled through special characters
// where newlines are controlled with newlines in pythong (you just hit enter)
// newlines in javascritp are controlled by semicolons;
// note whilte you do not always need a semicolon - it is considered good practice to end your lines with semicolons
// sometimes you will need them, sometimes you wont - but you wont get an error by using one where you dont need it

// where code blocks are controlled with indentation in python (hitting tab)
// code blocks in JS are controlled with {} curly brackets

/* 
JavaScript vs Java
They have absolutely nothing in common other than some suface syntactical similarities!
JavaScript was named similary as a marking ploy. It was the worst idea ever becasue the two languages have nothing to do with each other.
Especially when interviewing, make sure you don't call JavaScript just Java
"JavaScript is to Java like Ham is to Hamster. They start the same but have nothing else in common." - Brain Stanton
*/

// variable declaration
// requires a keyword! var
// =

// String
var animal_name = 'Fennec Fox';

// display that value in the terminal
console.log(animal_name);

// Numeric (encompasses both Integer and Float, but the two are still seperate)
// you should still think of integers and float as different, but in JS they both belong to the Numeric Datatype
var x = 4;
console.log(typeof(x));
console.log(x);

var y = 4.0;
console.log(typeof(y));
console.log(y);

// Booleans - same as python just lowercase
var bool = false;
console.log(typeof(bool));
console.log(bool);

// arrays - same as python lists
var some_array = [1,2,3,4];
console.log(typeof(some_array));
console.log(some_array);

// simple objects (same as python dictionaries)
var some_object = {'one': 1, 'two': 2, 'three': 3};
console.log(typeof(some_object));
console.log(some_object);

/* Let's look at another JS vs Python difference: VARIABLE HOISTING
An advantage of a compiled language is that step of computer work before runtime
Because of this, some things can be automattically moved around
When we define a variable in JavaScript (or just declare one)
An invisible declaration of that variable is 'hoisted' or pulled up to the top of our code
This can help avoid varaible undefined errors

part 2: variable declaration vs. variable definition:
variable declaration is telling the computer taht you are going to create a variable of a certain name - it is a step of reversing the name and memory space for that variable
variable definition is actually giving a declared variable a value
python does not allow for declaration without definition - essentially declaration isn't really a thing in python
*/
// declaration without definition:
var declared_not_defined;
console.log(declared_not_defined);

// but what about a defined variable?
// hoisting does not hoist the variable definition -> it just hoists the declaration
console.log(hoisting_example);
// after i log, i declare and define
var hoisting_example = 'hmm, bizarre';
console.log(hoisting_example);

var y2 = -5;
if (y2 > 0){
    var x1 = y+1;
}
if (x1 == undefined){
    console.log('no error' ,x1);
}

/*
Basic Math Operations
*/
console.log('\n', 'Basic Math Operations:', '\n');

// Addition
var sum = 7 + 8;
console.log(sum);

// Subtraction
var subtracted = 8-7;
console.log(subtracted);

// Multiplication
var multiply = 5 * 5;
console.log(multiply);

// Exponents
var squared = 8**subtracted;
console.log(squared);

// A couple others....
// Floats/decimals to integers...

// Floor - Math.floor()
var find_floor = Math.floor(25.8);
console.log(find_floor);

// Round - Math.round()
var rounded = Math.round(25.5);
console.log(rounded);

// Ceiling - Math.ceil()
var find_ceiling = Math.ceil(20.1);
console.log(find_ceiling);

// Mind bender one: for fun :)
var bizarre_JS = y + '4';
// if we add a string to a number -> the number is automattically converted to a string and we do string concatenation instead of addition
// why? because the people who wrote javascript wanted dynamic data types which leads to some confusing situations
console.log(typeof(y));
console.log(typeof(bizarre_JS));
console.log(bizarre_JS);

// cont. - we can fix this through typecasting
var bizarre_2 = y + parseFloat('4.13');
// undefined + 0 = NaN
// undefined + empty array = undefined
// 0 + empty array = 0
// why? because dynamic typing makes it easy to make mistakes
// BE CAREFUL ABOUT YOUR DATATYPES :)
// unlike python, if your datatypes don't match you will not get an error
// you'll just get weird behavior
var what = 0 + [];
console.log(what);
console.log(bizarre_2);

// Fixing some of the over-flexibility in JavaScript with ES6
// What is ES6? ECMAScript 6 is a standardization of JavaScript that adds additional features and rules

// replacing the var keyword with let and const
// let is a keyword that you only use with variable declaration
// a variable declared with let can be redefined but not redeclared
// this will be the most commonly used keyword with our variables
let new_var = 'Hello'; // variable declared and defined with let

// we cannot redeclare a varraibel with let:
new_var = 'Hello redefined!';
console.log(new_var);

// const is how we create an immutable variable - once a const variable is declared and defined, it cannot be redeclared or redfined
const immutable_var = 'Cant change me!';
console.log(immutable_var);

// as is the case with most things in JavaScript there are a lot of ways to write functions
// we'll be talking through them all right, but would recommend just getting comfortbale using one or two of them
// I would probably suggest ES6 Arrow Functions as the place to start

// Regular named function: most similar to a python function
function addNums(){
    let num1 = 4.13;
    let num2 = 20;
    return num1 + num2;
}

// function call is the exact same as python - note the outer console.log() isn't required unless we want to view to returned value in our terminal
console.log(addNums());

// named function that accepts parameters
function addNums(num1, num2){
    return num1 + num2;
}

console.log(addNums(20, 3.5));

// ES6+ arrow function => the most modern approach to writing a function in JS
// arrow function definition syntax:
// let <function_name> = (<inputs>) => { <function_code> }
let multiplyingNums = () => {
    let num1 = 4;
    let num2 = 20.14;
    return num1*num2;
}
console.log(multiplyingNums()); // function call for an arrow function is the exact same

let multiNums = (num1, num2) => {
    return num1*num2;
}
console.log(multiNums(4, 20.14));

// where arrow functions can differ: if and only if you are passing ONE parameter, parenthesis around that input parameter are not required:
let squareNum = num1 => {
    return num1**2;
}
console.log(squareNum(20.14));

// JavaScript Closure
// Self-Invoking Function
// this is a function that isn't given a name
// it only runs once and calls itself as soon as its written
// you can kind of think of a closure as sharing some similarities to python's lambda functiions
// arrow function closure -> note that the outer console.log is not needed, it's just there so we can see the result of the closure
console.log((name => {return 'Hello, ${name}!'})('Shoha'));

/*
JS Conditionals and Control Flow
*/

console.log('\n', '===== Control Flow:', '\n');

let determineAge = age => {
    // if the person is younger than 18, return child
    // if between 18 and 65, return adult
    // if older than 65, return senior
    if (age < 18) {
        return 'Child'
    } else if (age >= 18 && age < 65) {
        return 'Adult'
    } else {
        return 'Senior'
    }
}

console.log(determineAge(44));

// some operators are different in JS - see
// https://www.w3schools.com/js/js_operators.asp

// JavaScript ternary operator
// Let's us write shorthand conditionals 
// (<condition>) ? <value> : (<condition>) ? value : value
let detAge = age => {
    return (age < 18) ? 'Child' : (age >= 18 && age < 65) ? 'Adult' : 'Senior'
}
console.log(detAge(2));

// Looping!

console.log('\n', '===== LOOPING!', '\n');

// just like most other things in JS, we have a lot of ways to loop
// I would recommend getting comfortable with the normal for loop first
// the normal for loop in JS is most similar to the index loop in python
// for i in range(len(iterable)):
// becomes
// for(let i = 0; i < iterable.length; i++){}
// for(<counter>; <condition>; <step>){}

// example: loop through numbers 0-20
// i = i+1 same as i+=1 same as i++
for(let i=0; i <= 20; i++){
    // console.log(i);
}

// while loop
// actually almost the exact same as python
let i = 0; // counter
while (i<0){
    console.log(i);
    i++;
}

// what about a different kind of while loop?
// of course that's a thing :)
// do-while
let n = 0;
do {
    console.log('do-while loop', n);
    n++;
} while (n<0);

// looks the same, right?
// the differences comes in to the minimum number of times that process runs
// a do-while loop will always run its code AT LEAST ONCE even if the condition is never met

/* Next step of looping:
Looping with ARRAYS :)
*/
console.log('\n', '===== LOOPING ARRAYS!', '\n');

// declaring and defining an array
let animals = ['Sea Lion', 'Sea Turtle', 'Grey Wolf', 'Polar Bear', 'Squirrel', 'Warthog']
console.log(animals);
// just like python, indexing into an array is the same
// arrays are set up pretty much just like lists
console.log(animals[4]); //squirrel

//  Method #1 - normal for loop
// animals.length in JS is the same as len(animals) in python
for(let i = 0; i < animals.length; i++){
    console.log(`Array value at index ${i}: ${animals[i]}`)
}

// Method #2 - .forEach()
// not dissimilar to a for-in loop in python
// <array name>.forEach(<callback fn>)

animals.forEach(element => console.log(element));

let animalLogger = animal => { console.log(`Array value: ${animal}`)}

animals.forEach(animalLogger); // similar to python's map

/* Javascript Array Methods!
.map(), .filter(), .reduce(), .toString(), and more :)
*/
console.log('\n', '======= ARRAY METHODS!', '\n');

// Array.toString()
console.log(typeof animals.toString());
console.log(animals.toString());

// Array.join(<delimiter>) - note that python's join is <delimiter>.join(Array)
console.log(animals.join(' + '));

// transform/run a function on everything in my array?
// I can use Array.map() -> run a function on everything in the array to transform all values in the array
let sea_animals = animals.map( i => {
    if (i.includes('Sea')){ // String.includes(<value>) is like python ____ in string
        return i
    } else {
        return false
    }
})
console.log(sea_animals);

// filter out only sea animals
// we can use Array.filter()
// with filter, any value that ends up returning false from the callback function will not be included in the new array
// so the function you pass to filter is usally one that returns false for certain values
let only_sea_animals = animals.filter( i => {
    if (i.includes('Sea')) {
        return i
    } else {
        return false
    }
})
console.log(only_sea_animals);

let short_animals = animals.filter( animal => animal.length < 10);
console.log(short_animals);

// less commonly used but still exists: Array.reduce()
// boils an array down to single value -> most commonly used with numbers
// needs a callback function with an accumulator and a placeholder
// the accumulator is essentially what winds up being the single number result
let nums = [4.99, 5.99, 6.71, 102419.34, 4]
let one_num = nums.reduce( (accumulator, current_num) => { return accumulator + current_num}) // classic summing reduce funciton
console.log(one_num);

// more Array methods: Array.slice, Array.splice, and String.serach()

// Array.slice() and Array.splice() can both be considered similar/equivalents to Python's list slicing
// Array.slice() most like python list slicing list[::]
console.log('\n', animals);

console.log(animals.slice(1, 5)); // give me a copy of index 1 up to but not including index 3
// slicing does not give a step option in javascript
// can only provide starting index and stopping index

// Array.splice(<starting index>, <number of indexes to remove>, <optional replacement values>)
// splice is an in-place algorithm -> the original array is modified and the removed values are returned
console.log('\nbefore splice', animals);
console.log(animals.splice(2, 4, 'Sea Otter'));
console.log('after splice', animals);

// String.search() returns the index at which the substring begins or -1 if the substring doesn't exist
console.log('Fennec Fox'.search('Fox'));