/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// --------------------------------------------------------------------------------------------------- No spread operator

let arr1 = [1, 2, 3];                   // first array
let arr2 = arr1;                        // second array linked to arr1
arr2.push(4);                           // adding a new element to the second array
console.log("Second array:", arr2);     // result: Second array: [1, 2, 3, 4]
console.log("First array:", arr1);      // result: First array: [1, 2, 3, 4]
// since arr2 isn't copied from arr1 and they are more linked. arr1 will also get the push as arr2.

// ----------------------------------------------------------------------------------------------------- Copying an array

let arr3 = [4,5,6];
let arr4 = [...arr3];                   // three dots syntax "spreads" the values from arr3 to arr4 creating a new object

arr4.push(7);                           // by using spread, arr3 remains untouched
console.log("Third array:", arr3);
console.log("Fourth array:", arr4);

// ---------------------------------------------------------------------------------------------------- Copying an object

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { ...obj1, d: 4 };           // spreading obj1 in obj2, obj1 remains untouched even when obj2 had additions
let obj3 = { ...obj1, b: 5 };           // overriding and changing "b" in obj1
console.log("First object:", obj1);     // result: First object: { a: 1, b: 2, c: 3 }
console.log("Second object:", obj2);    // result: Second object: { a: 1, b: 2, c: 3, d: 4 }
console.log("Third object:", obj3);     // result: Third object: { a: 1, b: 5, c: 3 }

// --------------------------------------------------------------------------------- Copying only part of an array/object

let arr5 = [...arr1, {...obj1}, ...arr3, "x", "y", "z"];
console.log(arr5);                      // result: [ 1, 2, 3, 4, { a: 1, b: 2, c: 3 }, 4, 5, 6, 'x', 'y', 'z' ]