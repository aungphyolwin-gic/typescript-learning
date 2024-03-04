let person:string = "aung aung";
person = "Mg Mg";
// person = 34;


let isValid:boolean = true;
isValid = false;
// isValid = "hello";

let number:number = 34;
number = 3.4;
// number = 'haha';

//null and undefined
let something: null = null;
// something = 'null';
let anotherThing: undefined = undefined;
// anotherThing = 'hello';

console.log('name ' + person);


//------------------
//----Arrays--------
//------------------
let fruits: string[] = ['apple','mango', 'oragne'];
// fruits.push(23);
fruits.push('banana');
console.log(fruits);

let ages: number[] = [23,25,24,21];
ages.push(20);

console.log(ages);

// Array Interfere
let  animals = ['dog','cat','bird'];
animals.push('snake');
const f = animals[3];

let mixData = ['hello', true, null, undefined, 3.4, undefined, 34];
mixData.push("Another");

const val = mixData[4]


//-----------------
//-----Objects Literal-----
//-----------------

let user: { firstname: string, age: number} = { firstname: "May", age:22}
user.firstname = "Nicky";

//------------------------------------
//Object Interfere with Object Literal
//------------------------------------
let Person = {
    name : 'Ma Ma',
    age : 25,
    gender : 'female'
}

Person.age = 28;
const age = Person.age;
console.log(Person);
console.log(age)