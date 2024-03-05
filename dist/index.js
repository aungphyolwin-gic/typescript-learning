"use strict";
//-------------------
// Type Alias
//-------------------
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const getColorOne = getRandomColor();
const getColorTwo = getRandomColor();
console.log(getColorOne, getColorTwo);
const userOne = { name: 'Aung', score: 95 };
function formatUser(user) {
    console.log(`${user.name} has score of ${user.score}`);
}
formatUser(userOne);
formatUser({ name: "Mike", score: 80 });
