const marvel_heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
const dc_heroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

//marvel_heroes.push(dc_heroes); // add dc_heroes array to marvel_heroes
//console.log(marvel_heroes); // takes the whole dc_heroes array as a single element and adds it to marvel_heroes

//console.log(marvel_heroes[5][0]); // access the first element of the dc_heroes array which is now at index 5 of marvel_heroes

const allHeroes = marvel_heroes.concat(dc_heroes); // concatenate dc_heroes to marvel_heroes and return a new array
//console.log(allHeroes); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]


const allHeroes2 = [...marvel_heroes, ...dc_heroes]; // spread operator to concatenate arrays
//console.log(allHeroes2); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5,6]]];
console.log(another_array[3][1]);
const real_another_array = another_array.flat(Infinity); // flatten the array to any depth
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5, 6]


console.log(Array.isArray("Mayank")); // false
console.log(Array.from("Mayank")); // ['M', 'a', 'y', 'a', 'n', 'k'] - create an array from a string


let score1 = [10, 20, 30];
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // create an array from the given arguments
