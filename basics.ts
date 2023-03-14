// Primitives: number, string, boolean
// More complex types: array, objects
//Function types, parameters

//Primitives

let age: number;
age = 12;
// can't be like age = '12';

let userName: string;
userName = "Renato";

let isInstructor: boolean;
isInstructor = true;

//Arrays and objects

let hobbies: string[];
//boolean[], number[]

hobbies = ["Sports", "Cooking", "Something else"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Renato",
  age: 32,
};

/* person = {
  isEmployee: true,
}; */

let people: {
  name: string;
  age: number;
}[]; /* this is also possible and means an array of objects */

// Type inference --- GOOD PRACTICE, EMBRACE IT
let course = "React - The Complete Guide";
/* course = 12345;   no can do because of type inference */

/* UNION TYPES */

let someTypes: string | number = "Something";
someTypes = 1; /* it is okey */

// Type Alias
type Person = {
  name: string;
  age: number;
};

// this variable is of the type array of Person
let lotsOfDudes: Person[];

//Functions & Types

function addSomething(a: number, b: number) {
  return a + b;
}

/* VOID RETURN */
function printSomething(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].spli(""); // no compilation error even tho we can't split a number;

/* GENERICS SOLVE THAT */
function insertAnythingAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
