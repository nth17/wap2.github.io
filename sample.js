// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };
//
// var pokemonName = function() {
//     console.log(this.getPokeName() + 'I choose you!');
// };
//
// console.log(pokemonName.hasOwnProperty('firstname'));
//
//
// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// logPokemon.firstname = 'John';
// logPokemon(); // 'Pika Chu I choose you!'
//
// console.log(logPokemon.hasOwnProperty('firstname'));
// x =1;
// var a = 5;
// var b = 10;
// var c = function(a,b,c){
//     console.log('x1: ' + x);
//     console.log('a2: ' + a);
//     var f =function(){
//         b =a;console.log('b3: ' + b);
//         b =c;
//         var a =3;
//     };
//     f();
//     console.log('b4: ' + b);
//     x =6;
// };
// c(8,9,7);
// console.log('b5: ' + b);
// console.log('x6: ' + x);
// "use strict";
// (function() {
//     function Employee(id){
//         this.id = id;
//         this.name = "Default";
//         this.employer = "MUM";
//     }
//     const emp1 = new Employee(980000);
//     console.log(emp1.hasOwnProperty('id'));
//     console.log(emp1.hasOwnProperty('name'));
//     Employee.prototype.getname = function (){
//         return this.name;
//     };
//     Employee.prototype.getEmployer = function(){
//         return this.employer;
//     };
//
//     console.log(emp1.hasOwnProperty('getname'));
// })();
//
//
// var spans = $("#ex1 span.special");
//
// spans.each(function(id, element){
//     var e = $(element);
//     e.prepend($("<img>"))
// });
// var funcs = [];
// for(let  i=0 ; i<5; i++){
//     funcs[i]=(function(){
//        return function (){
//            return i;
//        }
//     }());
// }
//
// console.log(funcs[0]());
// const Module = (function() {
//     const privateMethod = function(){
//       console.log("private ");
//     };
//     const publicMethod = function(){
//         console.log("public");
//     };
//     return {
//         public : publicMethod()
//     }
// });
//
// Module().
// function f(){
//     this.name = "hachalu";
//     this.professon = "software developer";
//     this.returnname = function(){
//         console.log(this.name);
//     };
// }
// function e(){
//     this.name = "urgessa";
//     this.returnname = function(){
//         console.log(this.name);
//     };
// }
// // var c = f.call(e, )
// var obj = {
//     name : "fred",
//     major : "music"
// };
// obj.smallestoftwo = function(x , y){
//     if(x<y)
//         return x;
//     return y;
// };
var str = "hello";
str.substr(2,2);
console.log(str.substr(2,2));
console.log(str.);
// var Employee = function(){
//     let name;
//     let age;
//     let salary;
//     const setage = function (newage) {
//         age = newage;
//     };
//     const setSalary = function (newsalary) {
//         salary = newsalary;
//     };
//     const setname = function (newname) {
//         name = newname;
//     };
//     const getage = function () {
//         return age;
//     };
//     const getname = function () {
//         return name;
//     };
//     const getsalary = function () {
//         return salary;
//     };
//     const increasesalry = function (percentage) {
//         let sal = getsalary();
//         sal += (getsalary() * percentage);
//         setSalary(sal);
//     };
//     const incrementage = function () {
//         let a = getage();
//         a += 1;
//         setage(a);
//     };
//     return {
//         setsal : setSalary,
//         setna : setname,
//         setag : setage,
//         increasesal : increasesalry,
//         incrementag : incrementage
//     };
// };
// var
// Employee.call()
