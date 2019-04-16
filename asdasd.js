// function Foo(x){
//     this.y = x;
// };
//
// Foo.prototype.x = 10;
// Foo.prototype.calculate = function(z){
//     return this.x + this.y + z;
// };
//
// var b = new Foo(10);
// // b.x = 20;
// console.log(b);
// // b.prototype.add=function(z){
// //     return this.x + this.y + z;
// // };
//
// console.log(b.x);
//
// // console.log("this is not a nice house".file('not'));
// var proto = {
//     describe : function () {
//         return 'name: ' + this.name;
//
//     }
// };
//
// var obj = {
//     [[Prototype]]: proto,
//     name : 'obj'
// };
//
// obj.prototype.add = function(){
//     return "hello dick";
// }
console.log(10/"hello");

function f(x, y){
    console.log(x + " " +y);
}

f(2);
