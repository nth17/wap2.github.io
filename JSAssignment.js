function max(x , y){
    if(x>=y)
        return x;
    else
        return y;
}
function maxOfThree(x, y, z){
    if(x>=y && x>=z)
        return x;
    else if(y>=x && y>=z)
        return y;
    else
        return  z;
}
function isVowel(c){
    if(c.length > 1)
        return false;
    c = c.toUpperCase();
    return c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U';
}
function sum(c)
{
    let sum  = 0;
    for(let i = 0 ; i<c.length; i++){
        if(typeof c[i] === 'number')
            sum+=c[i];
    }
    return sum;
}

function multiply(arr){
    let product  = 1;
    for(let i = 0 ; i<arr.length; i++){
        if(typeof arr[i] === 'number') {
            product *= arr[i];
        }
    }
    return product;
}

function reverse(str){
    str = str.toString().split('').reverse();

    return str.toString();
}


function findLongestWord(strs){
    let maxlength = strs[0].length;
    for(var x = 0; x<strs.length; x++){
        if(strs[x].length > maxlength)
            maxlength = strs[x].length;
    }
    return maxlength;
}
var timer = null;

window.onload = function(){
    if(timer == null){
        timer = setinterval(function () {
            document.getElementById("Output").innerHTML += "Rudy";
        }, 1000);
    }
    else {
        clearInterval(timer);
        timer = null;
    }
}





let a = [1,2,3,4, "r", "e"];
let f = ["Nahom", "Henock", "Beteab", "Mutabazi"];
console.log(max(10,20));
console.log(maxOfThree(10,20, 30));
console.log(sum(a));
console.log(multiply(a));
console.log(isVowel("e"));
console.log(reverse("Hello"));
console.log(findLongestWord(f));
