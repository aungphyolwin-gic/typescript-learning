//---------------------------
//Tuples
//----------------------
let person: [string, number, boolean] = ['marco', 22,true ]

// tuples example
let hsla: [number, string, string, number] 
hsla = [200, "100%", "100%", 1]

let xy: [number, number]
xy = [89.2, 20.1]

function useCoord(): [number, number] {
    //get Coordinate
    const lat = 189
    const long = 23
    return [lat, long]
}

const [lat, long] = useCoord();

//name tuples
let user: [name:string, age:number]
user = ['Aung', 23]
let nam =user[0]