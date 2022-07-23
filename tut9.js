console.log("We are listening to Tut-9 files");
/**
 * Rest and Spread Operator
 */

// Rest

function addNumbers(a,b,c,...other){
    console.log(other[0]);
    console.log(other[1]);
    return a+b+c;
}

console.log(addNumbers(2,3,4,5,6));

//Spread
let names = ['Abhsihek', 'Ashutosh', 'Nanda', 'Ram'];
function getNames(name1, name2, name3, name4){
    console.log(name1, name2, name3, name4);

}
console.log(getNames(names[0], names[1], names[2]));
console.log(getNames(...names));
console.log(getNames(names));

//Object with Rest:

let student = {
    name: 'Abhishek',
    age: 22,
    isGood: true
}
const {...rest} = student;
console.log(rest);

// Spread
let newStudent = {
    ...student,
    age: 23
}

console.log(newStudent);



