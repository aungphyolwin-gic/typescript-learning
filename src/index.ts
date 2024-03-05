//-------------------
// Type Alias
//-------------------

//example 1 - tuple
type rgb = [number, number, number]

function getRandomColor(): rgb {
    const r = Math.floor( Math.random() * 255);
    const g = Math.floor( Math.random() * 255);
    const b = Math.floor( Math.random() * 255);

    return [r,g,b]
}

const getColorOne = getRandomColor();
const getColorTwo = getRandomColor();
console.log(getColorOne, getColorTwo);

//example 2 -> object literal

type User = {
    name : string
    score: number
}

const userOne: User = { name:'Aung', score:95}

function formatUser(user:User) :void {
    console.log(`${user.name} has score of ${user.score}`);
}

formatUser(userOne)
formatUser({name:"Mike",score:80})