// #1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printArrayUsingFor(array) {
    console.log('For loop');
    for (let i = 0; i < array.length; i++) {
        console.log('Element [' + i + ']: ' + array[i]);
    }
}

function printArrayUsingWhile(array) {
    console.log('While loop');
    let i = 0;
    while (i < array.length) {
        console.log('Element [' + i + ']: ' + array[i]);
        i++;
    }
}

//printArrayUsingFor(numbers);
//printArrayUsingWhile(numbers);

// #2
let value;
let trash = [22, 'academy', true, null, value, Symbol(), 9007199254740991n, false, 7, 'something'];

function typeofElements1(array) {
    console.log('#1 For loop');
    for (let i = 0; i < array.length; i++) {
        console.log('Element [' + i + '] is ' + typeof array[i]);
    }
}

function typeofElements2(array) {
    console.log('#2 While loop');
    let i = 0;
    while (i < array.length) {
        console.log('Element [' + i + '] is ' + typeof array[i]);
        i++;
    }
}

function typeofElements3(array) {
    console.log('#3 forEach loop');
    array.forEach(function(element, i) {
        console.log('Element [' + i + '] is ' + typeof element);
    });
}

function typeofElements4(array) {
    console.log('#4 DoWhile loop');
    let i = 0;
    do {
        console.log('Element [' + i + '] is ' + typeof array[i]);
        i++;
    } while (i < array.length);
}


// typeofElements1(trash);
// typeofElements2(trash);
// typeofElements3(trash);
// typeofElements4(trash);

// #3
const people = [
    { name: 'Chris',  age: 26, pets: ['dog'] },
    { name: 'Mike',   age: 15, pets: ['cat'] },
    { name: 'Emily',  age: 23, pets: ['cat'] },
    { name: 'Edward', age: 34, pets: ['dog', 'cat'] },
    { name: 'Jamie',  age: 11, pets: ['parrot'] }
];

// let filtered = people.filter(person => person.age > 20);
// console.log(filtered);

// #4
function addPet() {
    const secretPet = people.map(person => ({
        name: person.name,
        pets: [...person.pets, 'crocodile']
    }));

    console.log(secretPet);
}

//addPet();

// #5
function taskFive() {
    let arr = new Array(10).fill(42);
    console.log(arr);
    arr.splice(5, 0, 'answer');
    console.log(arr.find(item => item === 'answer'));
}

//taskFive();

// #6
const user = {
    firstName: 'Roman',
    lastName: 'Medvid',
    login: 'rmedvid',
    email: 'roman.medvid28@gmail.com',
    password: 'secret'
};

function taskSix() {
    let keys = Object.keys(user);
    console.log(keys);

    console.log('Contain "login": ' + Object.hasOwn(user, 'login'));
    console.log('Contain "createdAt": ' + Object.hasOwn(user, 'createdAt'));
    console.log('Contain "password": ' + Object.hasOwn(user, 'password'));

    let values = Object.values(user);
    console.log(values);
}

//taskSix();
