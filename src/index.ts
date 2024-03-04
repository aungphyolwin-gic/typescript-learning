// functions

//simple function

function addTwoNumber(a:number,b: number){
    return a+b;     //return any type of data
}

const subTwoNumber = (a:number, b: number):number => {
    return a-b;
}

let result = addTwoNumber(2,3);
result = subTwoNumber(5,2);

function addAllNumber(items: number[]):void{
    const total = items.reduce((a,b)=> a+b, 0);
    console.log(total)
}

addAllNumber([2,3,4,5,6,7,7,3]);

//--------------------------------
//Return Type Interfere
//--------------------------------
function foramtGreeting(name:string , greeting: string): string{
    return `${greeting} ${name}`;
}

console.log(foramtGreeting("Ko Ko","Mingalarpar"));