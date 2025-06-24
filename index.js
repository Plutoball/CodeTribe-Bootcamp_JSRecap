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

//Arrays : used to store multiple elements in one variable, uses square [] brackets
//Objects : a collection of key value pairs, where key is property, and value is property

//declaring courses array

let courses = ["Computer Science", "Biological Science", "Information Technology", "Electrical Engineering", "Mathematics", "Systems Design", "Database Design"]

//index : start at 0,making the last element to be at index = courses.length - 1
console.log(courses[0]);
console.log(courses[courses.length-1]);

//this is our object
let csCourse = {
    courseName: "Computer Science",
    courseDuration: 3,
    apsLimit: 24,
    modules: [
        "Mathematics",
        "Systems Design",
        "Database Design"
    ]
}

console.log(csCourse)

// working with data in the array
csCourse.courseName = "Information Technology" // adding into the array
csCourse.modules.push("Statistics") // updateing the array
csCourse.modules[4] = "Mobile Computing"
csCourse.modules[0] = csCourse.modules[0].trim()
csCourse.apsLimit = 24 // adding a new property key and value
delete csCourse.courseName

// using loops to check for valuses in an array or object whild not being sure of the data, its type and position

courses.push("Mechanical Engineering")

console.log(courses);
courses[0] = ""
console.log(courses);