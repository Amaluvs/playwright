/*let message:string="hello"
console.log(message)
message="morning"
console.log(message)

let age:number=20
console.log(age)

let isactive:boolean=true
console.log(isactive)

let data:any="abc"
console.log(data)
data=20

let b:unknown="mrng"
console.log(b)
b=2
console.log(b)*/
//Using type[] syntax (most common)
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Alice", "Bob", "Charlie"];
let isActive: boolean[] = [true, false, true];
console.log(numbers)
console.log(names)
console.log(isActive)

//____________________________________
//Using Array<type> syntax
let numbers1: Array<number> = [1, 2, 3];
let names1: Array<string> = ["Alice", "Bob"];
console.log(numbers1)
console.log(names1)

//------------------------------------------
//Array with multiple types (Union Types)
let values: (string | number)[] = ["John", 25, "Doe", 30,40];
console.log(values)
let value1: (string | number|boolean)[] = ["John", 25, "Doe", 30,40,true];
console.log(value1)
//------------------------------
//1. push() – Add at the end
let fruits1: string[] = ["Apple", "Banana"];
fruits1.push("Mango");
console.log(fruits1);
//pop() – Remove from the end
let fruits11: string[] = ["Apple", "Banana", "Mango"];
fruits11.pop();
console.log(fruits11);
//unshift() – Add at the beginning
let fruits12: string[] = ["Banana", "Mango"];
fruits12.unshift("Apple");
console.log(fruits12);
//shift() – Remove from the beginning
let fruit14: string[] = ["Apple", "Banana", "Mango"];
fruit14.shift();
console.log(fruit14);
//length – Find array size
let fruits15: string[] = ["Apple", "Banana", "Mango"];
console.log(fruits15.length);
//includes() – Check whether value exists
let fruits16: string[] = ["Apple", "Banana", "Mango"];
console.log(fruits16.includes("Banana"));
//indexOf() – Find index
let fruits17: string[] = ["Apple", "Banana", "Mango"];
console.log(fruits17.indexOf("Mango"));
//slice() – Get part of an array
let fruit18: string[] = ["Apple", "Banana", "Mango", "Orange"];
let result1 = fruit18.slice(1, 3);
console.log(result1);
//splice() – Add/remove elements
let fruit19: string[] = ["Apple", "Banana", "Mango"];
fruit19.splice(1, 1);
console.log(fruit19);
/*splice(1, 1)
means:
1 → starting index
1 → number of elements to remove*/
//Add elements
let fruits20: string[] = ["Apple", "Orange"];

fruits20.splice(2, 0, "Banana", "Mango");

console.log(fruits20);
/*1 → starting index
0 → don't remove anything
"Banana", "Mango" → elements to add*/
let fruits22: string[] = ["Apple", "Orange","cake"];

fruits22.splice(1,2, "Banana", "Mango");

console.log(fruits22);