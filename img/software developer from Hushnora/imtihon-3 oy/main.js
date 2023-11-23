
let nickname = prompt("What's your name")
let zagalovok = document.getElementById("title")
zagalovok.innerHTML = nickname;

let number1 = prompt("Bitta son kiriting")
if (number1 %2 ==0 ) {
    alert("bu juft son");
}else{
    alert("bu son toq son");
}

let son1 = +prompt("enter first number")
let son2 = +prompt("enter second number")
let son3 = +prompt("enter third number")
let son4 = +prompt("enter fourth number")
let son5 = +prompt("enter fifth number")


if(son1 > son2 && son1 > son3 && son1 > son4 && son1 > son5){
    alert("birinchi kiritirilgan son katta")
}else if (son2 > son1 && son2 > son3 && son2 > son4 && son2 > son5){
    alert("ikkinchi kiritilgan son katta")
}else if (son3 > son1 && son3 > son2 && son3 > son4 && son3 > son5){
    alert("uchinchi kiritirilgan son katta")
}else if (son4 > son1 && son4 > son2 && son4 > son3 && son4 > son5){
    alert("tortinchi kiritirilgan son katta")
}else if (son5 > son1 && son5 > son2 && son5 > son3 && son5 > son4){
    alert("beshinchi kiritirilgan son katta")
}else{
    alert ("boshqattan son kiriting")
}

let counter = document.querySelector("#btn")
let number = document.querySelector("#number")
console.log(counter, number);
let son = 1;

counter.addEventListener("click", function())[
    son++
number.innerHTML=son;
]
