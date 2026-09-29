/*
//1.basic prgm
class Parent
{
    show()
    {
        console.log("hello")
    }
}
class Child extends Parent
{

}
let obj=new Child()
obj.show()
console.log("**************************************")
//2.
class Parent1
{
    show()
    {
        console.log("hello")
    }
}
class Child1 extends Parent
{
display()
{
     console.log("morning")
}
}
let obj1=new Child1()
obj1.show()
obj1.display()
console.log("**************************************")
//3.using constructor
class Person
{
    constructor(name)
    {
this.name=name
    }
    show()
    {
        console.log("hello  "+this.name)
    }
}
class Student extends Person
{
show()
    {
        console.log("hello  "+this.name)
    }
}
let p=new Student("sinu")
p.show()
console.log("**************************************")
//4.
//what is super keyword
//super is used to access parent class constructor or methods
class Person2 {
    constructor(name) {
        this.name = name;
    }
}

class Student2 extends Person2 {
    constructor(name, marks) {
        super(name);   // important
        this.marks = marks;
    }

    show() {
        console.log(this.name + " " + this.marks);
    }
}

let s = new Student2("Anu", 90);
s.show();
console.log("**************************************")
//5.


//6
class Person4 {
    constructor(name) {
        this.name = name;
         console.log(this.name);
    }
}

class Student4 extends Person4 {
    constructor(name) {
         super(name);  // calling parent constructor
        this.name=name;//already in parent.so not needed
        console.log("name is "+this.name);
       
    }
}

let s4 = new Student4("Anu");
//console.log(s4.name);
console.log("**************************************")
//4 super in method
class Parent3 {
    show() {
        console.log("Parent method");
    }
}

class Child3 extends Parent3 {
    
    show() {
        super.show();  // calling parent method
        console.log("Child method");
        super.show();  // calling parent method
    }
}

let p1 = new Child3();
p1.show()
console.log("**************************************")*/

class Student {
    #name = "Anu";

    getName() {
        return this.#name;
    }
}

let s = new Student();

console.log(s.getName());
//console.log(s.#name)  //not possible
console.log("*****************************************");
//prgm2
class Student1 {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
        //console.log(this.#name+" name")
    }
}

let s1 = new Student1("Anu");

console.log(s1.getName());

s1.setName("Rahul");

console.log(s1.getName());
console.log("*****************************************");

//prgm3

class Employee {
    #salary;

    constructor(salary) {
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(newSalary) {
        this.#salary = newSalary;
    }
}

let emp = new Employee(50000);

console.log(emp.getSalary());

emp.setSalary(60000);

console.log(emp.getSalary());
console.log("************************************")

//polymorphism
class Animal {
    sound() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Dog barks");
    }
}

let d = new Dog();
d.sound();
console.log("************************************")

//prgm2
class Person1 {
    greet(name) {
        console.log("Hello " + name);
    }
}

class Student2 extends Person1 {
    greet(name) {
        console.log("Welcome " + name);
    }
}

let s2 = new Student2();

s2.greet("Anu");
console.log("************************************")

//super
class Animal1 {
    sound() {
        console.log("Animal Sound");
    }
}

class Dog1 extends Animal1 {
    sound() {
        super.sound();
        console.log("Dog Barks");
    }
}

let dog1 = new Dog1();

dog1.sound();
console.log("************************************")
class Animal3{
    sound(animalName) {
        console.log(animalName + " makes a sound");
    }
}

class Dog3 extends Animal3 {
    sound(animalName) {
        super.sound(animalName);   // Calls parent class method
        console.log(animalName + " barks");
    }
}

let dog3 = new Dog3();

dog3.sound("Dog");
console.log("************************************")