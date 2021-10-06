/*
Case Switching, Objects, Callbacks, and Promises
*/
console.log('\n ============== CASE SWITCHING ==============')

// The case/switch case statement/case switching
// Another setup for control flow (conditionals)

let day = new Date().getDay();
console.log(day);

let literal_day = new Date().toString();
console.log(literal_day.split(' ')[0]);
console.log(literal_day.slice(0,3));

switch (day){
    case 0:
        console.log('It is Sunday. Please remember that it is Sunday.');
        break;
    case 1:
        console.log('It is Monday!');
        break;
    case 2:
        console.log('Tuesday, Tuesday, Tuesday!');
        break;
    case 3:
        console.log('Wednesday!');
        break;
    case 4:
        console.log('Thursday!');
        break;
    case 5:
        console.log('Its Friday again!');
        break;
    case 6:
        console.log('SATURDAY!');
        break;
}

/*
OBJECTS! Like python objects but simpler :)
*/
console.log('\n================ Objects ================\n')

// at their simplest level, objects in JS are python dictionaries
fox = {
    name: 'DataView',
    age: '3',
    species: 'Fennec Fox',
    color: 'Tan',
    habitat: 'Desert'
}
console.log(fox);

// accessing data in our JS object is no different that accessing data in our pythong dictionary OR our python object
// we have options because JavaScript

// dot notation
console.log(fox.species);
console.log(fox.name);

// bracket notation
console.log(fox['species']);
console.log(fox['name']);

// just like python dictionaries, JS objects are mutable - if we can access keys/attributes, we can change them
fox.name = '';
console.log(fox.name);
fox['name'] = 'Dave';
console.log(fox['name']);

// Complex Object
let me = {
    name: 'Christian',
    hometown: 'Lawton',
    residence: 'Farmington',
    fav_color: 'Purple',
    programming_language: ['Python', 'Javascript'],
    sports: {
        tennis: ['playing', 'coaching', 'Roger Federer'],
        soccer: {
            position: 'Left Wingback',
            favorite_team: 'Manchester City',
            favorite_player: 'Joao Cancelo'
        }
    }
}

console.log(me.sports.soccer.favorite_team);
console.log(me['sports']['tennis'][2]);

//JS Object methods
// Object.keys(<object>) and Object.values(<object>)
console.log('\n============= Object Methods ==========\n')

// for whatever reason - .keys() and .values() only work if you use the syntax Object.keys(<object>) and Object.values(<object>)
console.log(Object.keys(me));
console.log(Object.values(me));

// key in object loop
for(k in me){
    console.log(`${k} has value ${me[k]}`); // must use bracket notation with variable k represting a key
}

// same thing but with indexes through Object.keys()
for(let i = 0; i<Object.keys(me).length; i++){
    console.log(Object.keys(me)[i]);
}

// same thing but with indexes through Object.values()
for(let i = 0; i<Object.values(me).length; i++){
    console.log(Object.values(me)[i]);
}

// Complex Objects/Object Prototypes (JavaScript Classes/Class Objects)
console.log('\n========== Object Prototypes=========\n')

// simplest way to create an object prototypes is with a function -- this is the ES5 approach
function Aniaml(name, age, species, color, habitat){
    // self.___ in python -> this. __ in JavaScript
    this.name = name;
    this.age = age;
    this.species = species;
    this.color = color;
    this.habitat = habitat;

    // just like in python we can create methods for our object
    this.printInfo = () => {
        return `This is ${this.name}. A ${this.color} ${this.age} year old ${this.species} from the ${this.habitat}.`
    }
}

// create an instance of my animal - remember to tell the computer what you're doing before you do it
// in this scenario - I need to both tell it im declaring a variable and instantioating an object prototype
// so I need to remember my let and new keywords
/* Bad: a_fox = Animal('Dave', 4, 'Fennec Fox', 'Tan', 'Desert'); */
let a_fox = new Aniaml('Dave', 4, 'Fennec Fox', 'Tan', 'Desert'); // good
console.log(a_fox);
console.log(a_fox.name);
console.log(a_fox.printInfo());

// class-based Object prototype - actually built to mimic the python and java (true OOP languages) object creation process
class Animal{
    constructor(name, age, species, color, habitat){
        this.name = name;
        this.age = age;
        this.species = species;
        this.color = color;
        this.habitat = habitat;
    }

    printInfo(){
    return `This is ${this.name}. A ${this.color} ${this.age} year old ${this.species} from the ${this.habitat}.`
    }
}

