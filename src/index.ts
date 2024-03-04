// Any Type

let variable: any
let anotherVariable 

variable = 'hello';
variable = 27;

anotherVariable = true;
anotherVariable = { name: 'hello', age: 22}

//any type in array
const array1: any[] = ['hi', 12, true, null]
array1.push({gender:'male'})


//function
function addTwoValue(data: any):any{
    return data+data;
}

console.log(addTwoValue(2));
console.log(addTwoValue("hI"));

//useful when migrating js to ts
//using any won't cause any errors initially
