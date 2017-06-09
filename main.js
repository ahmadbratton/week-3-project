const sevenBtn = document.querySelector("#btn7");
const eightBtn = document.querySelector("#btn8");
const nineBtn = document.querySelector("#btn9");
const divideBtn = document.querySelector("#btn_divide");
const fourBtn = document.querySelector("#btn4");
const fiveBtn = document.querySelector("#btn5");
const sixBtn = document.querySelector("#btn6");
const xBtn = document.querySelector("#btnx");
const oneBtn = document.querySelector("#btn1");
const twoBtn = document.querySelector("#btn2");
const threeBtn = document.querySelector("#btn3");
const zeroBtn = document.querySelector("#btn0");
const decBtn = document.querySelector("#btn_dec");
const equalBtn = document.querySelector("#btn_eq");
const addBtn = document.querySelector("#btn_add");
let btnList = document.querySelectorAll(".squares");
const display = document.getElementById("display");


    let numValue =[] ;
    let currentNum = "";
    let opValue = [];
    let result = 0;

for (var i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener("click", function calculator(event){
        onClick(event);
    });
}

function onClick(event){
    let btn = event.target;
if(btn.classList.contains("number")){
    display.innerHTML += btn.innerHTML;
    currentNum += btn.innerHTML;


}
if (btn.id === "btnc"){
display.innerHTML = ""
numValue =[] ;
currentNum = "";
opValue = [];
result = 0;

}
if(btn.classList.contains("operators")){
    numValue.push(parseInt(currentNum));
    currentNum="";
    opValue.push(btn.innerHTML);
    display.innerHTML += btn.innerHTML;


}
if(btn.id === "btn_eq" ){
    result = numValue[0];
    // while (condition) {
        
    // }
    for (var i = 0; i < opValue.length; i++) {
        if (opValue[i] === "+"){
            result = result + numValue[i+1];
        }
        else if (opValue[i] === "-"){
            result = result - numValue[i+1];
        }
        else if (opValue[i] === "/"){
            result = result / numValue[i+1];
        }  
        else if (opValue[i] === "X"){
            result = result * numValue[i+1];

        }      
    }
    display.innerHTML += result;

}

    
}
