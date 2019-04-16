var Person = {
    name : "undefined",
    age : "undefined",
    greeting : function (){
        console.log("Greetings, My Name is " + this.name + " and i am " + this.age + " years old");
    },
    salute : function () {
        console.log("Good Morning!, and in case i dont see you, good afternoon, good evening and good night!");
    }
};

function Person2 (name, age){
    this.name = name;
    this.age = age;
    this.greeting = function (){
        console.log("Greetings, My Name is " + this.name + " and i am " + this.age + " years old");
    };
    this.salute = function () {
        console.log("Good Morning!, and in case i dont see you, good afternoon, good evening and good night!");
    };
}
const Student = Object.create(Person);
Student.major = "Computer Science";
Student.greeting = function(){
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
};
Student.greeting();

const Student2 =  new Person2("Hecnock", 29);
Student2.major = "Computer Science";
Student2.greeting= function (){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
};

const  Professor = Object.create(Person);
Professor.department = "Computer Science";
Professor.greeting = function(){
    console.log("Good Day , my name is " + this.name + " and I am in the " + this.department + " department.");
};

const Professor2 =  new Person2("Beteab", 29);
Professor2.major = "Computer Science";
Professor2.greeting= function (){
    console.log("Good Day , my name is " + this.name + " and I am in the " + this.department + " department.");
};

console.log(Function.isPrototypeOf(Object));

// const s1 = Object.create(Student);
// s1.name ="Moreno";
// s1.age = "Hector";
// const p1 = Object.create(Professor);
// p1.name = "Dimitri";
// p1.age = "Guthrie";
// s1.greeting();
// s1.salute();
// Person.greeting();
// Student.greeting()
// p1.greeting();
// p1.salute();