let class_based_fox = new Aniaml('Doug', 4, 'Fennec Fox', 'Tan', 'Desert');
console.log(class_based_fox);
console.log(class_based_fox.name);
console.log(class_based_fox.printInfo());

// JS Inheritance -> essentially functions in the exact same manner as python inheritance
// We can have a child class inherit funcitonality and attributes from a parent class
// class <child> extends <parent> {}
// console.log('')
// class Fox extends clsAnimal{
//     constructor(name, age, species, color, habitat, specific_location){
//         super(name, age, species, color);
//         this.habitat = specific_location + ' ' + habitat;
//     }
// }

// let fox_fox = new Fox('Derrick', 4, 'Fennec Fox', 'Tan', 'Desert', 'Sahara');
// console.log(fox_fox);
// console.log(fox_fox.habitat);
// console.log(fox_fox.printInfo());

// Group Exercise
class Person{
    constructor(name, age, country, language){
        this.name = name;
        this.age = age;
        this.country = country;
        this.language = language;
    }
    printInfo(){
        return `This is ${this.name}. A ${this.age} year old. Who is from ${this.country}. ${this.name}'s primary language is ${this.language}.`
        }
}

let person_1 = new Person('Elaine', 26, 'Ireland', 'English');
let person_2 = new Person('Joo Yeon', 26, 'South Korea', 'Korean');
let person_3 = new Person('Christian', 26, 'USA', 'English');
console.log(person_1.printInfo());
console.log(person_2.printInfo());
console.log(person_3.printInfo());

class Child extends Person{
    constructor(name, age, country, language, school, subject){
        super(name, age, country, language);
        this.school = school + ' ' + subject;
    }
}

let child1 = new Child('Sam', 30, 'USA', 'Coding at 200wpm', 'Coding Temple', 'JavaScript')
let child2 = new Child('Shoha', 30, 'USA', 'Whiteboards 24/7', 'Coding Temple', 'JavaScript')
console.log(child1.school);
console.log(child1.printInfo());
console.log(child2.school);
console.log(child2.printInfo());

// -- JavaScrit Callbacks -- //
console.log('\n================== Callbacks and Asynchronous JavaScript ================\n')

// Basic exmaple of event loop flipping expected result order

function first(){
    console.log('First');
}

function second(){
    console.log('Second');
}

// execute first() and second()
first();
second();

// what happens when we artificially increase the runtime of the first() process
function first_delay(){
    setTimeout(() => {console.log('First')}, 5000);
}
console.log('\nRun first first, but with a longer process.\n')
first_delay();
second();

/*The result is that the return value of second() is desplayed before first_delay()
both execute within the event loop almost simultaneously, just with first_delay() taking much longer to finish its process.
*/

// callback function example
function doneWithClass(callback){
    alert('Click through when you are done with class.');
    callback();
}

// so when I call doneWithClass I need to provide a function as the callback -> exxentially what to do after the alert is over
doneWithClass(() => {console.log('Yay class is over now I get to go do my homework and write more code :))))))))')});

/*
We could solve this by just introducing more callbacks
We could make second() a callback of first_delay() and doneWithClass() a callback of second
*/

/*
Solving callback hell (ish): Promises and Async/Await
*/
console.log('\n================ Promises & Async/Await=====================\n')
// creating a JS promise
const isFox = (name) => {
    return new Promise((resolve, reject) => {
        if (name.constains('Fox')){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

//using that promise
isFox('Fennec Fox')
.then(
    //happy resolved path
    (result) => {console.log(`This is a fox! ${result}`)}
)
.catch(
    // sad reject path
    (error) => {console.log(`This is not a fox. ${error}`)}
)

console.log(isFox('FennecFox'));

// Using Async/Await
// Async/Aswait are a more modern approach to promises using keywords
// one note that will mae more sense later -> async processes are independent of your main event loop
// an async process must remain an async process

let getRaise = (base, raise) => {
    const new_salary = base + raise;
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// function that makes that happen slowly
let slow_raises = (n1, n2) => {
    return new Promise ( (resolve) => {setTimeout( () => resolve(n1, n2), 2000)} );
}

// non-async with a callback to slow_raises
let increase_salary = (base, raise) => {
    const new_salary = slow_raises(base, raise);
    console.log(`New Salary: ${new_salary}`)
    return new_salary
}

// async function with a callback to slow_raises solving our promise issue
let async_increase_salary = async () => {
    const new_salary = await slow_raises();
    console.log(`New Salary: ${new_salary}`);
    return new_salary;
}

getRaise(80000, 35000);