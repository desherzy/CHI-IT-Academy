// #1

function addParamsToRequest(params) {
    let counter = 0;

    return function (data) {
        counter++;
        return {
            ...params,
            ...data,
            count: counter
        };
    }
}

const sendData = addParamsToRequest( {access_token: 'qwerty'} );

console.log(sendData( {name: 'Roman'} ));
console.log(sendData( {surname: 'Medvid'} ));
console.log(sendData( {login: 'desherzy'} ));

// #2

const obj = {
    getData: function () {
        console.log(`Person name is ${this.name} and age ${this.age}`)
    }
}

console.log('Using Call Method --------------');
obj.getData.call({name: 'Roman', age: 22});

console.log('Using Bind Method --------------');
const showRoman = obj.getData.bind({name: 'Roman', age: 22});
showRoman();
showRoman();

// #3

const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [
                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        {
                            name: 'file 3',
                            type: 'file',
                            size: 30
                        }
                    ]
                }
            ]
        },
        {
            name: 'file 1',
            type: 'file',
            size: 10
        },
        {
            name: 'file 2',
            type: 'file',
            size: 20
        }
    ]
};

function getFiles(node) {
    let result = [];

    if (node.type === 'file') {
        result.push(node.name);
    }

    if (node.type === 'folder') {
        for (let child of node.children) {
            result = result.concat(getFiles(child));
        }
    }

    return result;
}

const files = getFiles(root);
console.log(files);

// #4

// ----- ES6 -----
class Person {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and my phone number is ${this.phone}`);
    }
}

class Student extends Person {
    constructor(name, phone, course) {
        super(name, phone);
        this.course = course;
    }

    study() {
        console.log(`I study at ${this.course}`);
    }
}

class Teacher extends Person {
    constructor(name, phone, subject) {
        super(name, phone);
        this.subject = subject;
    }

    teach() {
        console.log(`I teach at ${this.subject}`);
    }
}

console.log(`ES6 format`);

const student = new Student('Roman', '+380950000095', 'CHIT IT Academy');
student.introduce();
student.study();

const teacher = new Teacher('Igor', '+380630000063', 'CHIT IT Academy');
teacher.introduce();
teacher.teach();

// ----- ES5 -----
// function Person(name, phone) {
//     this.name = name;
//     this.phone = phone;
// };

// Person.prototype.introduce = function () {
//     console.log(`Hello, my name is ${this.name} and my phone number is ${this.phone}`);
// };

// function Student(name, phone, course) {
//     Person.call(this, name, phone);
//     this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.study = function () {
//     console.log(`I study at ${this.course}`);
// }

// function Teacher(name, phone, subject) {
//     Person.call(this, name, phone);
//     this.subject = subject;
// }

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

// Teacher.prototype.teach = function () {
//     console.log(`I teach at ${this.subject}`);
// }

// const student = new Student('Dmytro', '+380630000063', 'JavaScript');
// student.introduce();
// student.study();

// const teacher = new Teacher('Filippenko', '+380500000050', 'CHIT IT Academy');
// teacher.introduce();
// teacher.teach();
