// a recap on  common datatypes in JS: Numbers, Strings, Boolean, Undefined, Objects, Arrays...
// key words for declaring variables: 
// Automatically when fistr used
// Var: Allows changing of variables. Rarely used.
// Let: Allows changing of variables. Commonly used.
// Const: Permanent during the running of the programme. Commonly used

const age = 35 // Format: declaration keyword, varible name, equal sgn, value
const surname = "Soap"
const firstName = "Joe"
const ageAsString = `${ age } is my age`
let isMale = true // true || false, boolean
let isRich = null
let unAssigned //declaration keyword, variable name == undefined
console.log(isRich);

//method: a function embedded on the datatypes in JS
console.log(surname.trim());
if(surname.trim()==="") {
    console.log('surname is required');
}

//property
console.log(surname.length); //property
isMale = false;
console.log(isMale);

console.log(ageAsString);
console.log(ageAsString.charAt(3));