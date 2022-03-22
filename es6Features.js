// let and const, var is never needed
const myName = 'Dan'
console.log(myName)

let myFaveBand = 'Stevie Wonder'
console.log(myFaveBand)


// arrow functions with various syntaxes
// 'this' keeps context more consistently
function discoveredRadioDept() {
    myFaveBand = 'Radio Dept'
}

const discRadioDept = () => {
    myFaveBand = 'Radio Dept'
}

const printMyName = myName => console.log(myName)


const printNameAndBand = (myName, myFaveBand) => {
    console.log(myName + ' likes ' + myFaveBand)
}


// modularity, export
export default myFaveBand


// classes, blueprints for JS objects
class Human {
    constructor() {
        this.gender = 'Non-binary'
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor() {
        super();
        this.name = 'Dan';
    }
    
    printPeronName() {
        console.log(this.name)
    }
}

const person = new Person();
person.printPeronName();
person.printGender();


// next gen ditches constructors, embraces arrow functions even more
class Humans {
    gender = 'Non-binary'

    printGender = () => console.log(this.gender);
}   

class People extends Humans {
    name = 'Dan';
    
    printPeronName = () => console.log(this.name)
}


// spread and rest operator

