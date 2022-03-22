// let and const, var is never needed
const myName = 'Dan';
console.log(myName);

let myFaveBand = 'Stevie Wonder';
console.log(myFaveBand);


// arrow functions with various syntaxes
// 'this' keeps context more consistently
function discoveredRadioDept() {
    myFaveBand = 'Radio Dept'
};

const discRadioDept = () => {
    myFaveBand = 'Radio Dept'
};

const printMyName = myName => console.log(myName);


const printNameAndBand = (myName, myFaveBand) => {
    console.log(myName + ' likes ' + myFaveBand);
};


// // modularity, export
// export default myFaveBand;


// classes, blueprints for JS objects
class Human {
    constructor() {
        this.gender = 'Non-binary'
    }

    printGender() {
        console.log(this.gender);
    }
};

class Person extends Human {
    constructor() {
        super();
        this.name = 'Dan';
    }
    
    printPeronName() {
        console.log(this.name)
    }
};

const person = new Person();
person.printPeronName();
person.printGender();


// next gen ditches constructors, embraces arrow functions even more
class Humans {
    gender = 'Non-binary'

    printGender = () => console.log(this.gender);
}; 

class People extends Humans {
    name = 'Dan';
    
    printPeronName = () => console.log(this.name);
};


// spread operator
// add properties while safely copying old array/object
const oldNums = [ 1, 2, 3 ];
const newNums = [...oldNums, 4];

console.log(newNums);

const dan = {
    isHeDan: 'yes'
};

const danPlus = {
    ...dan,
    howDanIsHe: "very"
};

console.log(danPlus);


// rest operator
// user on functions like spread
const filter = (...args) => args.filter(el => el === 1);

console.log(filter(1,2,3));


// destructuring
// extract array els or object props and store them in vars
const cats = ['boris', 'pickles', 'fil'];
[cat1, cat2] = cats;

