//1 spread function

//2 object 
const person = {
    Name: 'Lurstlove',
    age: 23,
    occupation: 'Plumber'
}

console.log(person)

//3tenary operator

function isEvenNumber(number) {
    return (number % 2 == 0) ? 'Number is even' : 'Number is odd'
}

//test 
const test1 = 3
console.log(isEvenNumber(test1))

const test2 = 100
console.log(isEvenNumber(test2))

//4map  function

//5 first letter

//6 reduce function

//7 rest operator

//8 the this keyword 

function userMe(name, age, mass) {
    this.name = name
    this.age = age
    this.mass = mass

    this.greet = () => {
        console.log(`welcome back ${this.name},your mass is ${this.mass} and your age ${this.age} `)
    }
}
const userA = new userMe('Sterlen', 30, '50kg')

userA.greet();

//9 object 

const porsche = {
    model: '911',
    make: 'GTR',
    year: 2022,
}

console.log(porsche);

//10 spread array

// 11 tenary possitive 

function checkNumber(number) {
    return (number < 0) ? 'The number is negative' : 'The number is positive'
}

const hisNumber = -1

console.log(checkNumber(hisNumber))


//12 map concept

//13 
