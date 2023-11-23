

let nickname = prompt("What's your name")
let zagalovok = document.getElementById("title")
zagalovok.innerHTML = nickname;

let counter = document.querySelector("#btn")
let number = document.querySelector("#number")
console.log(counter, number);
let son = 1;

counter.addEventListener("click", function() {
    son++;
number.innerHTML=son;

})
