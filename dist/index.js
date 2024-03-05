"use strict";
//-----------------------
// Union Type
//-----------------------
let someId;
someId = 23;
someId = 'h23a3';
let email;
email = 'aung@gmail.com';
email = null;
let anotherId;
anotherId = 'lsdf2j4f';
anotherId = 4;
//pitfall : cann't use union type to a method that require specifically only one data type
//parseInt(anotherId)
//----------------
// Type Guard
//----------------
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    return id.toString();
}
console.log(swapIdType(23));
console.log(swapIdType('3'));
function logDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstName, value.age);
    }
}
