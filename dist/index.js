"use strict";
//---------------------------
//Tuples
//----------------------
let person = ['marco', 22, true];
// tuples example
let hsla;
hsla = [200, "100%", "100%", 1];
let xy;
xy = [89.2, 20.1];
function useCoord() {
    //get Coordinate
    const lat = 189;
    const long = 23;
    return [lat, long];
}
const [lat, long] = useCoord();
//name tuples
let user;
user = ['Aung', 23];
let nam = user[0];
