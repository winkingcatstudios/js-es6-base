// primative types
// num2 copies data from number
const number = 1;
const num2 = number;

// reference types
// anotherPerson copies a pointer to person
// passing by reference not value
const person = {
    name: 'Dan'
};

const anotherPerson = person;
person.name = "notDan";

console.log(anotherPerson);     // output: notDan


// use spread operator to copy object by value
const yetAnotherPerson = {
    ...person
};
person.name = "notDan";

console.log(anotherPerson);     // output: Dan


// array functions
const numbers = [ 1, 2, 3 ];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(doubleNumArray);    // output: 2, 4, 6

