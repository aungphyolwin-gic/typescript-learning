"use strict";
// Any Type
let variable;
let anotherVariable;
variable = 'hello';
variable = 27;
anotherVariable = true;
anotherVariable = { name: 'hello', age: 22 };
//any type in array
const array1 = ['hi', 12, true, null];
array1.push({ gender: 'male' });
//function
function addTwoValue(data) {
    return data + data;
}
console.log(addTwoValue(2));
console.log(addTwoValue("hI"));
//useful when migrating js to ts
//using any won't cause any errors initially
