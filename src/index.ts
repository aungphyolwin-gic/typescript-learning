//-----------------------
// Union Type
//-----------------------

let someId: number | string

someId = 23
someId = 'h23a3'

let email: string | null

email = 'aung@gmail.com'
email = null

type Id = number | string

let anotherId : Id
anotherId = 'lsdf2j4f'
anotherId = 4


//pitfall : cann't use union type to a method that require specifically only one data type
//parseInt(anotherId)


//----------------
// Type Guard
//----------------

function swapIdType(id: Id){
    if( typeof id === 'string'){
        return parseInt(id);
    }
    return id.toString();
}

console.log(swapIdType(23));
console.log(swapIdType('3'));

//types with Interfaces

interface User {
    type : 'user'
    username : string
    email : string
    id : Id
}

interface Person {
    type : 'person'
    firstName : string
    age : number
    id : Id
}

function logDetails ( value : User | Person): void{
    if( value.type === 'user'){
        console.log(value.email, value.username);
        
    }
    if(value.type === 'person'){
        console.log(value.firstName, value.age);
        
    }
}