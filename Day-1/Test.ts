// let a: string = "Hello World";

// console.log(a);

//array
const arr: number[] = [1, 2, 3, 4, 5];

// tuple
const brr: [number, string] = [1, "Hello"];
console.log(arr);

console.log(brr);

// object
const person: { name: string; roll: number } = {
  name: "John",
  roll: 101,
};

console.log(person);

// union

let d: string | number = 33;
d = "abc";

console.log(d);

//any
let c: any = 10;
c = "Hello";
c = true;
console.log(c);

// enum

// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let a: Color = Color.Red;
// console.log(a);

//undefined

const un: undefined = undefined;

// literal

let type: "Student" | "Teacher" = "Student";

// type alias

type stud = {
  name: string;
  roll: number;
  age: number;

  // optional properties
  passion?: string;
  profession?: string;
};

const student1: stud = {
  name: "Ridoy Babu",
  roll: 611760,
  age: 20,
};

console.log(student1);

const admin: stud = {
  name: "Ridoy Babu",
  roll: 611762,
  age: 21,
  profession: "Web Developer",
};
console.log(admin);

// interface

interface course {
  title: string;
  description: string;
  price: number;
  completed?: boolean;
}

const course1: course = {
  title: "Web Development",
  description: "A full stack web development course based on MERN technology",
  price: 99.9,
  completed: false,
};

console.log(course1);

// void

const abc = (a: number, b: string): void => {
  console.log(`Number ${a} is ${b}`);
};

abc(5, "five");
