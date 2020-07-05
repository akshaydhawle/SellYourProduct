
var a = "string ";

var b = {
    name: "akshay",
    age: 25,
    likes: [
        {
            user: "ajay"
        }
    ]
}


const arr = [
    {
        profile: 1,
        name: "Akshay",
        age: 24
    },
    {
        profile: 2,
        name: "Paresh",
        age: 23
    },
    {
        profile: 3,
        name: "Ajay",
        age: 21
    },
]



const arr1 = arr.filter(m => m.profile !== 1);

const x = { x: 1, z: { t: 1, t2: { s: 3 } } };

const y = { ...x };

y.t = 2;

// const t = JSON.stringify(JSON.parse(y));

console.log(x, y);


const index = arr.indexOf({
    profile: 3,
    name: "Ajay",
    age: 21
});


const str2 = "my name is akshay";

const split = str2.split(" ");

const join = split.join(",");

// 

const test = {
    name: "akshay",
    age: 25,
    contact: "8888",
    dob: "256",
    hr: "123"
}

const name = test.name;
const age = test.age;
const contact = test.contact;
const dob = test.dob;
const hr = test.hr;

const { name, age, contact, dob, hr } = test; // object destructureing

const test1 = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = test;



const getFiles = require('./Test')

console.log(getFiles());


import getFiles from "./Test";


