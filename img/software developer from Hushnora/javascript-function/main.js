// Declaration funtion
let a = +prompt("enter first number")
let b = +prompt("enter second number")


function nums(a ,b) {
    let result = a + b;
    return result;
}
console.log(nums(a,b));

// Experassion function

const FullName = function(name, surname){
    let result = `Mani ismim ${name}, mani familiyam ${surname}` 
    return result;
}
console.log(FullName("bruce", "wayne"));

// arrow function

const minus = (a, b) =>{
    return a - b
}
console.log(minus(30,10));