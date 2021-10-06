//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person{
    constructor(name, age, country, language){
        this.name = name;
        this.age = age;
        this.country = country;
        this.language = language;
    }
// Use an arrow to create the printInfo method
    printInfo = () => {
        return `${this.name} is ${this.age} years old. ${this.name} lives in ${this.country} and primarily speaks ${this.language}.`
    }
// Create another arrow function for the addAge method that takes a single parameter
    addAge = (age) => {
        return `Happy Birthday! ${this.name} is now ${++this.age} years old.`
    }
// Adding to the age
}
let person1 = new Person('Christian', 26, 'USA', 'English');
let person2 = new Person('Nicolle', 31, 'USA', 'English');

console.log(person1.printInfo());
console.log(person1.addAge());
console.log(person2.printInfo());
console.log(person2.addAge());
console.log(person2.addAge());
console.log(person2.addAge());

